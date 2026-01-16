import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { 
  ArrowLeft, 
  Calendar, 
  Phone, 
  User, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  Loader2,
  RefreshCw
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  event_type: string;
  event_date: string;
  quantity: number;
  notes: string | null;
  status: string;
  created_at: string;
}

const statusOptions = [
  { value: "pending", label: "Pending", color: "bg-yellow-500" },
  { value: "contacted", label: "Contacted", color: "bg-blue-500" },
  { value: "confirmed", label: "Confirmed", color: "bg-green-500" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-500" },
  { value: "completed", label: "Completed", color: "bg-emerald-600" },
];

const eventTypeLabels: Record<string, string> = {
  corporate: "Corporate Event",
  festival: "Festival Celebration",
  birthday: "Birthday Party",
  wedding: "Wedding / Engagement",
  other: "Other Event",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isAdmin, isLoading: adminLoading } = useAdminCheck();
  const { toast } = useToast();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("bulk_order_enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
      toast({
        title: "Error",
        description: "Failed to load enquiries",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!adminLoading && isAdmin) {
      fetchEnquiries();
    }
  }, [adminLoading, isAdmin]);

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const { error } = await supabase
        .from("bulk_order_enquiries")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;

      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
      );

      toast({
        title: "Status Updated",
        description: `Enquiry status changed to ${newStatus}`,
      });
    } catch (err) {
      console.error("Error updating status:", err);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusOption = statusOptions.find((s) => s.value === status);
    return (
      <Badge className={`${statusOption?.color || "bg-gray-500"} text-white`}>
        {statusOption?.label || status}
      </Badge>
    );
  };

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <XCircle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
        <p className="text-muted-foreground mb-6">You don't have permission to view this page.</p>
        <Button onClick={() => navigate("/")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <Button onClick={fetchEnquiries} variant="outline" size="sm">
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </header>

      {/* Stats */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {statusOptions.map((status) => {
            const count = enquiries.filter((e) => e.status === status.value).length;
            return (
              <div
                key={status.value}
                className="bg-card rounded-xl p-4 border border-border"
              >
                <div className={`w-3 h-3 rounded-full ${status.color} mb-2`} />
                <p className="text-2xl font-bold text-foreground">{count}</p>
                <p className="text-sm text-muted-foreground">{status.label}</p>
              </div>
            );
          })}
        </div>

        {/* Enquiries Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Bulk Order Enquiries ({enquiries.length})
            </h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : enquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <MessageSquare className="w-12 h-12 mb-4 opacity-50" />
              <p>No enquiries yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Event Date</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enquiries.map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="w-3 h-3" />
                          {format(new Date(enquiry.created_at), "dd MMM, HH:mm")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 font-medium">
                            <User className="w-3 h-3" />
                            {enquiry.name}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            <a href={`tel:${enquiry.phone}`} className="hover:underline">
                              {enquiry.phone}
                            </a>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {eventTypeLabels[enquiry.event_type] || enquiry.event_type}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(enquiry.event_date), "dd MMM yyyy")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {enquiry.quantity} cups
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {enquiry.notes || "-"}
                      </TableCell>
                      <TableCell>{getStatusBadge(enquiry.status)}</TableCell>
                      <TableCell>
                        <Select
                          value={enquiry.status}
                          onValueChange={(value) => updateStatus(enquiry.id, value)}
                          disabled={updatingId === enquiry.id}
                        >
                          <SelectTrigger className="w-[130px]">
                            {updatingId === enquiry.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <SelectValue />
                            )}
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map((status) => (
                              <SelectItem key={status.value} value={status.value}>
                                {status.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
