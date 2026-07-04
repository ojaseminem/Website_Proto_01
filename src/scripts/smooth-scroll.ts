import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Lenis is created once and survives View Transition swaps — it attaches to
 * the window/document, not to swapped DOM. Everything scroll-triggered reads
 * its position through ScrollTrigger.update.
 */
let lenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenis;
}

export function initSmoothScroll(): Lenis {
  if (lenis) return lenis;

  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
