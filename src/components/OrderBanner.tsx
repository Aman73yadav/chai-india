import { useState } from "react";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/Cart";
import { useOrders, openWhatsAppOrder } from "@/hooks/useOrders";

interface OrderBannerProps {
  items: CartItem[];
  onClearCart: () => void;
}

const OrderBanner = ({ items, onClearCart }: OrderBannerProps) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const { saveOrder } = useOrders();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = async () => {
    setIsOrdering(true);
    
    // Save order to database (if user is logged in)
    await saveOrder({ items, totalAmount: totalPrice });
    
    // Open WhatsApp
    openWhatsAppOrder(items, totalPrice);
    
    onClearCart();
    setIsOrdering(false);
  };

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-primary/30 shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {totalItems} {totalItems === 1 ? "item" : "items"} in cart
              </p>
              <p className="font-heading text-xl font-bold text-primary">₹{totalPrice}</p>
            </div>
          </div>
          
          <Button
            onClick={handleWhatsAppOrder}
            disabled={isOrdering}
            className="bg-[#25D366] hover:bg-[#20BA5C] text-white gap-2 px-6"
            size="lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">{isOrdering ? "Ordering..." : "Order Now"}</span>
            <span className="sm:hidden">{isOrdering ? "..." : "Order"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderBanner;
