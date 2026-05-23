type Props = { badge?: string; title: string; subtitle?: string; center?: boolean };

export function SectionHeader({ badge, title, subtitle, center = true }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-sky-700">
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base text-slate-600 sm:text-lg ${center ? "mx-auto max-w-2xl" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
