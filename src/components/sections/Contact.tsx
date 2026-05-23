import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND, AREAS } from "@/data/site";
import { SectionHeader } from "./SectionHeader";
import { GradientButton } from "@/components/ui/GradientButton";

export function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    location: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ phone?: string }>({});

  // Expect exactly 10 numeric digits for PH local number; +63 is shown as a fixed prefix.
  const validatePhone = (value: string) => /^\d{10}$/.test(value);

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    // Allow only digits in phone input
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }
    setForm((f) => ({ ...f, [name]: value }));
    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value) ? undefined : "Enter 10 digits (we'll prefix +63)",
      }));
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const phoneOk = validatePhone(form.phone);
    setErrors((prev) => ({ ...prev, phone: phoneOk ? undefined : "Enter 10 digits (we'll prefix +63)" }));
    if (!phoneOk) return;
    // ready to submit (no backend wiring per request)
  };
  return (
    <section id="contact" className="relative pt-12 pb-20 lg:pt-16">
      <div className="absolute inset-0 -z-10 gradient-soft" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          badge="Contact Us"
          title="Get In Touch — We're Ready to Help"
          subtitle="Call us anytime. Our team responds fast for emergencies and free estimates alike."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-6">
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
                </div>
              </div>
            ))}
          </div>

          <div>
            <form onSubmit={onSubmit} className="w-full">
              <div className="grid gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  value={form.fullName}
                  onChange={onChange}
                  required
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-500 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">+63</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER (10 digits)"
                    value={form.phone}
                    onChange={onChange}
                    onBlur={(e) =>
                      setErrors((prev) => ({
                        ...prev,
                        phone: validatePhone(e.target.value) ? undefined : "Enter 10 digits (we'll prefix +63)",
                      }))
                    }
                    pattern="^\d{10}$"
                    inputMode="numeric"
                    maxLength={10}
                    className={`w-full rounded-2xl border bg-white pl-14 pr-4 py-3 text-slate-700 placeholder:text-slate-500 outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                        : "border-sky-200 focus:border-sky-400 focus:ring-sky-100"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <div className="-mt-2 text-xs font-medium text-red-600">{errors.phone}</div>
                )}
                <select
                  name="location"
                  value={form.location}
                  onChange={onChange}
                  required
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    SELECT LOCATION
                  </option>
                  {AREAS.map((a) => (
                    <option key={a.name} value={a.name}>
                      {a.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="address"
                  placeholder="ADDRESS"
                  value={form.address}
                  onChange={onChange}
                  required
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-500 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="MESSAGE"
                  value={form.message}
                  onChange={onChange}
                  required
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-500 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-6 py-4 text-sm font-extrabold tracking-wider text-white shadow-soft transition-colors hover:from-sky-600 hover:to-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
