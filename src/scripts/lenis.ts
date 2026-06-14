import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Smooth, inertial scroll — the backbone of the cinematic feel.
 * Synced to GSAP's ticker so ScrollTrigger stays in lockstep.
 * Returns null (and does nothing) when the user prefers reduced motion.
 */
let tickerFn: ((time: number) => void) | null = null;

export function startLenis(): Lenis | null {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  const lenis = new Lenis({
    duration: 1.1,
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  tickerFn = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function stopLenis(lenis: Lenis | null): void {
  if (tickerFn) {
    gsap.ticker.remove(tickerFn);
    tickerFn = null;
  }
  lenis?.destroy();
}
