var CACHE = 'cnc-checklist-v2';
var PRECACHE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './vendor/html2pdf.bundle.min.js', './vendor/sql-wasm.js', './vendor/sql-wasm.wasm'];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (cache) {
    return Promise.allSettled(PRECACHE.map(function (u) { return cache.add(u); }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(caches.open(CACHE).then(function (cache) {
    var isNav = req.mode === 'navigate';
    return cache.match(req, { ignoreSearch: isNav }).then(function (cached) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
        return res;
      }).catch(function () { return null; });
      if (cached) { e.waitUntil(net); return cached; }
      return net.then(function (res) {
        if (res) return res;
        if (isNav) return cache.match('./index.html').then(function (r) { return r || cache.match('./'); }).then(function (r) { return r || Response.error(); });
        return Response.error();
      });
    });
  }));
});
