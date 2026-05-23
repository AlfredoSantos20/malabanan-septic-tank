import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="pt-12 pb-20 lg:pt-16">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our siphoning, septic tank cleaning, and plumbing services."
        />
        <div className="grid gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">{f.q}</span>
                  <span className={`grid h-8 w-8 place-items-center rounded-xl gradient-primary text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-sm text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
