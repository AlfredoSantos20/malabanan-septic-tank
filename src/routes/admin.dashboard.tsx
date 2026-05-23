import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard, ClipboardList, Users, MapPin, Image as ImageIcon,
  Phone, Settings, Menu, X, Bell, Search, ArrowUpRight, ArrowDownRight,
  CheckCircle2, Clock, AlertCircle, ExternalLink, Droplets,
} from "lucide-react";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
  head: () => ({ meta: [{ title: "Dashboard — Malabanan Admin" }] }),
});

const MENU = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ClipboardList, label: "Service Requests" },
  { icon: Users, label: "Customers" },
  { icon: MapPin, label: "Service Areas" },
  { icon: ImageIcon, label: "Gallery" },
  { icon: Phone, label: "Contacts" },
  { icon: Settings, label: "Settings" },
];

const STATS = [
  { label: "Total Requests", value: "1,248", delta: "+12.4%", up: true, icon: ClipboardList },
  { label: "Active Services", value: "37", delta: "+4.2%", up: true, icon: Clock },
  { label: "Completed Jobs", value: "1,156", delta: "+18.1%", up: true, icon: CheckCircle2 },
  { label: "Pending Inquiries", value: "29", delta: "-3.0%", up: false, icon: AlertCircle },
];

const REQUESTS = [
  { id: "REQ-1042", name: "Maria Santos", service: "Septic Cleaning", area: "Tacloban", status: "In Progress", date: "Today" },
  { id: "REQ-1041", name: "Juan Dela Cruz", service: "Declogging", area: "Iloilo", status: "Pending", date: "Today" },
  { id: "REQ-1040", name: "Anna Reyes", service: "Plumbing Repair", area: "Bacolod", status: "Completed", date: "Yesterday" },
  { id: "REQ-1039", name: "Carlos Lim", service: "Grease Trap", area: "Quezon City", status: "Completed", date: "Yesterday" },
  { id: "REQ-1038", name: "Liza Cruz", service: "Siphoning", area: "Bohol", status: "In Progress", date: "2d ago" },
];

const STATUS_STYLES: Record<string, string> = {
  "In Progress": "bg-sky-50 text-sky-700 border-sky-200",
  "Pending": "bg-amber-50 text-amber-700 border-amber-200",
  "Completed": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

function AdminDashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-sky-100 bg-white p-5 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary shadow-glow">
              <Droplets className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900">{BRAND.short}</div>
              <div className="text-[10px] uppercase tracking-widest text-sky-600">Admin Portal</div>
            </div>
          </Link>
          <button className="grid h-9 w-9 place-items-center rounded-xl border border-sky-100 lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="mt-8 grid gap-1">
          {MENU.map((m) => (
            <button
              key={m.label}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition ${
                m.active
                  ? "gradient-primary text-white shadow-glow"
                  : "text-slate-700 hover:bg-sky-50"
              }`}
            >
              <m.icon className="h-4 w-4" />
              {m.label}
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">Tip</p>
          <p className="mt-2 text-sm text-slate-700">Respond to new requests within 15 minutes for the best customer ratings.</p>
        </div>

        <Link
          to="/"
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-400 hover:text-sky-700"
        >
          <ExternalLink className="h-4 w-4" /> Back to Website
        </Link>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-sky-100 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <button className="grid h-10 w-10 place-items-center rounded-xl border border-sky-100 lg:hidden" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden flex-1 max-w-md sm:block">
              <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-slate-50 px-4 py-2.5">
                <Search className="h-4 w-4 text-slate-400" />
                <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search requests, customers..." />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-sky-100 bg-white">
                <Bell className="h-4 w-4 text-slate-600" />
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full gradient-button ring-2 ring-white" />
              </button>
              <div className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-3 py-1.5">
                <span className="grid h-7 w-7 place-items-center rounded-full gradient-primary text-xs font-bold text-white">A</span>
                <div className="hidden text-left sm:block">
                  <div className="text-xs font-semibold text-slate-900">Admin</div>
                  <div className="text-[10px] text-slate-500">admin@malabanan.ph</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="space-y-8 p-5 lg:p-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 lg:text-3xl">Welcome back, Admin 👋</h1>
            <p className="mt-1 text-sm text-slate-600">Here's what's happening with your operations today.</p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/10 to-sky-300/10 blur-2xl" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${s.up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                    {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />} {s.delta}
                  </span>
                </div>
                <div className="relative mt-5 text-3xl font-extrabold text-slate-900">{s.value}</div>
                <div className="relative mt-1 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Analytics + activity */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Service Requests Overview</h3>
                  <p className="text-xs text-slate-500">Last 7 days</p>
                </div>
                <select className="rounded-xl border border-sky-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
                  <option>This week</option>
                  <option>This month</option>
                </select>
              </div>
              <div className="mt-6 flex h-56 items-end gap-3">
                {[40, 65, 50, 80, 70, 95, 75].map((h, i) => (
                  <div key={i} className="group flex flex-1 flex-col items-center gap-2">
                    <div className="w-full rounded-t-2xl gradient-button transition-all duration-500 group-hover:opacity-90" style={{ height: `${h}%` }} />
                    <span className="text-[10px] font-medium text-slate-500">{["M","T","W","T","F","S","S"][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft">
              <h3 className="text-base font-bold text-slate-900">Recent Activity</h3>
              <ul className="mt-5 space-y-4">
                {[
                  { t: "New service request from Maria Santos", time: "5 min ago", c: "sky" },
                  { t: "Job REQ-1040 marked as completed", time: "1 hr ago", c: "emerald" },
                  { t: "Customer Anna Reyes updated profile", time: "3 hrs ago", c: "blue" },
                  { t: "New inquiry from Bohol area", time: "Yesterday", c: "amber" },
                ].map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-${a.c}-500`} />
                    <div>
                      <p className="text-sm font-medium text-slate-800">{a.t}</p>
                      <p className="text-[11px] text-slate-500">{a.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Requests Table */}
          <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft">
            <div className="flex items-center justify-between p-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Recent Service Requests</h3>
                <p className="text-xs text-slate-500">Manage and track customer service requests</p>
              </div>
              <button className="rounded-2xl gradient-button px-4 py-2 text-xs font-semibold text-white shadow-glow">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-y border-sky-100 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Request ID</th>
                    <th className="px-6 py-3 font-semibold">Customer</th>
                    <th className="px-6 py-3 font-semibold">Service</th>
                    <th className="px-6 py-3 font-semibold">Area</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                    <th className="px-6 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-50">
                  {REQUESTS.map((r) => (
                    <tr key={r.id} className="transition hover:bg-sky-50/50">
                      <td className="px-6 py-4 font-mono text-xs font-semibold text-sky-700">{r.id}</td>
                      <td className="px-6 py-4 font-medium text-slate-900">{r.name}</td>
                      <td className="px-6 py-4 text-slate-600">{r.service}</td>
                      <td className="px-6 py-4 text-slate-600">{r.area}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLES[r.status]}`}>{r.status}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {open && <div className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden" onClick={() => setOpen(false)} />}
    </div>
  );
}
