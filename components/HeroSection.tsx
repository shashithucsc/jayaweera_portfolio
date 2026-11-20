'use client';

import { useRef } from 'react';
import {
  HiArrowDownTray,
  HiArrowRight,
  HiCheckCircle,
  HiBugAnt,
  HiSignal,
} from 'react-icons/hi2';
import { SiSelenium, SiCypress, SiPostman, SiJira, SiApachejmeter } from 'react-icons/si';
import { FaVial } from 'react-icons/fa';
import { gsap, useGSAP, onLoaderDone } from '@/lib/gsap';
import Magnetic from './ui/Magnetic';
import Sparkle from './ui/Sparkle';

const orbit = [
  { icon: SiSelenium, label: 'Selenium', color: 'text-mint' },
  { icon: FaVial, label: 'Playwright', color: 'text-petal' },
  { icon: SiCypress, label: 'Cypress', color: 'text-lilac' },
  { icon: SiPostman, label: 'Postman', color: 'text-peach' },
  { icon: SiJira, label: 'Jira', color: 'text-blush' },
  { icon: SiApachejmeter, label: 'JMeter', color: 'text-mint' },
];

const sparkles = [
  'top-[16%] left-[5%] w-5 h-5 text-petal',
  'top-[28%] right-[6%] w-3 h-3 text-lilac',
  'bottom-[24%] left-[10%] w-4 h-4 text-peach',
  'top-[10%] right-[32%] w-3 h-3 text-blush',
  'bottom-[12%] right-[44%] w-6 h-6 text-petal',
  'top-[52%] left-[46%] w-2.5 h-2.5 text-mint',
];

