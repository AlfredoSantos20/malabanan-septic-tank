import { Link } from "@tanstack/react-router";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";

const variants: Record<Variant, string> = {
  primary: "gradient-button text-white shadow-glow hover:shadow-[0_25px_70px_-20px_rgba(56,189,248,0.7)]",
  outline: "border border-sky-200 bg-white/70 text-slate-800 backdrop-blur hover:border-sky-400 hover:text-sky-700",
  ghost: "text-slate-700 hover:text-sky-600",
  white: "bg-white text-blue-700 shadow-soft hover:shadow-glow",
};

type Props = {
  variant?: Variant;
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function GradientButton({ variant = "primary", href, to, children, className = "", ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
