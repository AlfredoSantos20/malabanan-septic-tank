import { Phone, MapPin } from "lucide-react";
import { AREAS, BRAND } from "@/data/site";
import { SectionHeader } from "./SectionHeader";
import { GradientButton } from "@/components/ui/GradientButton";

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          badge="Our Service Areas"
          title="Serving Communities Across the Country"
          subtitle="Fast, friendly service in these cities — and growing."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <div
              key={a.name}
              className="group overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src={a.map}
                  title={`${a.name} map`}
                  className="h-full w-full border-0"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{a.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{a.desc}</p>
                <GradientButton href={`tel:${BRAND.phones[0]}`} className="mt-5 w-full">
                  <Phone className="h-4 w-4" /> Call Us
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
