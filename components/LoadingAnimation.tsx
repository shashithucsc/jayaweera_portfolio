'use client';

import { useRef, useState } from 'react';
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap';

export default function LoadingAnimation() {
  const root = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      document.documentElement.style.overflow = 'hidden';
      const counter = { v: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.style.overflow = '';
          window.__loaderDone = true;
          window.dispatchEvent(new Event('loader:done'));
          ScrollTrigger.refresh();
          setDone(true);
        },
      });

      tl.from('.ld-char', {
        yPercent: 120,
        rotate: 8,
        opacity: 0,
        stagger: 0.06,
        duration: 0.8,
        ease: 'power4.out',
      })
        .from('.ld-sub', { y: 12, opacity: 0, duration: 0.5, ease: 'power3.out' }, 0.45)
        .to('.ld-check-circle', { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, 0.1)
        .fromTo('.ld-bar', { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, 0)
        .to(
          counter,
          {
            v: 100,
            duration: 1.4,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (countRef.current) countRef.current.textContent = `${Math.round(counter.v)}%`;
            },
          },
          0
        )
        .to('.ld-check-mark', { strokeDashoffset: 0, duration: 0.45, ease: 'power2.out' }, 1.2)
        .to('.ld-content', { y: -40, opacity: 0, duration: 0.5, ease: 'power2.in' }, '+=0.25')
        .to('.ld-panel-1', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.15')
        .to('.ld-panel-2', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.72');
    },
    { scope: root }
  );

  if (done) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[90]">
      <div className="ld-panel-2 absolute inset-0 bg-petal" />
      <div className="ld-panel-1 absolute inset-0 bg-ink flex items-center justify-center">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="ld-content relative flex flex-col items-center">
          <svg width="72" height="72" viewBox="0 0 64 64" className="mb-6" aria-hidden="true">
            <circle cx="32" cy="32" r="26" fill="none" stroke="#2c1b35" strokeWidth="3" />
            <circle
              className="ld-check-circle"
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="#f472b6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="164"
              strokeDashoffset="164"
              transform="rotate(-90 32 32)"
            />
            <path
              className="ld-check-mark"
              d="M21 33 l7 7 l15 -16"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="40"
              strokeDashoffset="40"
            />
          </svg>

          <div className="overflow-hidden pb-2">
            <h1 className="font-display text-6xl md:text-7xl text-cream flex">
              {'Devindi'.split('').map((c, i) => (
                <span key={i} className="ld-char inline-block">
                  {c}
                </span>
              ))}
              <span className="ld-char inline-block text-petal">.</span>
            </h1>
          </div>
          <p className="ld-sub mt-2 text-xs tracking-[0.35em] uppercase text-mauve">
            Quality Assurance Engineer
          </p>

          <div className="mt-8 w-56 h-[2px] bg-ink-4 rounded-full overflow-hidden">
            <div className="ld-bar h-full bg-petal origin-left" />
          </div>
          <span ref={countRef} className="mt-3 font-mono text-sm text-blush">
            0%
          </span>
        </div>
      </div>
    </div>
  );
}
