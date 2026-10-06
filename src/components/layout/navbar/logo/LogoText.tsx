import { siteConfig } from "@/config/site";

interface LogoTextProps {
  className?: string;
}

/**
 * Brand wordmark rendered from siteConfig.name so a rename is one edit.
 * Swap for an SVG wordmark once the brand identity is final.
 */
export default function LogoText({ className }: LogoTextProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: "26px",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        whiteSpace: "nowrap",
        width: "auto",
      }}
    >
      {siteConfig.name}
    </span>
  );
}
