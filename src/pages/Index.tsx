import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ThreatMonitorSection } from "@/components/sections/ThreatMonitorSection";
import { SentinelXSection } from "@/components/sections/SentinelXSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollFadeIn } from "@/components/effects/ScrollFadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollFadeIn>
          <ServicesSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <ThreatMonitorSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <SentinelXSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <AboutSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <TeamSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <ContactSection />
        </ScrollFadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
