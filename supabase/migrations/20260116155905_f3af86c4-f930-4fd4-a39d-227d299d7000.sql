-- Create table for bulk order enquiries
CREATE TABLE public.bulk_order_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  quantity INTEGER NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bulk_order_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert enquiries (public form)
CREATE POLICY "Anyone can submit enquiries"
ON public.bulk_order_enquiries
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins would view enquiries (for now, restrict select)
-- We'll keep this restrictive - admins can query via Supabase dashboard
CREATE POLICY "No public read access"
ON public.bulk_order_enquiries
FOR SELECT
USING (false);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_bulk_order_enquiries_updated_at
BEFORE UPDATE ON public.bulk_order_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();