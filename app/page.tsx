import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-3";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";
import { TableDemographics } from "@/components/table";
import Specialization from "@/components/specialization";

export default function Home() {
  return (
    <div className="min-h-screen w-full">

      <HeroSection />
      <Specialization/>
      <Features />
      <TableDemographics/>
      <ContentSection />
      <ContactSection />
      <FooterSection />

    </div>

  );
}
