import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xspijymsbfssuhslltnx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzcGlqeW1zYmZzc3Voc2xsdG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzNzU1ODcsImV4cCI6MTk4OTk1MTU4N30.TF6MSF-_UcGdClpCy6G07xlVofj3gjOS6hTUNUhNrgU";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase