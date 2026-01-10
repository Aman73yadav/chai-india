import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SpecialOffers from "@/components/SpecialOffers";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Branches from "@/components/Branches";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <SpecialOffers />
      <Gallery />
      <Reviews />
      <Branches />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
