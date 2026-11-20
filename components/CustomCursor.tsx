'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || !dot.current || !ring.current) return;
    document.documentElement.classList.add('custom-cursor');

    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power3' });
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power3' });
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' });
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' });

    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50 });

    let shown = false;
    const move = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.3 });
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button, [data-cursor]');
      gsap.to(ring.current, {
        scale: target ? 1.9 : 1,
        backgroundColor: target ? 'rgba(244, 114, 182, 0.15)' : 'rgba(244, 114, 182, 0)',
        borderColor: target ? 'rgba(244, 114, 182, 0.9)' : 'rgba(244, 114, 182, 0.6)',
        duration: 0.35,
        ease: 'power3.out',
      });
      gsap.to(dot.current, { scale: target ? 0 : 1, duration: 0.25 });
    };

    const down = () => gsap.to(ring.current, { scale: 0.75, duration: 0.15 });
    const up = () => gsap.to(ring.current, { scale: 1, duration: 0.3 });

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-10 h-10 rounded-full border opacity-0 hidden md:block"
        style={{ borderColor: 'rgba(244, 114, 182, 0.6)' }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-2 h-2 rounded-full bg-petal opacity-0 hidden md:block"
      />
    </>
  );
}
