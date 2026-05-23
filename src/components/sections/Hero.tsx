import { motion } from "framer-motion";
import { Phone, Sparkles, LayoutDashboard, ShieldCheck, Clock, Star } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { BRAND } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-soft" />
      <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 -z-10 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-sky-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trusted Septic Tank Experts
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Professional <span className="gradient-text">Malabanan Siphoning</span> & Plumbing Services
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            {BRAND.tagline}. Our experienced team is ready 24/7 to keep your home and business flowing smoothly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href={`tel:${BRAND.phones[0]}`}>
              <Phone className="h-4 w-4" /> Call Now
            </GradientButton>
            <GradientButton variant="outline" href="#contact">
              Get Free Estimate
            </GradientButton>
            <GradientButton variant="ghost" to="/admin/login">
              <LayoutDashboard className="h-4 w-4" /> Admin Dashboard
            </GradientButton>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
              { v: "10K+", l: "Jobs Done" },
              { v: "5★", l: "Avg Rating" },
              { v: "24/7", l: "Emergency" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass p-4">
                <div className="text-xl font-extrabold gradient-text">{s.v}</div>
                <div className="mt-1 text-xs text-slate-600">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80"
              alt="Professional plumbing service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -left-4 top-10 hidden rounded-2xl glass p-4 shadow-soft sm:flex sm:items-center sm:gap-3 animate-float"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-semibold text-slate-900">Licensed & Insured</div>
              <div className="text-[11px] text-slate-500">Guaranteed quality</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ animationDelay: "2s" }}
            className="absolute -right-4 bottom-10 hidden rounded-2xl glass p-4 shadow-soft sm:flex sm:items-center sm:gap-3 animate-float"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-secondary text-white">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-semibold text-slate-900">Fast Response</div>
              <div className="text-[11px] text-slate-500">Same-day service</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl glass px-5 py-3 shadow-soft flex items-center gap-2"
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-slate-900">4.9 / 5 from 2,300+ clients</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
