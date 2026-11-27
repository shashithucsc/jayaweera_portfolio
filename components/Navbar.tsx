'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowUpRight } from 'react-icons/hi2';
import { gsap, useGSAP, ScrollTrigger, onLoaderDone } from '@/lib/gsap';
import Sparkle from './ui/Sparkle';
import Magnetic from './ui/Magnetic';

const navLinks = [
  { name: 'Home', href: '/#home', sectionId: 'home' },
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Process', href: '/#process', sectionId: 'process' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Education', href: '/#education', sectionId: 'education' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isTryPage = pathname === '/try' || pathname === '/try1';
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(isTryPage ? 'try' : 'home');
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      if (isTryPage) {
        gsap.set(navRef.current, { yPercent: 0, opacity: 1 });
      } else {
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
      }

      gsap.to('.nav-sparkle', { rotation: 360, duration: 8, repeat: -1, ease: 'none' });
    },
    { scope: navRef, dependencies: [isTryPage] }
  );

  useEffect(() => {
    if (isTryPage) {
      const onScroll = () => setScrolled(window.scrollY > 30);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    const ids = ['home', 'about', 'process', 'projects', 'skills', 'education', 'contact'];
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
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
  }, [isTryPage]);

  return (
    <>
      <header ref={navRef} className="fixed top-4 inset-x-0 z-50 px-4">
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between rounded-full pl-5 pr-2 py-2 transition-all duration-500 ${
            isTryPage
              ? 'bg-black text-white border border-neutral-800 shadow-lg'
              : scrolled
              ? 'bg-ink-2/85 backdrop-blur-xl border border-blush/10 shadow-xl shadow-black/40'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <Link href="/#home" className="flex items-center gap-2 group">
            <Sparkle className={`nav-sparkle w-5 h-5 ${isTryPage ? 'text-white' : 'text-petal'}`} />
            <span className="font-display italic text-2xl font-semibold text-cream">
              Devindi<span className={`${isTryPage ? 'text-white' : 'text-petal'} not-italic`}>.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const currentActive = pathname === '/try' ? 'try' : pathname === '/try1' ? 'try1' : active;
              const isActive = currentActive === link.sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm transition-colors ${
                    isActive
                      ? isTryPage
                        ? 'text-black font-semibold'
                        : 'text-ink font-semibold'
                      : isTryPage
                      ? 'text-neutral-300 hover:text-white'
                      : 'text-mauve hover:text-cream'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${isTryPage ? 'bg-white' : 'bg-blush'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.25} className="hidden sm:inline-block">
              <Link
                href="/#contact"
                className={`inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isTryPage
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-petal text-ink hover:bg-blush'
                }`}
              >
                Let&apos;s Talk
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center ${
                    isTryPage ? 'bg-black' : 'bg-ink'
                  }`}
                >
                  <HiArrowUpRight className={`w-4 h-4 ${isTryPage ? 'text-white' : 'text-petal'}`} />
                </span>
              </Link>
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
            <div className="relative flex-1 flex flex-col justify-center px-8 gap-2 overflow-y-auto">
              {[...navLinks, { name: 'Contact', href: '/#contact', sectionId: 'contact' }].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-4xl sm:text-5xl text-cream hover:text-petal hover:italic transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
