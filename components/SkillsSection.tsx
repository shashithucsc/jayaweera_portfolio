'use client';

import { useRef } from 'react';
import type { IconType } from 'react-icons';
import {
  SiPostman,
  SiGithubactions,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiDjango,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import { FaJava, FaVial, FaTerminal } from 'react-icons/fa';
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
    title: 'QA & Testing',
    icon: HiBeaker,
    accent: 'bg-petal',
    bar: 'bg-petal',
    skills: [
      { name: 'Playwright (POM)', icon: FaVial, level: 90 },
      { name: 'Postman API Testing', icon: SiPostman, level: 92 },
      { name: 'GitHub Actions CI/CD', icon: SiGithubactions, level: 85 },
      { name: 'Manual & Regression QA', icon: HiBeaker, level: 92 },
      { name: 'Test Case Design (BVA/EP)', icon: HiCommandLine, level: 88 },
    ],
  },
  {
    title: 'Languages & Databases',
    icon: HiCommandLine,
    accent: 'bg-lilac',
    bar: 'bg-lilac',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'Python', icon: SiPython, level: 86 },
      { name: 'Java', icon: FaJava, level: 84 },
      { name: 'PHP', icon: SiPhp, level: 85 },
      { name: 'SQL (MySQL / MongoDB)', icon: SiMysql, level: 88 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: HiCodeBracket,
    accent: 'bg-peach',
    bar: 'bg-peach',
    skills: [
      { name: 'React / React Native', icon: SiReact, level: 90 },
      { name: 'Node.js / Express', icon: SiNodedotjs, level: 86 },
      { name: 'Django & DRF', icon: SiDjango, level: 84 },
      { name: 'Spring Boot', icon: SiSpringboot, level: 78 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
];

const extraTools = [
  { name: 'C++', icon: SiCplusplus },
  { name: 'Bash', icon: FaTerminal },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase / Firestore', icon: SiFirebase },
  { name: 'Git & GitHub', icon: SiGit },
  { name: 'Figma', icon: SiFigma },
];

const practices = [
  'Playwright',
  'Page Object Model (POM)',
  'Postman API Testing',
  'Manual Testing',
  'Functional Testing',
  'Regression Testing',
  'Test Case Design (BVA)',
  'Equivalence Partitioning',
  'Requirements Traceability Matrix (RTM)',
  'Bug Reporting',
  'Defect Tracking',
  'GitHub Actions CI/CD',
  'Agile / Scrum',
  'REST APIs',
  'MySQL Workbench',
  'XAMPP',
  'Visual Studio Code',
  'GitHub Desktop',
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
          eyebrow="Technical Skills"
          icon={HiWrenchScrewdriver}
          title="My quality"
          accent="toolkit"
          subtitle="QA automation, testing methodologies, programming languages, and full-stack frameworks."
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

        {/* Cloud, Databases & Tools pills */}
        <div className="sk-dbs flex flex-wrap justify-center gap-4 mb-16">
          {extraTools.map((d) => {
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

        {/* QA & Engineering Practices */}
        <div className="card-soft rounded-[2rem] p-8 sm:p-10 text-center">
          <h3 className="font-display text-3xl text-cream mb-2">
            QA &amp; Engineering <span className="italic text-petal">practices</span>
          </h3>
          <p className="text-mauve text-sm mb-8">Tools, testing techniques, and workflows</p>
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
