import {
  Droplets, Wrench, Activity, ShowerHead, Gauge, ShieldCheck,
  Phone, ClipboardList, Smile,
} from "lucide-react";

export const BRAND = {
  name: "Malabanan Siphoning Septic Tank",
  short: "Malabanan Siphoning",
  phones: ["09488800390", "09056948199"],
  tagline: "Fast, Reliable, and Affordable Septic Tank Cleaning Solutions",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Service Areas", href: "#areas" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { icon: Droplets, title: "Septic Tank Cleaning", desc: "Thorough cleaning that keeps your septic system flowing safely and odor-free." },
  { icon: Activity, title: "Siphoning Services", desc: "High-capacity siphoning for residential and commercial septic tanks." },
  { icon: Wrench, title: "Declogging", desc: "Fast, effective removal of stubborn clogs in pipes, sinks, and drains." },
  { icon: ShowerHead, title: "Plumbing Repair", desc: "Reliable repairs for leaks, fixtures, and full plumbing systems." },
  { icon: ShieldCheck, title: "Grease Trap Cleaning", desc: "Professional grease trap maintenance for restaurants and businesses." },
  { icon: Gauge, title: "Leak Detection", desc: "Modern leak detection to find hidden problems before they get worse." },
];

export const STEPS = [
  { icon: Phone, title: "Call or Book", desc: "Reach out anytime through our hotline or online booking form." },
  { icon: ClipboardList, title: "Free Assessment", desc: "We inspect the issue and provide a clear and upfront quotation." },
  { icon: Wrench, title: "Fast Service", desc: "Our professional team arrives on time and completes the work efficiently." },
  { icon: Smile, title: "Job Well Done", desc: "Clean work, satisfied customers, and guaranteed quality every time." },
];

export const AREAS = [
  { name: "Tacloban", map: "https://www.google.com/maps?q=Tacloban+City&output=embed" },
  { name: "Iloilo", map: "https://www.google.com/maps?q=Iloilo+City&output=embed" },
  { name: "Bacolod", map: "https://www.google.com/maps?q=Bacolod+City&output=embed" },
  { name: "Quezon City", map: "https://www.google.com/maps?q=Quezon+City&output=embed" },
  { name: "Bohol", map: "https://www.google.com/maps?q=Bohol&output=embed" },
].map((a) => ({
  ...a,
  desc: `Reliable siphoning and plumbing services in ${a.name}. Fast response for septic tank cleaning, declogging, and plumbing repairs.`,
}));

export const GALLERY = [
  { label: "Septic Tank Siphoning", caption: "Heavy-duty vacuum siphoning operation", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80" },
  { label: "Professional Declogging", caption: "Clearing blockages with industrial tools", img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80" },
  { label: "Emergency Plumbing", caption: "24/7 response across service areas", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80" },
  { label: "Residential Cleaning", caption: "Safe, family-friendly septic service", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" },
  { label: "Commercial Grease Trap", caption: "Restaurant & business grease management", img: "https://images.unsplash.com/photo-1556909114-44e3e9399a2e?auto=format&fit=crop&w=900&q=80" },
  { label: "On-Site Inspection", caption: "Upfront quotes after free assessment", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80" },
];

export const FAQS = [
  { q: "What is malabanan siphoning septic tank service?", a: "Malabanan siphoning septic tank service covers professional septic tank cleaning, siphoning, and full septic system maintenance. Malabanan Siphoning Septic Tank provides malabanan septic, malabanan siphoning, and septic tank solutions 24/7." },
  { q: "Do you offer malabanan septic and malabanan siphoning?", a: "Yes. We specialize in malabanan septic cleaning, malabanan siphoning, septic tank maintenance, and siphoning malabanan services for homes and businesses." },
  { q: "How often should septic tanks be cleaned?", a: "Septic tanks should generally be cleaned every 3–5 years depending on usage and household size." },
  { q: "Do you offer emergency plumbing services?", a: "Yes, we provide fast-response emergency plumbing and siphoning services in selected service areas." },
  { q: "What areas do you currently serve?", a: "We currently serve Tacloban, Iloilo, Bacolod, Quezon City, and Bohol." },
  { q: "How much does siphoning service cost?", a: "Pricing depends on the tank size, location, and service requirements. Contact us for a free estimate." },
  { q: "Do you handle grease trap cleaning?", a: "Yes, we offer professional grease trap cleaning services for residential and commercial establishments." },
];
