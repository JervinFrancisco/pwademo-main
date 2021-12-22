//Service workers get installed once in their life cycle
self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./index.html","./contact.html", "./calendar.html","./src/index.js", "./src/master.css", "./images/logo192.png", "./firebase-messaging-sw.js"])
        })
    )
})

self.addEventListener("fetch", e =>{
   e.respondWith(
       caches.match(e.request).then(response =>{
           return response || fetch(e.request)
       })
   )
})