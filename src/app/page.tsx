import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import OurApproach from "@/components/OurApproach";
import WhoWeServe from "@/components/WhoWeServe";
import ImpactSnapshot from "@/components/ImpactSnapshot";
import FeaturedInitiative from "@/components/FeaturedInitiative";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[99px]">
        <Hero />
        <WhatWeDo />
        <WhyWorkWithUs />
        <OurApproach />
        <WhoWeServe />
        <ImpactSnapshot />
        <FeaturedInitiative />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
