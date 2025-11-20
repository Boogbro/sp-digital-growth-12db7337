import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import SystemProcess from "@/components/SystemProcess";
import ROICalculator from "@/components/ROICalculator";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pt-0">
      <Navbar />
      {/* Pass LogoCarousel as a child to Hero */}
      <Hero>
        <LogoCarousel />
      </Hero>
      <SystemProcess />
      <GrowthInfrastructure />
      <ROICalculator />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
