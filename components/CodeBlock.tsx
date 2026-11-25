'use client';

import { useState } from 'react';
import { HiClipboardDocument, HiCheck } from 'react-icons/hi2';

interface CodeBlockProps {
  code: string;
  language: 'json' | 'javascript';
  label?: string;
}

export default function CodeBlock({ code, language, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-neutral-300 bg-neutral-50">
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 text-white border-b border-neutral-800">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
          {label || language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors"
        >
          {copied ? (
            <>
              <HiCheck className="w-3.5 h-3.5 text-black" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <HiClipboardDocument className="w-3.5 h-3.5 text-black" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-neutral-900 bg-white">
        <code>{code}</code>
      </pre>
    </div>
  );
}
