'use client';

import { useRef } from 'react';
import {
  HiSparkles,
  HiCpuChip,
  HiBugAnt,
  HiServerStack,
  HiShieldCheck,
  HiCheckBadge,
  HiHeart,
} from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';

const statement =
  "I believe great software isn't just built — it's questioned, verified and polished until every user journey feels effortless.";
const highlight = new Set(['questioned,', 'verified', 'polished', 'effortless.']);

const pillars = [
  {
    icon: HiCpuChip,
    title: 'Test Automation',
    text: 'Resilient E2E suites with Selenium, Playwright & Cypress using the Page Object Model.',
    bg: 'bg-petal',
  },
  {
    icon: HiBugAnt,
    title: 'Bug Hunting & RCA',
    text: 'Exploratory sessions, sneaky edge cases and crystal-clear, reproducible Jira reports.',
    bg: 'bg-peach',
  },
  {
    icon: HiServerStack,
    title: 'API & Performance',
    text: 'Validating REST contracts with Postman & Newman and load-testing with JMeter.',
    bg: 'bg-lilac',
  },
  {
    icon: HiShieldCheck,
    title: 'Shift-Left Quality',
    text: 'Quality gates early in the SDLC with TDD, unit tests and CI/CD regression pipelines.',
    bg: 'bg-mint',
  },
];

const stats = [
  { value: 12, suffix: '+', label: 'Projects tested & built' },
  { value: 6, suffix: 'm+', label: 'Industry experience' },
  { value: 9, suffix: ' A’s', label: 'G.C.E. O/L results' },
  { value: 0, suffix: '', text: 'AAB', label: 'G.C.E. A/L results' },
];

export default function AboutSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Word-by-word scroll reveal
      gsap.fromTo(
        '.ab-word',
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: '.ab-statement', start: 'top 80%', end: 'bottom 45%', scrub: true },
        }
      );

      gsap.from('.ab-bio', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ab-grid', start: 'top 80%' },
      });
      gsap.from('.ab-stat', {
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.6)',
        scrollTrigger: { trigger: '.ab-grid', start: 'top 80%' },
      });

      // Number counters
      gsap.utils.toArray<HTMLElement>('.ab-count').forEach((el) => {
        const end = Number(el.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });

      // Rotating badge
      gsap.to('.ab-badge-text', { rotation: 360, duration: 18, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });

      gsap.from('.ab-pillar', {
        y: 80,
        opacity: 0,
        rotate: 3,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ab-pillars', start: 'top 85%' },
      });
    },
    { scope: root }
  );

  return (
    <section id="about" ref={root} className="relative py-28 overflow-hidden bg-ink">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-petal/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          icon={HiSparkles}
          title="The eye for"
          accent="every detail"
          subtitle="Full-stack knowledge meets a quality-first mindset — so I know exactly where bugs love to hide."
        />

        {/* Scroll-revealed statement */}
        <p className="ab-statement font-display text-3xl sm:text-4xl md:text-5xl leading-[1.25] text-cream max-w-5xl mx-auto text-center mb-24">
          {statement.split(' ').map((w, i) => (
            <span
              key={i}
              className={`ab-word inline-block mr-[0.28em] ${highlight.has(w) ? 'italic text-petal' : ''}`}
            >
              {w}
            </span>
          ))}
        </p>

        {/* Bio + stats */}
        <div className="ab-grid grid lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="ab-bio lg:col-span-7 relative card-soft rounded-[2rem] p-8 sm:p-10">
            {/* Rotating circular badge */}
            <div className="absolute -top-12 -right-6 sm:-right-10 w-28 h-28 sm:w-32 sm:h-32">
              <svg viewBox="0 0 120 120" className="ab-badge-text w-full h-full" aria-hidden="true">
                <defs>
                  <path id="ab-circle" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
                </defs>
                <circle cx="60" cy="60" r="58" fill="#150c1a" stroke="#f472b6" strokeOpacity="0.3" />
                <text fill="#fbcfe8" fontSize="10.5" letterSpacing="3" style={{ textTransform: 'uppercase' }}>
                  <textPath href="#ab-circle">quality • precision • automation • </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-11 h-11 rounded-full bg-petal flex items-center justify-center">
                  <HiCheckBadge className="w-6 h-6 text-ink" />
                </span>
              </div>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-cream mb-6">
              Hi, I&apos;m <span className="italic text-petal">Devindi</span>
            </h3>
            <div className="space-y-4 text-mauve text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a BSc. Computer Science &amp; Technology undergraduate at{' '}
                <span className="text-cream">Uwa Wellassa University</span>, specialising in{' '}
                <span className="text-blush">Software Quality Assurance &amp; Test Automation</span>{' '}
                with a solid full-stack foundation.
              </p>
              <p>
                Because I understand how web apps, REST APIs and databases are built from the inside,
                I design thoughtful test plans, uncover sneaky edge cases and write maintainable
                automation with <span className="text-cream">Selenium, Playwright, Cypress &amp; Postman</span>.
              </p>
              <p>
                I&apos;m looking for a <span className="text-blush">QA / Test Automation internship</span>{' '}
                where I can grow inside an agile team and help ship software people love.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-blush">
              <HiHeart className="w-5 h-5 text-petal" />
              Powered by curiosity, coffee &amp; clean test reports
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                data-cursor
                className={`ab-stat rounded-[1.75rem] p-6 flex flex-col justify-between min-h-[160px] ${
                  i === 0 ? 'bg-petal text-ink' : 'card-soft'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-ink' : ['', 'bg-lilac', 'bg-peach', 'bg-mint'][i]}`}
                />
                <div>
                  <div className={`font-display text-5xl ${i === 0 ? 'text-ink' : 'text-cream'}`}>
                    {s.text ? (
                      s.text
                    ) : (
                      <>
                        <span className="ab-count" data-value={s.value}>
                          0
                        </span>
                        <span className={i === 0 ? 'text-ink' : 'text-petal'}>{s.suffix}</span>
                      </>
                    )}
                  </div>
                  <div className={`text-sm mt-2 ${i === 0 ? 'text-ink/80' : 'text-mauve'}`}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="ab-pillars grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="ab-pillar group relative card-soft rounded-[1.75rem] p-7 hover:-translate-y-2 hover:border-petal/40 transition-all duration-500"
              >
                <span className="absolute top-6 right-7 font-display italic text-4xl text-outline-soft group-hover:text-petal/20 transition-colors">
                  0{i + 1}
                </span>
                <span
                  className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center mb-6 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="w-7 h-7 text-ink" />
                </span>
                <h3 className="text-xl font-semibold text-cream mb-2">{p.title}</h3>
                <p className="text-sm text-mauve leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
