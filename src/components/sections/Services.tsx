import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="relative pt-12 pb-20 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          badge="Our Services"
          title="Complete Plumbing & Septic Solutions"
          subtitle="From routine cleaning to emergency repairs, our experts handle every job with precision and care."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-sky-300/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-glow">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              {/** Learn more removed as requested **/}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
