'use client';

import { useRef, useState, MouseEvent as ReactMouseEvent } from 'react';
import type { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiArrowUpRight,
  HiXMark,
  HiCheckCircle,
  HiBeaker,
  HiSquares2X2,
  HiGlobeAlt,
  HiCommandLine,
  HiClipboardDocumentCheck,
  HiCubeTransparent,
  HiTruck,
  HiAcademicCap,
} from 'react-icons/hi2';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';
import ProjectIllustration from './ProjectIllustration';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  filterGroup: 'QA & Testing' | 'Full Stack';
  qaBadge: string;
  icon: IconType;
  accentBg: string;
  metricPill: string;
  description: string;
  highlights: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SauceDemo UI Automation Framework',
    subtitle: 'End-to-End Cross-Browser Test Automation',
    category: 'QA Automation & CI/CD',
    filterGroup: 'QA & Testing',
    qaBadge: 'Playwright POM',
    icon: HiGlobeAlt,
    accentBg: 'bg-mint',
    metricPill: '21 Automated Runs • Chromium / Firefox / WebKit',
    description:
      'Architected a scalable UI test automation framework using Playwright (JavaScript) and the Page Object Model (POM) design pattern covering authentication edge cases, product sorting, cart management, and checkout flows.',
    highlights: [
      'Architected scalable UI test automation using Playwright (JavaScript) and Page Object Model (POM)',
      'Covered authentication edge cases, product sorting, cart management, and checkout flows',
      'Configured cross-browser execution across Chromium, Firefox, and WebKit (21 automated runs)',
      'Integrated GitHub Actions CI/CD to trigger automated runs and generate HTML test reports on every commit',
    ],
    tags: ['Playwright', 'JavaScript', 'Page Object Model (POM)', 'GitHub Actions CI/CD', 'HTML Reporting', 'Git'],
  },
  {
    id: 2,
    title: 'Restful-Booker API Testing Suite',
    subtitle: 'Automated REST API & Security Validation',
    category: 'API & Security QA',
    filterGroup: 'QA & Testing',
    qaBadge: 'Postman Suite',
    icon: HiCommandLine,
    accentBg: 'bg-petal',
    metricPill: '8 Requests • 14 JS Assertions • 100% Pass Rate',
    description:
      'Developed an 8-request Postman collection validating authentication (POST /auth) and full CRUD booking lifecycles (GET, POST, PUT, DELETE) using dynamic environment variable chaining.',
    highlights: [
      'Developed an 8-request Postman collection covering POST /auth and full CRUD booking lifecycles',
      'Implemented dynamic environment variable chaining for token and booking ID reuse',
      'Authored 14 JavaScript post-response assertions verifying HTTP status codes, JSON payload accuracy, and response times (< 3000ms)',
      'Validated negative security scenarios (403 Forbidden, 404 Not Found) with a 100% pass rate',
    ],
    tags: ['Postman', 'REST API', 'JavaScript', 'JSON', 'Collection Runner', 'Git'],
  },
  {
    id: 3,
    title: 'SauceDemo Manual QA Portfolio',
    subtitle: 'End-to-End Manual Testing & Defect Management',
    category: 'Manual QA & IEEE 829',
    filterGroup: 'QA & Testing',
    qaBadge: 'IEEE 829 & RTM',
    icon: HiClipboardDocumentCheck,
    accentBg: 'bg-lilac',
    metricPill: '10 Scenarios • 24 Test Cases • 7 Bugs Logged',
    description:
      'Authored an IEEE 829-aligned Test Plan, 10 test scenarios, 24 detailed test cases (incorporating Boundary Value Analysis and negative testing), and a bidirectional Requirements Traceability Matrix (RTM).',
    highlights: [
      'Authored an IEEE 829-aligned Test Plan, 10 test scenarios, and 24 detailed test cases',
      'Applied Boundary Value Analysis (BVA) and negative testing with a bidirectional RTM',
      'Executed multi-persona regression testing across standard_user, problem_user, and error_user',
      'Documented 7 reproducible functional and UI defects with severity/priority classifications, reproduction steps, and annotated visual evidence',
    ],
    tags: ['Manual Testing', 'Test Case Design (BVA)', 'RTM', 'Defect Reporting', 'Google Sheets / Excel', 'Chrome DevTools'],
  },
  {
    id: 4,
    title: 'PrintSphere',
    subtitle: 'Real-Time 3D T-Shirt Customization & E-Commerce Platform',
    category: 'Full Stack & Integration QA',
    filterGroup: 'Full Stack',
    qaBadge: 'MERN & 3D + QA',
    icon: HiCubeTransparent,
    accentBg: 'bg-peach',
    metricPill: 'User & Employee Modules • Agile Scrum',
    description:
      'Developed the User Account Management module and Employee Dashboard using React.js, Node.js, Express.js and MongoDB, with authentication, role-based access control, order management and product approval workflows through RESTful APIs.',
    highlights: [
      'Built User Account Management and Employee Dashboard with React.js, Node.js, Express.js, and MongoDB',
      'Implemented authentication, role-based access control, order management, and product approval workflows via RESTful APIs',
      'Contributed to functional and integration testing, test case execution, and defect retesting',
      'Supported system design with ER, Class, and Use Case diagrams in an Agile Scrum environment',
    ],
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'React Three Fiber', 'RESTful APIs', 'PayHere Sandbox', 'Postman', 'Figma', 'Git'],
  },
  {
    id: 5,
    title: 'LankaTransit',
    subtitle: 'Bus Reservation and Management System',
    category: 'Full Stack Web Application',
    filterGroup: 'Full Stack',
    qaBadge: 'PHP & MySQL',
    icon: HiTruck,
    accentBg: 'bg-blush',
    metricPill: 'Admin Dashboard • CRUD & Validation',
    description:
      'Developed the Admin Dashboard using PHP, MySQL, Bootstrap and JavaScript to manage buses, users, reservations, feedback and incident reports with CRUD operations and validation.',
    highlights: [
      'Developed the Admin Dashboard using PHP, MySQL, Bootstrap, and JavaScript',
      'Managed buses, users, reservations, feedback, and incident reports',
      'Implemented CRUD operations, form validation, and duplicate record prevention for accurate administrative workflows',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'Git'],
  },
  {
    id: 6,
    title: 'Course Feedback System (CFS)',
    subtitle: 'Backend | Frontend',
    category: 'Full Stack Web Application',
    filterGroup: 'Full Stack',
    qaBadge: 'Django REST + React',
    icon: HiAcademicCap,
    accentBg: 'bg-mint',
    metricPill: 'Degree Management • RESTful CRUD',
    description:
      'Built the Degree Management backend using Python, Django and Django REST Framework, including database models, serializers and RESTful CRUD endpoints for degree programmes.',
    highlights: [
      'Built the Degree Management backend using Python, Django, and Django REST Framework',
      'Created database models, serializers, and RESTful CRUD endpoints for degree programmes',
      'Implemented data validation and integrated the API with the React.js frontend and MySQL database',
    ],
    tags: ['React.js', 'Python', 'Django', 'Django REST Framework', 'MySQL', 'RESTful APIs', 'Git'],
  },
];

