'use client';

import { useRef } from 'react';
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap';
import Sparkle from './ui/Sparkle';

const rowOne = ['Playwright', 'Postman', 'GitHub Actions', 'React.js', 'Node.js', 'Django', 'PHP', 'MySQL'];
const rowTwo = [
  'Page Object Model',
  'Regression Testing',
  'API Testing',
  'BVA & Equivalence Partitioning',
  'Requirements Traceability Matrix',
  'Defect Tracking',
  'Agile / Scrum',
];

export default function Marquee() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const t1 = gsap.to('.mq-row-1', { xPercent: -50, duration: 28, repeat: -1, ease: 'none' });
      const t2 = gsap.fromTo(
        '.mq-row-2',
        { xPercent: -50 },
        { xPercent: 0, duration: 34, repeat: -1, ease: 'none' }
      );

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 350, 6);
          [t1, t2].forEach((t) => {
            gsap.to(t, {
              timeScale: boost,
              duration: 0.2,
              overwrite: true,
              onComplete: () => {
                gsap.to(t, { timeScale: 1, duration: 1, ease: 'power2.out' });
              },
            });
          });
        },
      });

      gsap.to('.mq-sparkle', { rotation: 360, duration: 6, repeat: -1, ease: 'none' });
    },
    { scope: root }
  );

  const renderRow = (items: string[], cls: string, sparkleCls: string, textCls: string) => (
    <div className={`${cls} flex w-max`}>
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
          {items.map((item) => (
            <div key={item + dup} className="flex items-center">
              <span className={`px-6 sm:px-8 whitespace-nowrap ${textCls}`}>{item}</span>
              <Sparkle className={`mq-sparkle w-5 h-5 sm:w-6 sm:h-6 ${sparkleCls}`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section ref={root} className="relative py-20 overflow-hidden bg-ink">
      <div className="-rotate-2 bg-petal py-5 shadow-2xl shadow-petal/10">
        {renderRow(rowOne, 'mq-row-1', 'text-ink', 'font-display italic text-3xl sm:text-5xl text-ink font-semibold')}
      </div>
      <div className="rotate-1 -mt-3 bg-ink-3 border-y border-blush/10 py-4">
        {renderRow(rowTwo, 'mq-row-2', 'text-petal', 'text-lg sm:text-2xl text-blush uppercase tracking-[0.15em]')}
      </div>
    </section>
  );
}
