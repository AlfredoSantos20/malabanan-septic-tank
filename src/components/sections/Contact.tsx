import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/site";
import { SectionHeader } from "./SectionHeader";
import { GradientButton } from "@/components/ui/GradientButton";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 gradient-soft" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          badge="Contact Us"
          title="Get In Touch — We're Ready to Help"
          subtitle="Call us anytime. Our team responds fast for emergencies and free estimates alike."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {BRAND.phones.map((p, i) => (
            <div
              key={p}
              className="group relative overflow-hidden rounded-3xl border border-white/40 glass p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl transition group-hover:bg-sky-400/30" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-glow">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                    Hotline {i + 1}
                  </div>
                  <a href={`tel:${p}`} className="block text-2xl font-extrabold text-slate-900 hover:text-sky-700">
                    {p}
                  </a>
                </div>
              </div>
              <p className="relative mt-5 text-sm text-slate-600">
                Available 24/7 for emergency siphoning, declogging, and plumbing repairs.
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                <GradientButton href={`tel:${p}`}>
                  <Phone className="h-4 w-4" /> Call Now
                </GradientButton>
                <GradientButton variant="outline" href={`sms:${p}`}>
                  <MessageCircle className="h-4 w-4" /> Send Message
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
