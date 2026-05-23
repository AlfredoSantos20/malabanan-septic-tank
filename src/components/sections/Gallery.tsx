import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GALLERY } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Gallery() {
  const galleryItems = GALLERY.slice(0, 5).map((g, i) => ({
    ...g,
    img: `/assets/${i + 1}.jpg`,
  }));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    if (activeIndex !== null) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <section id="gallery" className="relative pt-12 pb-20 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          badge="Our Actual Work"
          title="Trusted Septic Tank & Plumbing Experts"
          subtitle="See our professional team in action providing reliable siphoning, declogging, and plumbing services."
        />
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {galleryItems.map((g, i) => {
            const span =
              i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : "";
            return (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl shadow-xl ${span} cursor-zoom-in`}
                onClick={() => setActiveIndex(i)}
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

        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryItems[activeIndex].img}
                alt={galleryItems[activeIndex].label}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow hover:bg-white"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>
              <div className="absolute inset-x-3 bottom-3 text-center text-xs font-medium text-white">
                {galleryItems[activeIndex].caption}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
