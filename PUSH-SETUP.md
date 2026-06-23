# Background study reminders (push when the app is closed)

**What already works without any setup:** the in-app **study timer**. Open the ⏱️
button, start a session, and you get notifications for *start*, *break* and *finish*
(plus confetti) while the app is open or minimised. This covers most studying.

**What needs setup:** notifications that fire when the app is **fully closed** at a
scheduled time (e.g. "start studying at 16:00 tomorrow"). A static GitHub Pages site
cannot do this on its own — the browser needs a **push server** to wake the service
worker. This is the same reason Circle Quest's push is dormant until a key is set.

## To enable it you need two things

1. **A VAPID key pair** (public + private). Generate once, e.g. with the `web-push`
   CLI: `npx web-push generate-vapid-keys`.
2. **A small push server / serverless function** that:
   - stores each device's push subscription, and
   - sends a push at the scheduled study time (a cron / scheduled function).
   Free options: a Supabase Edge Function on a schedule, a Cloudflare Worker + Cron,
   or any tiny Node server with `web-push`.

## Wiring it up
- Paste the **public** VAPID key into [`push-config.js`](push-config.js).
- The service worker ([`sw.js`](sw.js)) already handles incoming `push` events and
  shows the notification — no change needed there.
- The app will then ask permission and subscribe; your server sends the reminder.

> When you are ready, give me the VAPID public key (and tell me which server option
> you want) and I will finish the subscribe + scheduling code and test it.
