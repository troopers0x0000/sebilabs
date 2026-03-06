-- Create leads table for contact form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  service_interest TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  contacted BOOLEAN DEFAULT FALSE
);

-- Enable RLS (but allow anonymous inserts for the contact form)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public contact form)
CREATE POLICY "Anyone can submit leads" ON public.leads
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can read leads
CREATE POLICY "Only authenticated users can read leads" ON public.leads
  FOR SELECT USING (auth.uid() IS NOT NULL);
