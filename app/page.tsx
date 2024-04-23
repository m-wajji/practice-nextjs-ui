import { ContactForm } from "@/components/contactform/ContactForm";
import { Features } from "@/components/features/Features";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { HighlightedCTA1 } from "@/components/highlightedCTA/HighlightedCTA1";
import { HighlightedCTA2 } from "@/components/highlightedCTA/HighlightedCTA2";
import { Logobar } from "@/components/logobar/Logobar";
import { Metrics } from "@/components/metrics/Metrics";
import { Navbar } from "@/components/navbar/Navbar";
import { Pricing } from "@/components/pricing/Pricing";
import { Team } from "@/components/team/Team";
import { Testimonials } from "@/components/testimonials/Testimonials";
import React from "react";

const Home = () => {
  return (
    <main className="bg-[#F8F9FF]">
      <Navbar />
      <div className="px-[55px]">
        <HeroSection />
        <Logobar />
        <Features />
        <Metrics />
        <HighlightedCTA1 />
        <Testimonials />
        <Pricing />
        <Team />
        <HighlightedCTA2 />
        <ContactForm />
      </div>
    </main>
  );
};

export default Home;
