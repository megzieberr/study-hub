/* ─────────────────────────────────────────────────────────────
   BACKGROUND PUSH CONFIG  (optional)
   Paste your VAPID PUBLIC key below to enable reminders that fire even
   when the app is fully closed. This also needs a tiny push server to
   send the reminders — see PUSH-SETUP.md.

   Leave blank to keep push dormant. The in-app study timer (start / break /
   finish notifications + confetti) works without any of this.
   ───────────────────────────────────────────────────────────── */
window.HUB_PUSH = { vapidPublicKey: "" };
