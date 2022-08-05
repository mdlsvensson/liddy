import { writable, type Writable } from "svelte/store";

import type { User as SupabaseUser } from "@supabase/supabase-js";
import type { User, Tooltip } from "$lib/types";

export const supabaseUser: Writable<SupabaseUser> = writable();

export const user: Writable<User> = writable();

export const tooltip: Writable<Tooltip> = writable({
  isVisible: false,
});