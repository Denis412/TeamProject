// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   "https://qgczlcboewmzhjxdbzhb.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY3psY2JvZXdtemhqeGRiemhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MjIyMTIsImV4cCI6MTk5NDA5ODIxMn0.5Fw_invGftgkQ2MUj2I2NuZ1-HDsnmrAeLZP_tSjpNY"
// );

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qgczlcboewmzhjxdbzhb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY3psY2JvZXdtemhqeGRiemhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MjIyMTIsImV4cCI6MTk5NDA5ODIxMn0.5Fw_invGftgkQ2MUj2I2NuZ1-HDsnmrAeLZP_tSjpNY";
export const supabase = createClient(supabaseUrl, supabaseKey);
