'use client';

import { useRef } from 'react';
import {
  HiSparkles,
  HiCpuChip,
  HiBugAnt,
  HiServerStack,
  HiShieldCheck,
  HiCheckBadge,
  HiUserGroup,
} from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';

const statement =
  "I believe great software isn't just built — it's questioned, verified and polished until every user journey feels effortless.";
const highlight = new Set(['questioned,', 'verified', 'polished', 'effortless.']);

const pillars = [
  {
    icon: HiCpuChip,
    title: 'UI Test Automation',
    text: 'Scalable cross-browser E2E suites using Playwright (JavaScript) and the Page Object Model with GitHub Actions CI/CD.',
    bg: 'bg-petal',
  },
  {
    icon: HiBugAnt,
    title: 'Manual QA & Defect Tracking',
    text: 'IEEE 829 test plans, BVA & Equivalence Partitioning test cases, bidirectional RTM, and reproducible bug reports.',
    bg: 'bg-peach',
  },
  {
    icon: HiServerStack,
    title: 'API & Security Testing',
    text: 'Automated Postman collections with dynamic variable chaining, JS assertions, and negative security boundary checks.',
    bg: 'bg-lilac',
  },
  {
    icon: HiShieldCheck,
    title: 'Full-Stack Engineering',
    text: 'Hands-on web development with React.js, Node.js, Django, and PHP inside Agile Scrum teams.',
    bg: 'bg-mint',
  },
];

const stats = [
  { value: 6, suffix: '', label: 'Projects built & tested' },
  { value: 0, suffix: '', text: '3.38', label: 'BSc (Hons) GPA' },
  { value: 9, suffix: " A's", label: 'G.C.E. O/L (2017)' },
  { value: 6, suffix: '', label: 'Certifications' },
];

const activities = [
  'Design Team Member – IEEE Women in Engineering (WIE), Uva Wellassa University',
  'Member – IEEE Student Branch, Uva Wellassa University',
  'Member – Chess Club, Uva Wellassa University',
  'Member – Leo Club, Uva Wellassa University',
];

export default function AboutSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
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

        <div className="ab-grid grid lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="ab-bio lg:col-span-7 relative card-soft rounded-[2rem] p-8 sm:p-10">
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
              Hi, I&apos;m <span className="italic text-petal">Devindi Jayaweera</span>
            </h3>
            <div className="space-y-4 text-mauve text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a final-year BSc (Hons) in Computer Science and Technology undergraduate at{' '}
                <span className="text-cream">Uva Wellassa University</span> (2023–2027) with
                hands-on experience building full-stack web applications using{' '}
                <span className="text-blush">React.js, Node.js, Django, and PHP</span>.
              </p>
              <p>
                I am experienced in functional, regression, and API testing with{' '}
                <span className="text-cream">Postman and Playwright</span>, designing structured
                test plans, test cases (BVA &amp; Equivalence Partitioning), and Requirements
                Traceability Matrices within <span className="text-cream">Agile Scrum</span> teams.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-blush/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-petal mb-3">
                <HiUserGroup className="w-4 h-4" />
                Extracurricular Activities
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-blush/90">
                {activities.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-petal mt-1.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
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
                  <div className={`font-display text-4xl sm:text-5xl ${i === 0 ? 'text-ink' : 'text-cream'}`}>
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
