'use client';

import { useRef } from 'react';
import {
  HiDocumentMagnifyingGlass,
  HiClipboardDocumentList,
  HiPlayCircle,
  HiBugAnt,
  HiCpuChip,
  HiRocketLaunch,
  HiArrowsRightLeft,
  HiCheck,
} from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    icon: HiDocumentMagnifyingGlass,
    title: 'Requirement Analysis',
    text: 'Understand user stories, acceptance criteria and risk areas before a single test is written.',
    points: ['User stories', 'Risk mapping'],
    bg: 'bg-petal',
  },
  {
    icon: HiClipboardDocumentList,
    title: 'Test Planning & Design',
    text: 'Craft test plans, scenarios, boundary and negative cases with full traceability.',
    points: ['Test cases', 'Traceability'],
    bg: 'bg-lilac',
  },
  {
    icon: HiPlayCircle,
    title: 'Execution & Exploration',
    text: 'Run manual and exploratory sessions across browsers, devices and edge cases.',
    points: ['Cross-browser', 'Exploratory'],
    bg: 'bg-peach',
  },
  {
    icon: HiBugAnt,
    title: 'Bug Reporting & Triage',
    text: 'Log crisp, reproducible defects in Jira with severity, evidence and root cause.',
    points: ['Jira', 'Root cause'],
    bg: 'bg-blush',
  },
  {
    icon: HiCpuChip,
    title: 'Automation & CI',
    text: 'Automate regressions with Selenium, Playwright and Cypress wired into CI/CD pipelines.',
    points: ['POM', 'CI pipelines'],
    bg: 'bg-mint',
  },
  {
    icon: HiRocketLaunch,
    title: 'Release Sign-off',
    text: 'Verify fixes, run smoke suites and give a confident, data-backed go-live.',
    points: ['Smoke suite', 'Go-live'],
    bg: 'bg-petal',
  },
];

export default function ProcessSection() {
  const root = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current!;
        const getDist = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -getDist(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: () => `+=${getDist()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        gsap.fromTo(
          '.pr-progress',
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: pinRef.current,
              start: 'top top',
              end: () => `+=${getDist()}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>('.pr-card').forEach((card) => {
          gsap.from(card.querySelector('.pr-icon'), {
            scale: 0,
            rotation: -120,
            duration: 0.8,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 90%' },
          });
          gsap.from(card.querySelectorAll('.pr-point'), {
            x: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 80%' },
          });
        });
      });

      mm.add('(max-width: 1023px)', () => {
        gsap.from('.pr-card', {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: trackRef.current, start: 'top 85%' },
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="process" ref={root} className="relative bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        ref={pinRef}
        className="relative lg:h-screen flex flex-col justify-center py-24 lg:py-0"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="My QA Process"
            icon={HiArrowsRightLeft}
            title="From idea to"
            accent="flawless release"
            subtitle="A structured, repeatable testing lifecycle that keeps quality baked in at every step."
            align="left"
          />
          <div className="hidden lg:flex items-center gap-3 mb-16 text-sm text-mauve">
            <span>Scroll to explore</span>
            <span className="w-40 h-[3px] rounded-full bg-ink-4 overflow-hidden">
              <span className="pr-progress block h-full bg-petal origin-left" />
            </span>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:w-max px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="pr-card group relative lg:w-[400px] shrink-0 card-soft rounded-[2rem] p-8 overflow-hidden hover:border-petal/40 transition-colors"
              >
                <span className="absolute -top-4 -right-2 font-display italic text-[8rem] leading-none text-outline-soft group-hover:text-petal/10 transition-colors select-none">
                  0{i + 1}
                </span>

                <div className="relative">
                  <span
                    className={`pr-icon w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-8 shadow-lg shadow-black/30`}
                  >
                    <Icon className="w-8 h-8 text-ink" />
                  </span>
                  <div className="text-xs uppercase tracking-[0.25em] text-petal mb-2">
                    Step 0{i + 1}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-cream mb-4">{step.title}</h3>
                  <p className="text-mauve leading-relaxed mb-6">{step.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.points.map((pt) => (
                      <span
                        key={pt}
                        className="pr-point inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink-4 text-xs text-blush"
                      >
                        <HiCheck className="w-3.5 h-3.5 text-mint" />
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
