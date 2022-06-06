const staticGlitterCurls = "Glitter-Curls"
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/main.js",
  "/images/anjum.webp",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGlitterCurls).then(cache => {
      cache.addAll(assets)
    })
  )
})

/*
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res// || fetch(fetchEvent.request);
      })
    );
  });
  */