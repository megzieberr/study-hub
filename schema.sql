-- ════════════════════════════════════════════════════════════
-- Study Hub — Supabase progress table
-- Run this once in your Supabase project: SQL Editor → New query → Run
-- ════════════════════════════════════════════════════════════

create table if not exists public.progress (
  user_id  uuid primary key references auth.users(id) on delete cascade,
  data     jsonb not null default '{}'::jsonb,
  updated  timestamptz default now()
);

alter table public.progress enable row level security;

-- A learner can only read/write their OWN row:
create policy "progress_select_own" on public.progress
  for select using (auth.uid() = user_id);

create policy "progress_insert_own" on public.progress
  for insert with check (auth.uid() = user_id);

create policy "progress_update_own" on public.progress
  for update using (auth.uid() = user_id);
