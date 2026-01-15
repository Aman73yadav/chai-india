import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SpecialOffers from "@/components/SpecialOffers";
import BulkOrders from "@/components/BulkOrders";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import SuccessStories from "@/components/SuccessStories";
import MeetTheTeam from "@/components/MeetTheTeam";
import Branches from "@/components/Branches";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";
import OrderBanner from "@/components/OrderBanner";
import AIChatBot from "@/components/AIChatBot";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { items, addItem, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header 
        cartItems={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
      <Hero />
      <Menu onAddToCart={addItem} />
      <SpecialOffers />
      <BulkOrders />
      <Gallery />
      <Reviews />
      <SuccessStories />
      <MeetTheTeam />
      <Branches />
      <About />
      <Footer />
      <OrderBanner items={items} onClearCart={clearCart} />
      <AIChatBot />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

export default Index;
