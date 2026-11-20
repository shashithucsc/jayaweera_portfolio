interface SparkleProps {
  className?: string;
}

/** Solid four-point sparkle graphic (SVG, not an emoji). */
export default function Sparkle({ className = '' }: SparkleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z" />
    </svg>
  );
}
