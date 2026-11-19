// Guarda la página y el lector para que abra rápido. Las llamadas a la planilla nunca se guardan.
var V = 'escaner-v7', ARCHIVOS = ['./', 'index.html', 'manifest.json', 'lib/zxing/reader.js', 'lib/zxing/zxing_reader.wasm'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(V).then(function (c) { return c.addAll(ARCHIVOS); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== V; }).map(function (x) { return caches.delete(x); })); })); self.clients.claim(); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function (r) { var c = r.clone(); caches.open(V).then(function (x) { x.put(e.request, c); }); return r; }).catch(function () { return caches.match(e.request); }));
});
