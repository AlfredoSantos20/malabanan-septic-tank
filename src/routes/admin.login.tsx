import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Droplets, Mail, Lock, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({ meta: [{ title: "Admin Login — Malabanan Siphoning" }] }),
});

function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [remember, setRemember] = useState(true);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left visual */}
      <div className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 backdrop-blur">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="text-sm font-extrabold">{BRAND.short}</span>
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Admin Portal
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight">
              Manage requests,<br />customers, and operations.
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/80">
              Secure dashboard for the Malabanan Siphoning team. Track service requests, customers, and field operations in one place.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-xs">Encrypted login. Access restricted to authorized administrators.</p>
            </div>
          </div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} {BRAND.short}</p>
        </div>
      </div>

      {/* Right form */}
      <div className="relative flex items-center justify-center px-6 py-12">
        <div className="absolute inset-0 -z-10 gradient-soft lg:hidden" />
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-sky-700">
            <ArrowLeft className="h-4 w-4" /> Back to Website
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-600">Sign in to your admin dashboard.</p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              nav({ to: "/admin/dashboard" });
            }}
          >
            <div>
              <label className="text-xs font-semibold text-slate-700">Email Address</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-soft focus-within:border-sky-400">
                <Mail className="h-4 w-4 text-sky-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">Password</label>
              <div className="mt-1.5 flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-soft focus-within:border-sky-400">
                <Lock className="h-4 w-4 text-sky-500" />
                <input
                  type="password"
                  required
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-700">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-sky-300 text-sky-600 focus:ring-sky-400"
                />
                Remember me
              </label>
              <a href="#" className="font-semibold text-sky-700 hover:underline">Forgot password?</a>
            </div>

            <GradientButton className="w-full">Sign In</GradientButton>
          </form>
        </div>
      </div>
    </div>
  );
}
