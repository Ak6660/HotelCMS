import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://xtuxlpxvwybiiihhwfga.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dXhscHh2d3liaWlpaGh3ZmdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MjE2MzAsImV4cCI6MjAxNjk5NzYzMH0.T89DXvzyW6MeDIAuXAotPbwMbkVixkf6m5g8BenmpMo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
