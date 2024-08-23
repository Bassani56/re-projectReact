// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Supabase URL ou Key não estão definidas');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  
