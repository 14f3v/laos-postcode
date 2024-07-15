import { createClient } from '@supabase/supabase-js';
export default (env = {} as any) => createClient(env.SUPABASE_URL, env.SUPABASE_KEY);