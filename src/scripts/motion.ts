import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll, getLenis } from './smooth-scroll';
import { initReveals, initParallax } from './reveals';

/**
 * Motion lifecycle owner — the ONLY module that boots GSAP and Lenis,
 * and the only place triggers are created or destroyed.
 *
 * Restraint rules (audience: industry executives):
 *  - one effect per section; reveals travel ≤ 16px; durations ≤ 0.9s
 *  - no pinning, no scroll-jacking
 *  - reduced-motion visitors get the fully static site (no Lenis, no GSAP)
 *
 * View Transitions lifecycle:
 *  - astro:page-load  → init everything against the fresh DOM
 *  - astro:before-swap → kill all triggers/tweens referencing old DOM
 *  - Lenis persists across swaps (bound to window, not swapped nodes)
 */

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function init(): void {
  if (reducedMotion) return;

  try {
    initSmoothScroll();
    initReveals();
    initParallax();
    ScrollTrigger.refresh();
  } catch (err) {
    // Content must never stay hidden behind a broken animation layer —
    // dropping js-enabled restores the fully-visible static state.
    document.documentElement.classList.remove('js-enabled');
    throw err;
  }
}

function destroy(): void {
  if (reducedMotion) return;

  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.globalTimeline.clear();
}

document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', destroy);
document.addEventListener('astro:after-swap', () => {
  getLenis()?.scrollTo(0, { immediate: true, force: true });
});
