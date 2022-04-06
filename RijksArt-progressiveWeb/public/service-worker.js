// Caching the pages
const cacheName = "version-5";
// Array of all the pages that I want to cashe
const contentToCache = ["/", "/script/app.js", "/style.css"];

// Call Install event
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Install");

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(contentToCache);
    })
  );
});

// Call Activate event
self.addEventListener("activate", (e) => {
  console.log("Service worker: Activated");
  // cleaning up old cache
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service worker: Cleaning old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// // Call Fetch event
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});
