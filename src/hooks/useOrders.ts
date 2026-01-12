import { supabase } from "@/integrations/supabase/client";
import { CartItem } from "@/components/Cart";
import { toast } from "sonner";

interface OrderData {
  items: CartItem[];
  totalAmount: number;
}

export const useOrders = () => {
  const saveOrder = async (orderData: OrderData): Promise<{ success: boolean; orderId?: string }> => {
    try {
      // Check if user is logged in
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        // User not logged in - order will still be placed via WhatsApp but not saved
        return { success: true };
      }

      // Save order to database
      const { data, error } = await supabase
        .from("orders")
        .insert([{
          user_id: user.id,
          items: orderData.items as unknown as import("@/integrations/supabase/types").Json,
          total_amount: orderData.totalAmount,
          status: "pending",
        }])
        .select()
        .single();

      if (error) {
        console.error("Error saving order:", error);
        toast.error("Order placed but couldn't save to history");
        return { success: true }; // Still return success since WhatsApp order will work
      }

      toast.success("Order saved to your history!");
      return { success: true, orderId: data.id };
    } catch (error) {
      console.error("Error saving order:", error);
      return { success: true }; // Still allow WhatsApp order
    }
  };

  const getOrders = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { data: null, error: new Error("Not authenticated") };
    }

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    return { data, error };
  };

  return { saveOrder, getOrders };
};

export const openWhatsAppOrder = (items: CartItem[], totalPrice: number) => {
  const phoneNumber = "918310698938";
  let message = "🍵 *New Order from Chai India Website*\n\n";
  message += "*Order Details:*\n";
  message += "─────────────────\n";
  
  items.forEach((item) => {
    message += `• ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}\n`;
  });
  
  message += "─────────────────\n";
  message += `*Total: ₹${totalPrice}*\n\n`;
  message += "Please confirm my order. Thank you! 🙏";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};