const floatCards = [
  {
    pos: 'top-[4%] -left-[6%] sm:-left-[14%]',
    icon: HiCheckCircle,
    iconBg: 'bg-mint',
    title: '142 / 142',
    sub: 'Tests passed',
    depth: 1.4,
    extra: '',
  },
  {
    pos: 'bottom-[8%] -right-[4%] sm:-right-[10%]',
    icon: HiBugAnt,
    iconBg: 'bg-petal',
    title: 'Bug squashed',
    sub: 'Severity: Critical',
    depth: 1.8,
    extra: '',
  },
  {
    pos: 'top-[40%] -right-[18%]',
    icon: HiSignal,
    iconBg: 'bg-lilac',
    title: '200 OK',
    sub: 'API contract',
    depth: 1.1,
    extra: 'hidden md:block',
  },
];

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_ctx) => {
      const wave = root.current?.querySelector<SVGPathElement>('.hero-wave');
      const waveLen = wave ? wave.getTotalLength() : 0;
      if (wave) gsap.set(wave, { strokeDasharray: waveLen, strokeDashoffset: waveLen });

      /* ---------- Intro timeline (plays when loader finishes) ---------- */
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
      tl.from('.hero-blob', { scale: 0, opacity: 0, duration: 1.6, stagger: 0.15 }, 0)
        .from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.7 }, 0.15)
        .from('.hero-hello', { y: 24, opacity: 0, duration: 0.7 }, 0.25)
        .from(
          '.hero-char',
          { yPercent: 120, rotate: 12, opacity: 0, stagger: 0.045, duration: 1, ease: 'power4.out' },
          0.3
        )
        .from('.hero-line-2', { yPercent: 120, duration: 1.1, ease: 'power4.out' }, 0.65)
        .from('.hero-fade', { y: 30, opacity: 0, stagger: 0.12, duration: 0.9 }, 0.85)
        .from(
          '.hero-arch-wrap',
          { clipPath: 'inset(100% 0% 0% 0% round 999px 999px 32px 32px)', duration: 1.4, ease: 'power4.inOut' },
          0.3
        )
        .from('.hero-arch-img', { scale: 1.5, duration: 1.8 }, 0.3)
        .from('.hero-arch-outline', { opacity: 0, x: -20, y: -20, duration: 1.2 }, 0.9)
        .from('.hero-orbit-wrap', { scale: 0.5, opacity: 0, rotation: -90, duration: 1.6 }, 0.5)
        .from('.float-card', { scale: 0, opacity: 0, stagger: 0.18, duration: 0.8, ease: 'back.out(1.8)' }, 1.2)
        .from('.hero-sparkle', { scale: 0, rotation: -180, stagger: 0.08, duration: 0.9, ease: 'back.out(2)' }, 1)
        .to('.hero-wave', { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut' }, 0.6);

      const off = onLoaderDone(() => tl.play());

      /* ---------- Ambient loops ---------- */
      gsap.to('.hero-orbit', { rotation: 360, duration: 48, repeat: -1, ease: 'none' });
      gsap.to('.orbit-icon', { rotation: -360, duration: 48, repeat: -1, ease: 'none' });
      gsap.to('.hero-orbit-inner', { rotation: -360, duration: 70, repeat: -1, ease: 'none' });
      gsap.to('.float-card-inner', {
        y: -14,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.5 },
      });
      gsap.to('.hero-sparkle-inner', {
        scale: 0.6,
        opacity: 0.5,
        rotation: 45,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.3, from: 'random' },
      });
      gsap.utils.toArray<HTMLElement>('.hero-blob').forEach((blob, i) => {
        gsap.to(blob, {
          x: i % 2 ? -90 : 90,
          y: i % 2 ? 60 : -60,
          duration: 9 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      /* ---------- Scroll-away parallax ---------- */
      gsap.to('.hero-content', {
        y: -120,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-visual-scroll', {
        y: 80,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });

      /* ---------- Mouse parallax ---------- */
      const setters = gsap.utils.toArray<HTMLElement>('[data-depth]').map((el) => ({
        x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3' }),
        y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3' }),
        d: parseFloat(el.dataset.depth || '0'),
      }));
      const onMove = (e: MouseEvent) => {
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        setters.forEach((s) => {
          s.x(cx * s.d * 40);
          s.y(cy * s.d * 40);
        });
      };
      window.addEventListener('mousemove', onMove);

      return () => {
        window.removeEventListener('mousemove', onMove);
        off();
      };
    },
    { scope: root }
  );

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-screen flex items-center overflow-hidden bg-ink pt-32 pb-24"
    >
      {/* Background motion layers */}
      <div className="absolute inset-0 dot-grid opacity-70" />
      <div className="hero-blob absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-petal/20 blur-[120px]" />
      <div className="hero-blob absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-lilac/20 blur-[130px]" />
      <div className="hero-blob absolute -bottom-40 left-1/3 w-[420px] h-[420px] rounded-full bg-peach/10 blur-[120px]" />

      <div data-depth="0.6" className="absolute inset-0 pointer-events-none">
        {sparkles.map((cls, i) => (
          <div key={i} className={`hero-sparkle absolute ${cls}`}>
            <Sparkle className="hero-sparkle-inner w-full h-full" />
          </div>
        ))}
      </div>

      <svg
        className="absolute bottom-10 left-0 w-full h-40 pointer-events-none"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="hero-wave"
          d="M0 100 C 200 20, 380 160, 620 90 S 1000 10, 1200 80 S 1380 130, 1440 70"
          stroke="#f472b6"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* Left — copy */}
          <div className="hero-content text-center lg:text-left">
            <div className="hero-eyebrow inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ink-3/80 border border-mint/25 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint" />
              </span>
              <span className="text-xs sm:text-sm text-cream/90">
                Open to QA &amp; Test Automation roles
              </span>
            </div>

            <p className="hero-hello font-display italic text-2xl sm:text-3xl text-blush mb-2">
              Hello, I&apos;m
            </p>

            <h1 className="font-display font-semibold text-[3.6rem] leading-[0.95] sm:text-8xl xl:text-[7.5rem] text-cream tracking-tight">
              <span className="block overflow-hidden pb-2">
                {'Devindi'.split('').map((c, i) => (
                  <span key={i} className="hero-char inline-block">
                    {c}
                  </span>
                ))}
              </span>
              <span className="block overflow-hidden pb-3">
                <span className="hero-line-2 inline-flex items-start gap-3 italic text-petal">
                  Uthapala
                  <Sparkle className="w-6 h-6 sm:w-9 sm:h-9 text-blush mt-2" />
                </span>
              </span>
            </h1>

            <div className="hero-fade mt-6 text-center lg:text-left text-lg sm:text-2xl text-cream/90">
              <span className="font-display italic font-semibold text-petal">
                Aspiring QA Engineer | Passionate about Software Quality
              </span>
            </div>

            <p className="hero-fade mt-6 text-base sm:text-lg text-mauve max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A passionate Computer Science undergraduate with a strong interest in Software Quality
              Assurance. Eager to explore manual testing, test automation, and bug tracking while
              continuously improving my technical skills. Motivated to contribute to building
              reliable, high-quality, and user-friendly software.
            </p>

            <div className="hero-fade mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 pl-7 pr-2 py-2 rounded-full bg-petal text-ink font-semibold text-base hover:bg-blush transition-colors"
                >
                  Let&apos;s Connect
                  <span className="w-10 h-10 rounded-full bg-ink flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-300">
                    <HiArrowRight className="w-5 h-5 text-petal" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/CV.pdf"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-blush/25 text-cream font-medium hover:border-petal hover:text-petal transition-colors"
                >
                  <HiArrowDownTray className="w-5 h-5" />
                  Download CV
                </a>
              </Magnetic>
            </div>

            <div className="hero-fade mt-12 flex items-center justify-center lg:justify-start gap-8">
              {[
                { n: '12+', l: 'Projects' },
                { n: '6m+', l: 'Experience' },
                { n: '100%', l: 'Curiosity' },
              ].map((s, i) => (
                <div key={s.l} className="flex items-center gap-8">
                  {i > 0 && <span className="w-px h-10 bg-blush/15" />}
                  <div>
                    <div className="font-display text-3xl text-cream">{s.n}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-mauve mt-1">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait & motion graphics */}
          <div className="hero-visual-scroll flex justify-center">
            <div
              data-depth="0.5"
              className="relative w-[300px] h-[300px] sm:w-[460px] sm:h-[460px]"
            >
              {/* Orbit rings */}
              <div className="hero-orbit-wrap absolute inset-0">
                <div className="hero-orbit-inner absolute inset-[12%] rounded-full border border-lilac/15">
                  <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-lilac" />
                  <span className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full bg-peach" />
                </div>
                <div className="hero-orbit absolute inset-0 rounded-full border border-dashed border-petal/30">
                  {orbit.map((tool, i) => {
                    const angle = (i / orbit.length) * Math.PI * 2;
                    const Icon = tool.icon;
                    return (
                      <div
                        key={tool.label}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${50 + 50 * Math.cos(angle)}%`,
                          top: `${50 + 50 * Math.sin(angle)}%`,
                        }}
                      >
                        <div
                          title={tool.label}
                          className="orbit-icon w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-ink-3 border border-blush/15 flex items-center justify-center shadow-lg shadow-black/40"
                        >
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.color}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Arch portrait */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[58%] h-[78%]">
                  <div className="hero-arch-outline absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2rem] border-2 border-petal/60" />
                  <div
                    className="hero-arch-wrap relative w-full h-full rounded-t-full rounded-b-[2rem] overflow-hidden bg-blush"
                    style={{ clipPath: 'inset(0% 0% 0% 0% round 999px 999px 32px 32px)' }}
                  >
                    <img
                      src="/images/profile.png"
                      alt="Devindi Uthapala"
                      className="hero-arch-img w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating status cards */}
              {floatCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    data-depth={card.depth}
                    className={`absolute ${card.pos} ${card.extra} z-10`}
                  >
                    <div className="float-card">
                      <div className="float-card-inner flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl card-soft shadow-xl shadow-black/40">
                        <span className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-ink" />
                        </span>
                        <div className="text-left">
                          <div className="text-sm font-semibold text-cream whitespace-nowrap">
                            {card.title}
                          </div>
                          <div className="text-[11px] text-mauve whitespace-nowrap">{card.sub}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mauve"
      >
        Scroll
        <span className="w-px h-10 bg-blush/20 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-px h-4 bg-petal animate-[scrollcue_1.8s_ease-in-out_infinite]" />
        </span>
      </a>
      <style>{`@keyframes scrollcue{0%{transform:translateY(-16px)}100%{transform:translateY(40px)}}`}</style>
    </section>
  );
}
