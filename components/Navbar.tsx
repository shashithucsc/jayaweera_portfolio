'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowUpRight } from 'react-icons/hi2';
import { gsap, useGSAP, ScrollTrigger, onLoaderDone } from '@/lib/gsap';
import Sparkle from './ui/Sparkle';
import Magnetic from './ui/Magnetic';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      const intro = gsap.from(navRef.current, {
        yPercent: -150,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        paused: true,
      });
      const off = onLoaderDone(() => intro.play());

      let hidden = false;
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const y = self.scroll();
          setScrolled(y > 30);
          const shouldHide = self.direction === 1 && y > 500;
          if (shouldHide !== hidden) {
            hidden = shouldHide;
            gsap.to(navRef.current, {
              yPercent: shouldHide ? -150 : 0,
              duration: 0.5,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          }
        },
      });

      gsap.to('.nav-sparkle', { rotation: 360, duration: 8, repeat: -1, ease: 'none' });
      return off;
    },
    { scope: navRef }
  );

  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href.slice(1)), 'contact'];
    const onScroll = () => {
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 160 && r.bottom >= 160;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header ref={navRef} className="fixed top-4 inset-x-0 z-50 px-4">
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between rounded-full pl-5 pr-2 py-2 transition-all duration-500 ${
            scrolled
              ? 'bg-ink-2/80 backdrop-blur-xl border border-blush/10 shadow-xl shadow-black/40'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <Sparkle className="nav-sparkle w-5 h-5 text-petal" />
            <span className="font-display italic text-2xl font-semibold text-cream">
              Devindi<span className="text-petal not-italic">.</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm transition-colors ${
                    isActive ? 'text-ink font-semibold' : 'text-mauve hover:text-cream'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-blush"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.25} className="hidden sm:inline-block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-petal text-ink text-sm font-semibold hover:bg-blush transition-colors"
              >
                Let&apos;s Talk
                <span className="w-7 h-7 rounded-full bg-ink flex items-center justify-center">
                  <HiArrowUpRight className="w-4 h-4 text-petal" />
                </span>
              </a>
            </Magnetic>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-11 h-11 rounded-full bg-ink-3 border border-blush/10 flex items-center justify-center text-cream"
            >
              <HiBars3 className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-ink-2 flex flex-col"
          >
            <div className="absolute inset-0 dot-grid opacity-50" />
            <div className="relative flex items-center justify-between p-6">
              <span className="font-display italic text-2xl text-cream">
                Devindi<span className="text-petal">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 rounded-full bg-petal flex items-center justify-center text-ink"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>
            <div className="relative flex-1 flex flex-col justify-center px-8 gap-2">
              {[...navLinks, { name: 'Contact', href: '#contact' }].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                  className="font-display text-5xl text-cream hover:text-petal hover:italic transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