const filters = ['All', 'QA & Testing', 'Full Stack'] as const;

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
          subtitle="Real QA automation frameworks, API test suites, manual QA portfolios, and full-stack web applications."
        />

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

        <div className="pj-grid grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visible.map((project) => (
              <div key={project.id} className="pj-card">
                <div
                  onMouseMove={tilt}
                  onMouseLeave={untilt}
                  onClick={() => setSelected(project)}
                  data-cursor
                  className="group h-full flex flex-col card-soft rounded-[2rem] p-3 cursor-pointer hover:border-petal/40 transition-colors [transform-style:preserve-3d]"
                >
                  {/* Generated SVG Illustration */}
                  <div className="relative h-52 rounded-[1.5rem] overflow-hidden bg-ink-3 border border-blush/10">
                    <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                      <ProjectIllustration projectId={project.id} />
                    </div>
                    <span
                      className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${project.accentBg} text-ink text-xs font-semibold shadow-md`}
                    >
                      <HiCheckCircle className="w-3.5 h-3.5" />
                      {project.qaBadge}
                    </span>
                    <span className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cream flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                      <HiArrowUpRight className="w-5 h-5 text-ink" />
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col p-4 pt-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-petal mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-display text-2xl text-cream mb-1 group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blush/80 mb-3">{project.subtitle}</p>
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
              className="relative bg-ink-2 border border-blush/10 rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10"
            >
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <span
                    className={`w-14 h-14 rounded-2xl ${selected.accentBg} flex items-center justify-center shrink-0 mt-1`}
                  >
                    <selected.icon className="w-7 h-7 text-ink" />
                  </span>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-petal text-ink text-xs font-semibold mb-3">
                      <HiCheckCircle className="w-3.5 h-3.5" />
                      {selected.qaBadge}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl text-cream">{selected.title}</h3>
                    <p className="text-sm text-petal mt-1">{selected.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="w-11 h-11 shrink-0 rounded-full bg-ink-4 hover:bg-petal hover:text-ink text-cream flex items-center justify-center transition-colors"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6 rounded-2xl overflow-hidden border border-blush/10 h-52 sm:h-64">
                <ProjectIllustration projectId={selected.id} />
              </div>

              <div className="mb-6">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-ink-3 border border-blush/10 text-xs font-mono text-blush">
                  {selected.metricPill}
                </span>
              </div>

              <p className="text-mauve text-base sm:text-lg leading-relaxed mb-7">
                {selected.description}
              </p>

              <div className="rounded-[1.5rem] bg-ink-3 border border-petal/15 p-6 mb-7">
                <h4 className="flex items-center gap-3 text-cream font-semibold mb-4">
                  <span className="w-9 h-9 rounded-xl bg-mint flex items-center justify-center">
                    <HiBeaker className="w-5 h-5 text-ink" />
                  </span>
                  Key Highlights &amp; Deliverables
                </h4>
                <ul className="space-y-3">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-cream/85">
                      <HiCheckCircle className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-mauve mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-ink-4 text-sm text-blush">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
