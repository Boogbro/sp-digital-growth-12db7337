import { useState } from "react";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import SystemProcess from "@/components/SystemProcess";
import ROICalculator from "@/components/ROICalculator";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen pt-0">
      <Navbar onBookClick={handleBookClick} />
      <Hero onBookClick={handleBookClick}>
        <LogoCarousel />
      </Hero>
      <SystemProcess />
      <GrowthInfrastructure />
      <ROICalculator />
      <FAQ onBookClick={handleBookClick} />
      <FinalCTA onBookClick={handleBookClick} />
      <Footer onBookClick={handleBookClick} />

      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Index;
