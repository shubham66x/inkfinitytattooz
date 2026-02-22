import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PromiseSection from "@/components/PromiseSection";
import ProcessSection from "@/components/ProcessSection";
import ArtistSection from "@/components/ArtistSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PromiseSection />
      <ProcessSection />
      <ArtistSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ValuesSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
