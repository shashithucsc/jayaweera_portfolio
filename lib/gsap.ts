'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

declare global {
  interface Window {
    __loaderDone?: boolean;
  }
}

/** Runs `cb` once the intro loader has finished (or immediately if it already has). */
export function onLoaderDone(cb: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  if (window.__loaderDone) {
    cb();
    return () => {};
  }
  const handler = () => cb();
  window.addEventListener('loader:done', handler, { once: true });
  return () => window.removeEventListener('loader:done', handler);
}

export { gsap, ScrollTrigger, useGSAP };
