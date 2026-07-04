import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { getLenis } from './smooth-scroll';

/**
 * The companion turtle. Each page's <main data-turtle-path> declares a path
 * in normalized 0–100 viewport units (M/C commands, absolute coords only).
 * The mark swims along it, scrubbed to scroll with a lag so it trails the
 * visitor; it flips to face its direction of travel and leans with scroll
 * velocity. Hidden entirely on small screens / coarse pointers / reduced
 * motion (see TurtleGuide.astro CSS) — this module also never boots there.
 */

interface TurtleState {
  bobTween: gsap.core.Tween | null;
  velocityHandler: ((e: { velocity: number }) => void) | null;
  resizeHandler: (() => void) | null;
}

const state: TurtleState = {
  bobTween: null,
  velocityHandler: null,
  resizeHandler: null,
};

/** Scale a normalized 0–100 M/C path into viewport pixels. */
function scalePath(norm: string, w: number, h: number): string {
  let isX = true;
  return norm
    .trim()
    .split(/[\s,]+/)
    .map((token) => {
      if (/^[A-Za-z]$/.test(token)) {
        isX = true;
        return token;
      }
      const value = parseFloat(token);
      const scaled = isX ? (value / 100) * w : (value / 100) * h;
      isX = !isX;
      return scaled.toFixed(1);
    })
    .join(' ');
}

function buildTurtle(): void {
  const guide = document.getElementById('turtle-guide');
  const main = document.querySelector<HTMLElement>('main[data-turtle-path]');
  const path = main?.dataset.turtlePath;
  if (!guide || !path) return;

  const follower = guide.querySelector<HTMLElement>('.turtle-follower');
  const bob = guide.querySelector<HTMLElement>('.turtle-bob');
  if (!follower || !bob) return;

  guide.classList.add('is-active');

  const scaled = scalePath(path, window.innerWidth, window.innerHeight);
  const half = follower.offsetWidth / 2;

  // Layer 1 — path travel, scrubbed with a lag so the turtle trails you.
  let prevX = -Infinity;
  gsap.to(follower, {
    motionPath: { path: scaled },
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 0,
      end: 'max',
      scrub: 1.2,
      onUpdate: () => {
        const x = gsap.getProperty(follower, 'x') as number;
        // Face the direction of travel (mark's head points right at rest).
        if (Math.abs(x - prevX) > 1) {
          gsap.to(bob, {
            scaleX: x >= prevX ? 1 : -1,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          prevX = x;
        }
      },
    },
  });
  gsap.set(follower, { xPercent: -50, yPercent: -50, x: half, y: half });

  // Layer 2 — idle bob, always on, additive to everything else.
  state.bobTween = gsap.to(bob, {
    y: 6,
    rotation: 2,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });

  // Layer 3 — scroll-velocity lean: fast scrolling "kicks" the turtle.
  const leanTo = gsap.quickTo(follower, 'rotation', {
    duration: 0.5,
    ease: 'power2.out',
  });
  const lenis = getLenis();
  if (lenis) {
    state.velocityHandler = ({ velocity }) => {
      leanTo(gsap.utils.clamp(-10, 10, velocity * 0.35));
    };
    lenis.on('scroll', state.velocityHandler);
  }

  // Gentle arrival.
  gsap.from(follower, { opacity: 0, duration: 1.4, ease: 'power2.out' });
}

export function initTurtle(): void {
  const small = window.matchMedia('(max-width: 767px)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (small || coarse) return;

  buildTurtle();

  // Paths are baked in pixels — rebuild on meaningful resize.
  let timer: ReturnType<typeof setTimeout>;
  state.resizeHandler = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      destroyTurtle();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === document.body) t.kill();
      });
      buildTurtle();
    }, 300);
  };
  window.addEventListener('resize', state.resizeHandler);
}

export function destroyTurtle(): void {
  state.bobTween?.kill();
  state.bobTween = null;
  const lenis = getLenis();
  if (lenis && state.velocityHandler) {
    lenis.off('scroll', state.velocityHandler);
    state.velocityHandler = null;
  }
}

export function teardownTurtle(): void {
  destroyTurtle();
  if (state.resizeHandler) {
    window.removeEventListener('resize', state.resizeHandler);
    state.resizeHandler = null;
  }
}

// MotionPathPlugin must be registered before any motionPath tween.
gsap.registerPlugin(MotionPathPlugin);
