/* ─────────────────────────────────────────────────────────────
   CLOUD SYNC CONFIG  (optional)
   Paste your Supabase project URL + anon (public) key below to turn on
   cloud progress sync across devices. See SETUP-CLOUD.md for the steps.

   Until you fill these in, the app works perfectly — it just stores all
   progress on this device only (localStorage). The anon key is safe to put
   here: it is a public key, protected by row-level security in Supabase.
   ───────────────────────────────────────────────────────────── */
window.HUB_SUPABASE = {
  url: "https://YOUR-PROJECT.supabase.co",
  anonKey: "YOUR-ANON-PUBLIC-KEY"
};
