'use client';

import { useRef, useState, FormEvent } from 'react';
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiPaperAirplane,
  HiCheckCircle,
  HiArrowUp,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { gsap, useGSAP } from '@/lib/gsap';
import SectionHeading from './ui/SectionHeading';
import Magnetic from './ui/Magnetic';
import Sparkle from './ui/Sparkle';

const contacts = [
  { icon: HiEnvelope, label: 'Email', text: 'devindiuthpala@gmail.com', href: 'mailto:devindiuthpala@gmail.com', bg: 'bg-petal' },
  { icon: HiPhone, label: 'Phone', text: '+94 76 068 8588', href: 'tel:+94760688588', bg: 'bg-lilac' },
  { icon: HiMapPin, label: 'Location', text: 'Sri Lanka', href: '#contact', bg: 'bg-peach' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/shashithucsc', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shashith-rashmika-piyathilaka-ucsc/', label: 'LinkedIn' },
];

const inputCls =
  'w-full px-5 py-4 rounded-2xl bg-ink-3 border border-blush/10 focus:border-petal focus:ring-4 focus:ring-petal/15 outline-none transition-all text-cream placeholder-mauve/60';

export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  useGSAP(
    () => {
      gsap.from('.ft-contact', {
        x: -50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ft-grid', start: 'top 80%' },
      });
      gsap.from('.ft-form', {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ft-grid', start: 'top 80%' },
      });
      gsap.fromTo(
        '.ft-giant',
        { xPercent: 12 },
        {
          xPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: '.ft-giant-wrap', start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
      gsap.to('.ft-sparkle', { rotation: 360, duration: 10, repeat: -1, ease: 'none' });
    },
    { scope: root }
  );

  return (
    <footer id="contact" ref={root} className="relative pt-28 pb-10 overflow-hidden bg-ink-2">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full bg-petal/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          icon={HiChatBubbleLeftRight}
          title="Let's ship something"
          accent="flawless together"
          subtitle="Looking for a detail-loving QA & Test Automation Engineer? My inbox is always open."
        />

        <div className="ft-grid grid lg:grid-cols-5 gap-8 mb-24">
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="ft-contact group flex items-center gap-5 card-soft rounded-[1.75rem] p-5 hover:border-petal/40 transition-colors"
                >
                  <span className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center shrink-0 group-hover:rotate-[-8deg] transition-transform duration-500`}>
                    <Icon className="w-6 h-6 text-ink" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.2em] text-mauve">{c.label}</div>
                    <div className="text-cream truncate">{c.text}</div>
                  </div>
                </a>
              );
            })}

            <div className="ft-contact flex gap-3 pt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Magnetic key={s.label} strength={0.4}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-14 h-14 rounded-full bg-ink-3 border border-blush/10 flex items-center justify-center text-blush hover:bg-petal hover:text-ink transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="ft-form lg:col-span-3 card-soft rounded-[2rem] p-7 sm:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-blush mb-2">Your name</label>
                <input id="name" required placeholder="Jane Doe" className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-blush mb-2">Email</label>
                <input id="email" type="email" required placeholder="jane@company.com" className={inputCls} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-blush mb-2">Subject</label>
              <input id="subject" required placeholder="QA Internship Opportunity" className={inputCls} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-blush mb-2">Message</label>
              <textarea id="message" rows={4} required placeholder="Tell me about your team..." className={`${inputCls} resize-none`} />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-petal hover:bg-blush text-ink font-semibold transition-colors"
            >
              {sent ? (
                <>
                  <HiCheckCircle className="w-5 h-5" />
                  Message received — thank you!
                </>
              ) : (
                <>
                  Send Message
                  <HiPaperAirplane className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Giant scrolling name */}
      <div className="ft-giant-wrap relative overflow-hidden py-6 select-none" aria-hidden="true">
        <div className="ft-giant flex items-center gap-10 whitespace-nowrap font-display italic text-[18vw] leading-none text-outline">
          <span>Devindi</span>
          <Sparkle className="ft-sparkle w-[8vw] h-[8vw] text-petal shrink-0" />
          <span>Uthapala</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 mt-10 pt-8 border-t border-blush/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-mauve">
          © 2026 Devindi Uthapala — crafted with care &amp; tested with love.
        </p>
        <Magnetic strength={0.4}>
          <a
            href="#home"
            aria-label="Back to top"
            className="w-14 h-14 rounded-full bg-petal flex items-center justify-center text-ink hover:bg-blush transition-colors"
          >
            <HiArrowUp className="w-6 h-6" />
          </a>
        </Magnetic>
      </div>
    </footer>
  );
}
