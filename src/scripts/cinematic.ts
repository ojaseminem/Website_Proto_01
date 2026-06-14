import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * All scroll-driven "camera work". Declarative: components opt in with
 * data-attributes, so each page composes its own sequence of shots.
 *
 *   data-shot="rise|fade|focus"  -> reveal on enter
 *   data-shot="dolly"            -> scrubbed scale (dolly-in)
 *   data-parallax="0.3"          -> scrubbed parallax drift
 *   data-marquee                 -> auto horizontal drift (duplicate content)
 *   data-cut                     -> fade-to-black "cut" as the scene arrives
 *
 * (The scroll-progress indicator is the swimming Turtle component, which runs
 *  its own scroll-tracking independent of GSAP.)
 *
 * Everything is registered inside a gsap.context so a single revert() cleans
 * up perfectly across Astro View Transitions.
 */
let ctx: ReturnType<typeof gsap.context> | null = null;

export function initCinematics(): void {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  ctx = gsap.context(() => {
    // --- Entrance reveals -------------------------------------------------
    gsap.utils.toArray<HTMLElement>('[data-shot="rise"]').forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-shot="fade"]').forEach((el) => {
      gsap.to(el, {
        opacity: 1, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-shot="focus"]').forEach((el) => {
      gsap.to(el, {
        opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.3, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      });
    });

    // --- Dolly-in (scrubbed scale on a framed shot) -----------------------
    gsap.utils.toArray<HTMLElement>('[data-shot="dolly"]').forEach((el) => {
      gsap.fromTo(el, { scale: 1.16 }, {
        scale: 1, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'center center', scrub: true },
      });
    });

    // --- Parallax drift ---------------------------------------------------
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.2');
      gsap.fromTo(el, { yPercent: -speed * 50 }, {
        yPercent: speed * 50, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // --- Marquee (seamless auto drift; content is duplicated in markup) ---
    gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach((track) => {
      const dist = track.scrollWidth / 2;
      if (dist > 0) {
        gsap.to(track, { x: -dist, duration: 26, ease: 'none', repeat: -1 });
      }
    });

    // --- Cuts: fade-to-black + cinematic letterbox as a scene arrives -----
    const overlay = document.querySelector<HTMLElement>('#cut-overlay');
    const bars = gsap.utils.toArray<HTMLElement>('.lb');
    if (overlay) {
      gsap.utils.toArray<HTMLElement>('[data-cut]').forEach((el) => {
        gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 28%', scrub: true },
        })
          .to(overlay, { opacity: 0.92, duration: 0.5, ease: 'power1.in' }, 0)
          .to(bars, { scaleY: 1, duration: 0.5, ease: 'power2.in' }, 0)
          .to(overlay, { opacity: 0, duration: 0.5, ease: 'power1.out' }, 0.5)
          .to(bars, { scaleY: 0, duration: 0.5, ease: 'power2.out' }, 0.5);
      });
    }
  });

  ScrollTrigger.refresh();
}

export function destroyCinematics(): void {
  ctx?.revert();
  ctx = null;
}
