import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { InsightSection } from "@/components/landing/InsightSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-brand selection:text-white">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <ProjectsSection />
      <FeaturesSection />
      <InsightSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
