import { BRAND } from "@/data/site";

export function SeoContent() {
  return (
    <section
      id="about"
      aria-label="Malabanan septic and siphoning services"
      className="border-y border-sky-100 bg-sky-50/50 py-12"
    >
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Malabanan — Septic, Tank &amp; Siphoning Experts
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {BRAND.name} is the trusted name for <strong>malabanan septic</strong>,{" "}
          <strong>malabanan siphoning</strong>, <strong>septic tank</strong> cleaning, and{" "}
          <strong>siphoning malabanan</strong> services. Whether you need{" "}
          <strong>malabanan septic tank</strong> maintenance,{" "}
          <strong>malabanan siphoning septic</strong> work, or full{" "}
          <strong>malabanan siphoning septic tank</strong> service — including{" "}
          <strong>malabanan siphoninc septic</strong> requests — our 24/7 team is ready across
          Tacloban, Iloilo, Bacolod, Quezon City, and Bohol.
        </p>
      </div>
    </section>
  );
}
