/*
const staticGlitterCurls = "Glitter-Curls"
const assets = [
  
  "/",
  "/index.html",
  "/About.html",
  "/appointment.html",
  "/MoreWork.html",
  "/services.html",
  "/T&C.html",
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


  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
  );