/* Study Hub service worker — offline cache + (dormant) push */
var CACHE = 'studyhub-v1';
var ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Network-first so deploys update; falls back to cache when offline */
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { try { c.put(req, copy); } catch (_) {} });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (c) { return c || caches.match('./index.html'); });
    })
  );
});

/* Push — fires reminders even when the app is closed. Dormant until a push
   server + VAPID key are configured (see PUSH-SETUP.md). */
self.addEventListener('push', function (e) {
  var d = { title: 'Study Hub', body: 'Time to study! 📚' };
  try { if (e.data) d = Object.assign(d, e.data.json()); } catch (_) {}
  e.waitUntil(self.registration.showNotification(d.title, {
    body: d.body, icon: 'icon-192.png', badge: 'icon-192.png', vibrate: [120, 60, 120]
  }));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(function (cl) {
    for (var i = 0; i < cl.length; i++) { if ('focus' in cl[i]) return cl[i].focus(); }
    if (self.clients.openWindow) return self.clients.openWindow('./');
  }));
});
