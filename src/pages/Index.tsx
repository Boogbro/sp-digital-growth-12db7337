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
// Import the new modal
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);

  return (
    <div className="min-h-screen pt-0">
      {/* Pass the open function to Navbar */}
      <Navbar onBookClick={openBooking} />
      
      {/* Pass the open function to Hero */}
      <Hero onBookClick={openBooking}>
        <LogoCarousel />
      </Hero>

      <SystemProcess />
      <GrowthInfrastructure />
      <ROICalculator />
      <FAQ />
      
      {/* Update FinalCTA to accept the prop if needed, or just wrap the button there too */}
      <FinalCTA onBookClick={openBooking} /> 
      
      <Footer />

      {/* The Modal sits here */}
      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Index;
