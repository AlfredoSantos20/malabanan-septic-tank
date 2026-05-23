import { Droplets, Facebook, Instagram, Twitter, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS, AREAS } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary">
                <Droplets className="h-5 w-5 text-white" />
              </span>
              <span className="text-base font-extrabold text-white">{BRAND.short}</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Trusted septic tank siphoning and plumbing experts serving communities nationwide.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 hover:gradient-primary hover:text-white transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a className="text-slate-400 hover:text-sky-300" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Service Areas</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {AREAS.map((a) => (
                <li key={a.name} className="flex items-center gap-2 text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-sky-400" /> {a.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {BRAND.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-300">
                    <Phone className="h-4 w-4 text-sky-400" /> {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div>Built with care for clean, healthy homes.</div>
        </div>
      </div>
    </footer>
  );
}
