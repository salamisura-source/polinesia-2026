// Service Worker Polinesia 2026
// Strategia: cache-first per gli asset, network-first per HTML (aggiornamenti)
const CACHE_NAME = 'polinesia-v22-2026-08-05';
const CORE_ASSETS = [
  './',
  './index.html',
  './report_polinesia_mobile.html',
  './report_polinesia_quotidiano.html',
  './guida_check_traghetti.html',
  './report_polinesia_agosto_2026.html',
  './viaggio_polinesia.ics',
  './manifest.json',
  './infografica_sanita.png',
];

// Install: pre-cache dei file core
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS).catch(() => {
        // Se qualche file non c'è, non fallire l'install
        return Promise.all(CORE_ASSETS.map((url) =>
          cache.add(url).catch(() => null)
        ));
      }))
      .then(() => self.skipWaiting())
  );
});

// Activate: pulisci vecchie cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first per HTML, cache-first per il resto
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Solo stesse origini
  if (url.origin !== self.location.origin) return;

  const isHTML = req.headers.get('accept')?.includes('text/html') || url.pathname.endsWith('.html');

  if (isHTML) {
    // Network-first per avere sempre l'ultima versione
    event.respondWith(
      fetch(req).then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match('./report_polinesia_mobile.html')))
    );
  } else {
    // Cache-first per il resto
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        });
      })
    );
  }
});
