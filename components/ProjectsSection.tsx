'use client';

import { useRef, useState, MouseEvent as ReactMouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiArrowUpRight,
  HiCodeBracket,
  HiXMark,
  HiCheckCircle,
  HiBeaker,
  HiSquares2X2,
} from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';

interface Project {
  id: number;
  title: string;
  category: string;
  filterGroup: 'QA & Automation' | 'Full Stack' | 'AI & ML' | 'UI/UX';
  qaBadge: string;
  description: string;
  qaHighlights: string[];
  tags: string[];
  images: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 5,
    title: 'Book Management System',
    category: 'QA Automation & Full Stack',
    filterGroup: 'QA & Automation',
    qaBadge: 'Selenium E2E',
    description:
      'Complete book management system with authentication, CRUD operations, REST APIs and automated end-to-end testing using Selenium WebDriver. Spring Boot backend with a React frontend.',
    qaHighlights: [
      'Automated E2E UI regression suite using Selenium WebDriver',
      'REST API contract & status-code validation with Postman',
      'Negative & boundary value testing on auth and CRUD forms',
    ],
    tags: ['Selenium', 'Spring Boot', 'React', 'REST API', 'MySQL'],
    images: ['/images/bookapp/1.png', '/images/bookapp/2.png'],
    github: 'https://github.com/shashithucsc/book-management-system',
    live: '',
  },
  {
    id: 12,
    title: 'Jobs Bank Automation',
    category: 'Workflow & Data Pipeline QA',
    filterGroup: 'QA & Automation',
    qaBadge: 'Data Integrity',
    description:
      'Automated job aggregation pipeline that collects and normalises listings from TopJobs, ITPro.lk and LinkedIn via scheduled triggers, RSS readers and validation nodes before syncing to Google Sheets and a live API.',
    qaHighlights: [
      'Deduplication, schema validation and null-handling checks',
      'Scheduled trigger reliability & API response verification',
      'Fallback validation when external feeds change',
    ],
    tags: ['Workflow Automation', 'API Testing', 'Data Validation', 'Sheets API'],
    images: ['/images/jobs_bank/1.png', '/images/jobs_bank/2.png'],
    github: '',
    live: '',
  },
  {
    id: 1,
    title: 'HomeGenie',
    category: 'Full Stack Web Application',
    filterGroup: 'Full Stack',
    qaBadge: 'Role-Based QA',
    description:
      'On-demand home services platform with booking, supplier management and modular MVC architecture, featuring authentication, service categories and real-time booking.',
    qaHighlights: [
      'Role-based access (Customer, Supplier, Admin) scenarios',
      'End-to-end booking workflow & SQL injection checks',
      'Cross-browser functional testing on desktop & mobile',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'MVC', 'Manual QA'],
    images: ['/images/homegenie/1.jpeg', '/images/homegenie/2.jpeg', '/images/homegenie/3.jpeg'],
    github: 'https://github.com/shashithucsc/Homegenie',
    live: '',
  },
  {
    id: 2,
    title: 'ClubSync',
    category: 'Full Stack Event Platform',
    filterGroup: 'Full Stack',
    qaBadge: 'QR & Mobile QA',
    description:
      'Club volunteer and event management system with QR-based attendance tracking, a points system and mobile-first responsive design for university clubs.',
    qaHighlights: [
      'QR scan state validation & duplicate check-in prevention',
      'PostgreSQL data integrity & points calculation checks',
      'Responsive UI testing across Android & iOS breakpoints',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'QR'],
    images: ['/images/clubsync/1.png', '/images/clubsync/2.png', '/images/clubsync/3.png'],
    github: 'https://github.com/Sasmitha-Silva/ClubSync-Web',
    live: '',
  },
  {
    id: 3,
    title: 'Chill Campus',
    category: 'Real-Time Social Platform',
    filterGroup: 'Full Stack',
    qaBadge: 'Real-Time QA',
    description:
      'Social platform for university students with posts, real-time chat, events and community building in a clean, intuitive interface.',
    qaHighlights: [
      'WebSocket message delivery & reconnection testing',
      'MongoDB CRUD & session persistence verification',
      'Responsiveness & visual consistency checks',
    ],
    tags: ['Next.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind'],
    images: ['/images/chillcampus/1.png', '/images/chillcampus/2.png', '/images/chillcampus/3.png'],
    github: 'https://github.com/shashithucsc/chill_campus-nextJs-',
    live: 'https://chill-campus-2025.vercel.app',
  },
  {
    id: 4,
    title: 'Athagili',
    category: 'Matchmaking Platform',
    filterGroup: 'Full Stack',
    qaBadge: 'Auth & Chat QA',
    description:
      'Sri Lankan matchmaking app with real-time chat, user profiles and mobile-first responsive design on a modern stack.',
    qaHighlights: [
      'Supabase auth flow, privacy & RLS policy verification',
      'Chat latency and special-character input testing',
      'Onboarding usability & form validation testing',
    ],
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Real-time'],
    images: ['/images/athagili/1.png', '/images/athagili/2.png', '/images/athagili/3.png'],
    github: 'https://github.com/shashithucsc/athagili',
    live: 'https://athagili.vercel.app/',
  },
  {
    id: 6,
    title: 'Chatty Chatty',
    category: 'Real-Time Messaging App',
    filterGroup: 'Full Stack',
    qaBadge: 'WebSocket QA',
    description:
      'Real-time messaging app built on the MERN stack and Socket.io with authentication, private messaging and live updates.',
    qaHighlights: [
      'Concurrent multi-user session & delivery verification',
      'JWT auth & unauthorised route access testing',
      'Connection-drop recovery & payload edge cases',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    images: ['/images/chatty/1.png', '/images/chatty/2.png'],
    github: 'https://github.com/shashithucsc/chat-app',
    live: '',
  },
  {
    id: 7,
    title: 'Laptop Price Predictor',
    category: 'Machine Learning',
    filterGroup: 'AI & ML',
    qaBadge: 'Model QA',
    description:
      'Random Forest model predicting laptop prices from specs like RAM, processor, GPU and brand.',
    qaHighlights: [
      'Dataset cleaning, outlier handling & feature validation',
      'Cross-validation accuracy & error metric evaluation',
      'Boundary testing on prediction inputs',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    images: ['/images/mlproject/1.png', '/images/mlproject/2.png'],
    github: 'https://github.com/shashithucsc/laptop_price_predictor',
    live: '',
  },
  {
    id: 8,
    title: 'AI Chat-bot',
    category: 'AI Application',
    filterGroup: 'AI & ML',
    qaBadge: 'API Error QA',
    description:
      'Gemini-powered chatbot with a PHP backend and Flask integration for natural conversations.',
    qaHighlights: [
      'Timeout, rate-limit & malformed response handling',
      'PHP-to-Flask integration & payload sanitisation',
      'Empty & edge-case prompt validation',
    ],
    tags: ['PHP', 'Flask', 'JavaScript', 'Gemini API'],
    images: ['/images/chatbot/1.png', '/images/chatbot/2.png'],
    github: 'https://github.com/shashithucsc/chat-bot',
    live: '',
  },
  {
    id: 9,
    title: 'Zenith',
    category: 'UI/UX & Frontend',
    filterGroup: 'UI/UX',
    qaBadge: 'Visual QA',
    description:
      'Space tourism booking experience with stunning visuals, smooth animations and immersive destination browsing.',
    qaHighlights: [
      'Cross-browser animation & layout-shift checks',
      'Booking flow & keyboard navigation verification',
      'Typography and contrast accessibility review',
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    images: ['/images/zenith/1.png', '/images/zenith/2.png'],
    github: 'https://github.com/shashithucsc/zenith',
    live: 'https://zenith-pearl-mu.vercel.app/',
  },
  {
    id: 10,
    title: 'Jumbo Track',
    category: 'UI/UX Design',
    filterGroup: 'UI/UX',
    qaBadge: 'Usability QA',
    description:
      'UI/UX for an elephant-train collision early-warning system focusing on real-time tracking and clear alerts.',
    qaHighlights: [
      'Alert hierarchy heuristic evaluation',
      'Prototype user-flow validation in Figma',
      'High-contrast readability for field operators',
    ],
    tags: ['Figma', 'UX Research', 'Prototyping'],
    images: ['/images/jumbotrack/1.jpeg', '/images/jumbotrack/2.jpeg'],
    github: '',
    live: '',
  },
  {
    id: 11,
    title: 'Cafe Hifi',
    category: 'Desktop Application',
    filterGroup: 'Full Stack',
    qaBadge: 'POS QA',
    description:
      'Cafe management system with POS, inventory tracking, sales analytics and real-time reporting in JavaFX.',
    qaHighlights: [
      'Billing, tax & discount accuracy testing',
      'Stock deduction & low-stock alert verification',
      'Transaction rollback & concurrency checks',
    ],
    tags: ['JavaFX', 'MySQL', 'Java'],
    images: ['/images/cafehifi/1.jpeg', '/images/cafehifi/2.jpeg'],
    github: '',
    live: '',
  },
];

const filters = ['All', 'QA & Automation', 'Full Stack', 'AI & ML', 'UI/UX'] as const;
const badgeColors = ['bg-petal', 'bg-lilac', 'bg-peach', 'bg-mint', 'bg-blush'];

export default function ProjectsSection() {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.filterGroup === filter);

  useGSAP(
    () => {
      gsap.from('.pj-card', {
        y: 90,
        opacity: 0,
        scale: 0.94,
        stagger: 0.09,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.pj-grid', start: 'top 85%' },
      });
    },
    { scope: root, dependencies: [filter], revertOnUpdate: true }
  );

  const tilt = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: px * 10,
      rotateX: -py * 10,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const untilt = (e: ReactMouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <section id="projects" ref={root} className="relative py-28 overflow-hidden bg-ink">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/4 -right-40 w-[480px] h-[480px] rounded-full bg-lilac/10 blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          icon={HiSquares2X2}
          title="Projects I've built"
          accent="& tested"
          subtitle="Applications engineered and carefully verified across UI, API, database and automation layers."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-5 py-2.5 rounded-full text-sm transition-colors ${
                  active ? 'text-ink font-semibold' : 'text-mauve hover:text-cream bg-ink-3 border border-blush/10'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="pj-filter"
                    className="absolute inset-0 rounded-full bg-petal"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="pj-grid grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visible.map((project, i) => (
            <div key={project.id} className="pj-card">
              <div
                onMouseMove={tilt}
                onMouseLeave={untilt}
                onClick={() => setSelected(project)}
                data-cursor
                className="group h-full flex flex-col card-soft rounded-[2rem] p-3 cursor-pointer hover:border-petal/40 transition-colors [transform-style:preserve-3d]"
              >
                <div className="relative h-56 rounded-[1.5rem] overflow-hidden bg-ink-3">
                  {project.images[0] && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
                      badgeColors[i % badgeColors.length]
                    } text-ink text-xs font-semibold`}
                  >
                    <HiCheckCircle className="w-3.5 h-3.5" />
                    {project.qaBadge}
                  </span>
                  <span className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-cream flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <HiArrowUpRight className="w-5 h-5 text-ink" />
                  </span>
                </div>

                <div className="flex-1 flex flex-col p-4 pt-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-petal mb-2">{project.category}</div>
                  <h3 className="font-display text-2xl text-cream mb-2 group-hover:italic transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-mauve leading-relaxed line-clamp-2 mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-ink-4 text-xs text-blush">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-ink-2 border border-blush/10 rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10"
            >
              <div className="flex justify-between items-start gap-4 mb-8">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-petal text-ink text-xs font-semibold mb-4">
                    <HiCheckCircle className="w-3.5 h-3.5" />
                    {selected.qaBadge}
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl text-cream">{selected.title}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-petal mt-2">{selected.category}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="w-12 h-12 shrink-0 rounded-full bg-ink-4 hover:bg-petal hover:text-ink text-cream flex items-center justify-center transition-colors"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selected.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selected.title} screenshot ${idx + 1}`}
                    className="w-full h-52 object-cover rounded-2xl border border-blush/10"
                  />
                ))}
              </div>

              <p className="text-mauve text-base sm:text-lg leading-relaxed mb-8">{selected.description}</p>

              <div className="rounded-[1.5rem] bg-ink-3 border border-petal/15 p-6 mb-8">
                <h4 className="flex items-center gap-3 text-cream font-semibold mb-4">
                  <span className="w-9 h-9 rounded-xl bg-mint flex items-center justify-center">
                    <HiBeaker className="w-5 h-5 text-ink" />
                  </span>
                  QA &amp; Testing Scope
                </h4>
                <ul className="space-y-3">
                  {selected.qaHighlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-cream/85">
                      <HiCheckCircle className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tags.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-ink-4 text-sm text-blush">
                    {t}
                  </span>
                ))}
              </div>

              {(selected.live || selected.github) && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {selected.live && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-petal hover:bg-blush text-ink font-semibold transition-colors"
                    >
                      <HiArrowUpRight className="w-5 h-5" />
                      View Live Demo
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-blush/20 hover:border-petal text-cream font-medium transition-colors"
                    >
                      <HiCodeBracket className="w-5 h-5 text-petal" />
                      View Source Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
