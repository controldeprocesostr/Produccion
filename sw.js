self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("erp-cache").then(function (cache) {
      return cache.addAll(["./", "./Temple.html"]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
