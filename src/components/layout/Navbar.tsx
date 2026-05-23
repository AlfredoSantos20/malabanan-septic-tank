import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Droplets, LayoutDashboard } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data/site";
import { GradientButton } from "@/components/ui/GradientButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary shadow-glow">
            <Droplets className="h-5 w-5 text-white" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-slate-900">{BRAND.short}</div>
            <div className="text-[10px] uppercase tracking-widest text-sky-600">Septic Tank Experts</div>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <GradientButton variant="outline" to="/admin/login">
            <LayoutDashboard className="h-4 w-4" /> Admin
          </GradientButton>
          <GradientButton href={`tel:${BRAND.phones[0]}`}>
            <Phone className="h-4 w-4" /> Call Now
          </GradientButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-xl border border-sky-100 bg-white/70 backdrop-blur lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="mx-5 mb-4 rounded-3xl border border-sky-100 bg-white/90 p-4 shadow-soft backdrop-blur-xl">
            <ul className="grid gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2">
              <GradientButton variant="outline" to="/admin/login">
                <LayoutDashboard className="h-4 w-4" /> Admin Dashboard
              </GradientButton>
              <GradientButton href={`tel:${BRAND.phones[0]}`}>
                <Phone className="h-4 w-4" /> Call Now
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
