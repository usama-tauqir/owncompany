interface LogoIconProps {
  className?: string;
}

/**
 * Brand mark — a placeholder monogram. Replace this SVG with your own logo.
 */
export default function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="60" height="60" rx="16" fill="currentColor" />
      <circle cx="32" cy="32" r="15" stroke="#ffffff" strokeWidth="7" />
      <circle cx="47" cy="17" r="5" fill="#ffffff" />
    </svg>
  );
}
