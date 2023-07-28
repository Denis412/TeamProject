import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rknojxtpjwcckodbfjju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrbm9qeHRwandjY2tvZGJmamp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1MzUyNjAsImV4cCI6MjAwNjExMTI2MH0.YQtcaX-wyD-8OAznFm85lcnfiwAF8E4v6JqBkJ6AxQs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
