import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, ArrowLeft, ShoppingBag, RefreshCw, Calendar, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useOrders } from "@/hooks/useOrders";
import { useCart } from "@/hooks/useCart";
import ThemeToggle from "@/components/ThemeToggle";
import { toast } from "sonner";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

interface Order {
  id: string;
  items: OrderItem[];
  total_amount: number;
  status: string;
  notes: string | null;
  created_at: string;
}

const MyOrders = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { getOrders } = useOrders();
  const { addItem } = useCart();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/");
      toast.error("Please sign in to view your orders");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      
      setLoading(true);
      const { data, error } = await getOrders();
      
      if (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to load orders");
      } else if (data) {
        setOrders(data as Order[]);
      }
      setLoading(false);
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  const handleReorder = (order: Order) => {
    order.items.forEach((item) => {
      addItem(item.name, item.price, item.category);
    });
    toast.success("Items added to cart!");
    navigate("/");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-600";
      case "pending":
        return "bg-yellow-500/20 text-yellow-600";
      case "cancelled":
        return "bg-red-500/20 text-red-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading text-lg font-bold text-foreground">My Orders</h1>
                <p className="text-xs text-muted-foreground">Order History</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-1/4 mb-4" />
                <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                <div className="h-3 bg-muted rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6">
              Your order history will appear here after you place your first order.
            </p>
            <Button onClick={() => navigate("/")} className="gap-2">
              <Coffee className="w-4 h-4" />
              Browse Menu
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm mb-6">
              {orders.length} {orders.length === 1 ? "order" : "orders"} found
            </p>
            
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {formatDate(order.created_at)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-xs px-2 py-1 rounded-full capitalize ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-primary">
                      ₹{order.total_amount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.items.length} {order.items.length === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="text-muted-foreground">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => handleReorder(order)}
                  className="w-full gap-2 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reorder
                </Button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyOrders;
