import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CareerDark } from "@/components/sections/CareerDark";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f9fc]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesBento />
        <CaseStudies />
        <CareerDark />
        <FaqSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
