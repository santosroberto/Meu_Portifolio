import type { ReactNode } from "react";

type BadgeVariant = "neutral" | "success" | "warning" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const styleClasses: Record<BadgeVariant, string> = {
  neutral: "bg-foreground/5 text-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  outline: "border border-dashed border-border text-muted",
};

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide ${styleClasses[variant]}`}
    >
      {children}
    </span>
  );
}
