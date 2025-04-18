import { DB_SUPABASE_API_KEY, DB_SUPABASE_API_URL } from "../../config/env.config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(DB_SUPABASE_API_URL, DB_SUPABASE_API_KEY);
export { supabase };