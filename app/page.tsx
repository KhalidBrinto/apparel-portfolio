import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-3";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";
import { TableDemographics } from "@/components/table";
import Specialization from "@/components/specialization";
import LenisComponent from "@/components/lenis";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <LenisComponent />
      <HeroSection />
      <Specialization/>
      <Features />
      <TableDemographics/>
      <Testimonials/>
      <ContentSection />
      <ContactSection />
      <FooterSection />

    </div>

  );
}
