import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
  external?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantClasses = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary:
    "border border-border text-foreground hover:border-foreground/40 hover:bg-border/20",
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  external = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
