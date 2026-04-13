import { createClient } from '@supabase/supabase-js';

// IMPORTANT: We do NOT use the supabase.co URL here. 
// We are routing traffic cleanly through our API Gateway (NGINX).
// NGINX will catch requests to `/api/db`, rewrite them, and proxy them securely to Supabase.
const supabaseUrl = '/api/db';

// This is the public anonymous key. It is safe to expose in the frontend because 
// Row Level Security (RLS) protects the actual data.
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseAnonKey) {
  console.warn("Missing VITE_SUPABASE_ANON_KEY. Please ensure your .env file is set up.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
