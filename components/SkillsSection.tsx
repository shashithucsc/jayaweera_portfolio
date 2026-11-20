'use client';

import { useRef } from 'react';
import type { IconType } from 'react-icons';
import {
  SiSelenium,
  SiCypress,
  SiPostman,
  SiApachejmeter,
  SiJira,
  SiJunit5,
  SiPytest,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiMysql,
  SiSpringboot,
} from 'react-icons/si';
import { FaJava, FaVial } from 'react-icons/fa';
import { HiWrenchScrewdriver, HiBeaker, HiCommandLine, HiCodeBracket } from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';

interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

const categories: {
  title: string;
  icon: IconType;
  accent: string;
  bar: string;
  skills: Skill[];
}[] = [
  {
    title: 'Test Automation',
    icon: HiBeaker,
    accent: 'bg-petal',
    bar: 'bg-petal',
    skills: [
      { name: 'Selenium', icon: SiSelenium, level: 90 },
      { name: 'Playwright', icon: FaVial, level: 85 },
      { name: 'Cypress', icon: SiCypress, level: 82 },
      { name: 'JUnit 5', icon: SiJunit5, level: 84 },
      { name: 'Pytest', icon: SiPytest, level: 80 },
    ],
  },
  {
    title: 'API, Performance & Tooling',
    icon: HiCommandLine,
    accent: 'bg-lilac',
    bar: 'bg-lilac',
    skills: [
      { name: 'Postman', icon: SiPostman, level: 92 },
      { name: 'Apache JMeter', icon: SiApachejmeter, level: 80 },
      { name: 'Jira', icon: SiJira, level: 88 },
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 76 },
    ],
  },
  {
    title: 'Full Stack Foundation',
    icon: HiCodeBracket,
    accent: 'bg-peach',
    bar: 'bg-peach',
    skills: [
      { name: 'React / Next.js', icon: SiReact, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'Node.js', icon: SiNodedotjs, level: 86 },
      { name: 'Java / Spring', icon: FaJava, level: 82 },
      { name: 'Python', icon: SiPython, level: 84 },
    ],
  },
];

const databases = [
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Next.js', icon: SiNextdotjs },
];

const practices = [
  'Manual & Exploratory Testing',
  'Regression Testing',
  'Smoke & Sanity',
  'REST API Testing',
  'Load & Performance',
  'Test Plans & Cases',
  'Bug Reporting & Triage',
  'Root Cause Analysis',
  'Page Object Model',
  'Cross-Browser Testing',
  'Responsive UI Testing',
  'Accessibility (WCAG)',
  'CI/CD Quality Gates',
  'TDD & Unit Testing',
  'Agile / Scrum',
];

export default function SkillsSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.sk-card', {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.sk-grid', start: 'top 85%' },
      });

      gsap.utils.toArray<HTMLElement>('.sk-card').forEach((card) => {
        gsap.fromTo(
          card.querySelectorAll('.sk-bar'),
          { scaleX: 0 },
          {
            scaleX: 1,
            stagger: 0.1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 80%' },
          }
        );
      });

      gsap.from('.sk-db', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.sk-dbs', start: 'top 90%' },
      });

      gsap.from('.sk-tag', {
        scale: 0,
        opacity: 0,
        stagger: { each: 0.04, from: 'center' },
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: '.sk-tags', start: 'top 85%' },
      });
    },
    { scope: root }
  );

  return (
    <section id="skills" ref={root} className="relative py-28 overflow-hidden bg-ink-2">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute -bottom-40 left-1/4 w-[520px] h-[520px] rounded-full bg-petal/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & Tools"
          icon={HiWrenchScrewdriver}
          title="My quality"
          accent="toolkit"
          subtitle="Automation frameworks, testing tools and full-stack technologies I use to keep software reliable."
        />

        <div className="sk-grid grid lg:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div key={cat.title} className="sk-card card-soft rounded-[2rem] p-7 sm:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className={`w-12 h-12 rounded-2xl ${cat.accent} flex items-center justify-center`}>
                    <CatIcon className="w-6 h-6 text-ink" />
                  </span>
                  <h3 className="font-display text-2xl text-cream">{cat.title}</h3>
                </div>
                <div className="space-y-6">
                  {cat.skills.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.name}>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="flex items-center gap-3 text-sm text-cream">
                            <span className="w-8 h-8 rounded-lg bg-ink-4 flex items-center justify-center">
                              <Icon className="w-4 h-4 text-blush" />
                            </span>
                            {s.name}
                          </span>
                          <span className="font-mono text-xs text-mauve">{s.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-ink-4 overflow-hidden">
                          <div
                            className={`sk-bar h-full rounded-full ${cat.bar} origin-left`}
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Databases & frameworks row */}
        <div className="sk-dbs flex flex-wrap justify-center gap-4 mb-16">
          {databases.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.name}
                className="sk-db flex items-center gap-3 pl-2 pr-5 py-2 rounded-full card-soft hover:border-petal/40 transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-ink-4 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-petal" />
                </span>
                <span className="text-sm text-cream">{d.name}</span>
              </div>
            );
          })}
        </div>

        {/* Practices */}
        <div className="card-soft rounded-[2rem] p-8 sm:p-10 text-center">
          <h3 className="font-display text-3xl text-cream mb-2">
            Testing <span className="italic text-petal">practices</span>
          </h3>
          <p className="text-mauve text-sm mb-8">Methodologies I apply every day</p>
          <div className="sk-tags flex flex-wrap justify-center gap-3">
            {practices.map((p, i) => (
              <span
                key={p}
                className={`sk-tag px-4 py-2 rounded-full text-sm transition-colors cursor-default ${
                  i % 5 === 0
                    ? 'bg-petal text-ink font-medium'
                    : 'bg-ink-4 text-blush hover:bg-blush hover:text-ink'
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
