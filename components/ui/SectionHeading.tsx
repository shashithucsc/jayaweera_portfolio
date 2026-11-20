'use client';

import { useRef } from 'react';
import type { IconType } from 'react-icons';
import { gsap, useGSAP } from '@/lib/gsap';

interface SectionHeadingProps {
  eyebrow: string;
  icon: IconType;
  title: string;
  accent: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  accent,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const root = useRef<HTMLDivElement>(null);

  const words = [
    ...title.split(' ').map((w) => ({ w, accent: false })),
    ...accent.split(' ').map((w) => ({ w, accent: true })),
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top 85%' },
      });
      tl.from('.sh-eyebrow', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from(
          '.sh-word',
          { yPercent: 115, rotate: 4, duration: 0.9, stagger: 0.07, ease: 'power4.out' },
          '-=0.3'
        )
        .to('.sh-squiggle', { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, '-=0.6')
        .from('.sh-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.8');
    },
    { scope: root }
  );

  const isCenter = align === 'center';

  return (
    <div ref={root} className={`${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl mb-16`}>
      <span className="sh-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-3 border border-petal/25 text-xs font-medium uppercase tracking-[0.2em] text-blush mb-6">
        <span className="w-5 h-5 rounded-full bg-petal flex items-center justify-center">
          <Icon className="w-3 h-3 text-ink" />
        </span>
        {eyebrow}
      </span>

      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-[1.1]">
        {words.map((x, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-2 mr-[0.25em]">
            <span className={`sh-word inline-block ${x.accent ? 'italic text-petal' : ''}`}>
              {x.w}
            </span>
          </span>
        ))}
      </h2>

      <svg
        viewBox="0 0 220 16"
        className={`w-44 h-4 mt-1 ${isCenter ? 'mx-auto' : ''}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          className="sh-squiggle"
          d="M2 9 Q 20 1 38 9 T 74 9 T 110 9 T 146 9 T 182 9 T 218 9"
          stroke="#f472b6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="260"
          strokeDashoffset="260"
        />
      </svg>

      {subtitle && (
        <p className={`sh-sub mt-5 text-base sm:text-lg text-mauve leading-relaxed ${isCenter ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
