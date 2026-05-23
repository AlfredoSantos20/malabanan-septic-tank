import { motion } from "framer-motion";
import { GALLERY } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          badge="Our Actual Work"
          title="Trusted Septic Tank & Plumbing Experts"
          subtitle="See our professional team in action providing reliable siphoning, declogging, and plumbing services."
        />
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {GALLERY.map((g, i) => {
            const span =
              i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : "";
            return (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl shadow-xl ${span}`}
              >
                <img
                  src={g.img}
                  alt={g.label}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                    {g.label}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white">{g.caption}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
