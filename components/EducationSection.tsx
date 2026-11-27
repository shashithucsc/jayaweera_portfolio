'use client';

import { useRef } from 'react';
import { HiAcademicCap, HiBookOpen, HiStar, HiCheckBadge } from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';

const education = [
  {
    degree: 'BSc (Hons) in Computer Science and Technology',
    institution: 'Uva Wellassa University, Sri Lanka',
    period: '2023 – 2027',
    description: 'Current GPA: 3.38 — Focusing on Software Quality Assurance, Test Automation, and Full-Stack Web Development.',
    icon: HiAcademicCap,
    bg: 'bg-petal',
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'Physical Science Stream',
    period: '2021',
    description: 'Completed G.C.E. Advanced Level in the Physical Science stream.',
    icon: HiBookOpen,
    bg: 'bg-lilac',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    institution: '9 A’s',
    period: '2017',
    description: 'Achieved 9 A’s across all subjects.',
    icon: HiStar,
    bg: 'bg-peach',
  },
];

const certifications = [
  {
    provider: 'QA & Test Automation',
    bg: 'bg-petal',
    items: [
      { title: 'Test Automation Foundations – LinkedIn Learning', date: 'Nov 2026' },
      { title: 'Programming Foundations: Software Testing/QA – LinkedIn Learning', date: 'Nov 2026' },
      { title: 'Testing Fundamentals – Master.dev', date: 'Nov 2026' },
      { title: 'Introduction to Selenium – Simplilearn SkillUp', date: 'Nov 2026' },
    ],
  },
  {
    provider: 'Databases & SQL',
    bg: 'bg-mint',
    items: [
      { title: 'SQL (Intermediate) – HackerRank', date: 'Nov 2026' },
      { title: 'SQL (Basic) – HackerRank', date: 'Nov 2026' },
    ],
  },
];

export default function EducationSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.ed-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.ed-timeline', start: 'top 70%', end: 'bottom 60%', scrub: true },
        }
      );

      gsap.utils.toArray<HTMLElement>('.ed-item').forEach((item) => {
        const dir = Number(item.dataset.dir);
        gsap.from(item.querySelector('.ed-card'), {
          x: 80 * dir,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 80%' },
        });
        gsap.from(item.querySelector('.ed-dot'), {
          scale: 0,
          duration: 0.6,
          ease: 'back.out(3)',
          scrollTrigger: { trigger: item, start: 'top 70%' },
        });
      });

      gsap.from('.ed-cert', {
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: { trigger: '.ed-certs', start: 'top 95%', once: true },
      });
    },
    { scope: root }
  );

  return (
    <section id="education" ref={root} className="relative py-28 overflow-hidden bg-ink">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/3 -left-40 w-[460px] h-[460px] rounded-full bg-lilac/10 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          icon={HiAcademicCap}
          title="Always"
          accent="learning"
          subtitle="Academic journey at Uva Wellassa University backed by QA and SQL certifications."
        />

        {/* Timeline */}
        <div className="ed-timeline relative mb-28">
          <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-px bg-ink-4 lg:-translate-x-1/2" />
          <div className="ed-line absolute left-5 lg:left-1/2 top-0 bottom-0 w-px bg-petal origin-top lg:-translate-x-1/2" />

          <div className="space-y-14">
            {education.map((edu, i) => {
              const Icon = edu.icon;
              const right = i % 2 === 1;
              return (
                <div
                  key={edu.degree}
                  data-dir={right ? 1 : -1}
                  className={`ed-item relative flex flex-col lg:flex-row items-start lg:items-center ${
                    right ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full lg:w-1/2 pl-14 lg:pl-0 lg:px-12">
                    <div className="ed-card card-soft rounded-[2rem] p-7 sm:p-8 hover:border-petal/40 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <span className={`w-14 h-14 rounded-2xl ${edu.bg} flex items-center justify-center shrink-0`}>
                            <Icon className="w-7 h-7 text-ink" />
                          </span>
                          <div>
                            <h3 className="font-display text-xl sm:text-2xl text-cream leading-tight">{edu.degree}</h3>
                            <p className="text-sm text-mauve mt-1">{edu.institution}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-ink-4 text-xs text-blush shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-mauve">{edu.description}</p>
                    </div>
                  </div>

                  <span className="ed-dot absolute left-5 lg:left-1/2 top-8 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-5 h-5 rounded-full bg-petal ring-[6px] ring-ink" />
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <h3 className="font-display text-3xl sm:text-4xl text-cream text-center mb-12">
          Professional <span className="italic text-petal">certifications</span>
        </h3>
        <div className="ed-certs grid md:grid-cols-2 gap-6">
          {certifications.map((group) => (
            <div
              key={group.provider}
              className="ed-cert card-soft rounded-[2rem] p-7 sm:p-8 hover:-translate-y-1 hover:border-petal/40 transition-all duration-500"
            >
              <h4 className="flex items-center gap-3 font-display text-2xl text-cream mb-6">
                <span className={`w-10 h-10 rounded-xl ${group.bg} flex items-center justify-center`}>
                  <HiCheckBadge className="w-5 h-5 text-ink" />
                </span>
                {group.provider}
              </h4>
              <ul className="divide-y divide-blush/10">
                {group.items.map((c) => (
                  <li key={c.title} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-sm text-cream/90">{c.title}</span>
                    <span className="font-mono text-xs text-mauve whitespace-nowrap">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
