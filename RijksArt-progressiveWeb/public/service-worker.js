// Caching the pages
const cacheName = "version-3";
 // array of all the pages that I want to cashe
const contentToCache = ['/','/script/app.js','/style.css'];
 
// Call Install event
self.addEventListener("install", (e) => {
  console.log("Service worker: Installed");

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker: Caching Files(cacheAssets)");
      return cache.addAll(contentToCache);
    })
  );
});

// Call Activate event
self.addEventListener("activate", (e) => {
  console.log("Service worker: Activated");
  // cleaning up old cache
  e.waitUntil(
    cashes.keys().then((cacheNames) => {
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
    caches.match(e.request).then(() => {
      return fetch(e.request).then((response) => {
        return caches.open(cacheName).then((cache) => {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
