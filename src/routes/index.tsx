import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { SeoContent } from "@/components/sections/SeoContent";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Malabanan Siphoning Septic Tank | Malabanan Septic | Septic Tank Siphoning" },
      {
        name: "description",
        content:
          "Malabanan — septic, tank, and siphoning services. Malabanan septic, malabanan siphoning, septic tank, siphoning malabanan, malabanan septic tank, malabanan siphoning septic tank. 24/7 declogging and plumbing in Tacloban, Iloilo, Bacolod, Quezon City, and Bohol.",
      },
      {
        name: "keywords",
        content:
          "malabanan, septic, tank, siphoning, malabanan septic, malabanan siphoning, septic tank, siphoning malabanan, malabanan tank, malabanan septic tank, malabanan siphoning septic, malabanan siphoning septic tank, malabanan siphoninc septic, septic siphoning, siphoning septic, siphoning septic tank, septic tank siphoning, malabanan siphoning tank, malabanan septic siphoning, malabanan plumbing, malabanan declogging, septic tank cleaning, septic tank cleaning malabanan, malabanan siphoning services, siphoning services, septic services",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SeoContent />
        <Services />
        <HowItWorks />
        <ServiceAreas />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
