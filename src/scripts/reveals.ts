import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Declarative section reveals: any element with [data-reveal] fades/drifts in
 * once as it enters the viewport. Elements inside a [data-reveal-stagger]
 * parent reveal as a gently staggered batch. Max travel 14px — restraint.
 */
export function initReveals(): void {
  const all = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (all.length === 0) return;

  const staggered = new Set<HTMLElement>();
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((parent) => {
    const children = Array.from(
      parent.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    if (children.length === 0) return;
    children.forEach((c) => staggered.add(c));
    gsap.set(children, { opacity: 0, y: 14 });
    ScrollTrigger.create({
      trigger: parent,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.09,
        }),
    });
  });

  all
    .filter((el) => !staggered.has(el))
    .forEach((el) => {
      gsap.set(el, { opacity: 0, y: 14 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
}

/**
 * Decorative parallax: [data-depth="0.05"] drifts at most a few percent while
 * its section scrubs past. Never applied to copy.
 */
export function initParallax(): void {
  gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el) => {
    const depth = Math.min(parseFloat(el.dataset.depth ?? '0'), 0.12);
    if (!depth) return;
    gsap.fromTo(
      el,
      { yPercent: depth * 60 },
      {
        yPercent: -depth * 60,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });
}
