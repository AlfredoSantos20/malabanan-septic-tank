import { motion } from "framer-motion";
import { STEPS } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 gradient-soft opacity-60" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          badge="How It Works"
          title="A Simple 4-Step Process"
          subtitle="From your first call to a finished job — getting help has never been easier."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border border-sky-100 bg-white p-7 pt-12 shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-6 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-2xl gradient-button text-lg font-extrabold text-white shadow-glow">
                {i + 1}
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-sky-600">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
