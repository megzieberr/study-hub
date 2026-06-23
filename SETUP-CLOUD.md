# Turn on cloud sync (Supabase)

The hub works fully without this — progress is saved on each device. Follow these
steps to also **sync her progress across devices** (phone + laptop) and survive a
device wipe. Takes ~5 minutes.

## 1. Create a Supabase project
1. Go to https://supabase.com → sign in → **New project**.
2. Give it a name (e.g. `study-hub`) and a database password. Wait for it to provision.

## 2. Create the progress table
1. In the project, open **SQL Editor → New query**.
2. Paste the contents of [`schema.sql`](schema.sql) and click **Run**.

## 3. Use simple username + password (no email confirmation)
1. Go to **Authentication → Providers → Email** and make sure **Email** is enabled.
2. Go to **Authentication → Sign In / Providers** (or **Settings**) and **turn OFF
   "Confirm email"** — so she can sign in instantly with just a username + password.
   (The app turns her username into `username@studyhub.local` behind the scenes.)

## 4. Paste your keys into the app
1. In the project, open **Project Settings → API**.
2. Copy the **Project URL** and the **anon / public** key.
3. Open [`supabase-config.js`](supabase-config.js) and paste them in:
   ```js
   window.HUB_SUPABASE = {
     url: "https://abcd1234.supabase.co",
     anonKey: "eyJhbGciOi...your anon key..."
   };
   ```
4. Save, then `git add -A && git commit -m "Enable cloud sync" && git push`.

## 5. Done
Open the app → **Cloud Sync** tile → create an account (username + password) once,
then sign in on any device to sync. The anon key is safe to commit: it is public and
protected by row-level security (each learner only sees her own row).

> Tell me once the keys are in and I'll verify the sync end-to-end.
