const staticCacheName = 'site-static-v1'
const dynamicCacheName = 'site-dynamic-v'
const assets = [
    '/',
    '/index.html',
    '/fallback.html',
    '/js/app.js',
    '/acc1/chapter1.html',
    '/css/reset.css',
    '/css/chapter.css'
 ];

//  cache size limit function

const limitCacheSize = (cacheName, size) => {
  caches.open(cacheName).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(cacheName, size))
      }
    })
  })
} 


// install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    )
})


// activate event
self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
        );
      })
    );
  });

// fetch event
self.addEventListener('fetch', event => {
  // // console.log('ok')
  // event.respondWith(
  //   caches.match(event.request).then(cacheRef => {
  //     return cacheRef || fetch(event.request).then( async fetchRes => {
  //       const cache = await caches.open(dynamicCacheName);
  //       cache.put(event.request.url, fetchRes.clone());
  //       limitCacheSize(dynamicCacheName, 20)
  //       return fetchRes;
  //     });
  //   }).catch( () => {
  //     if(event.request.url.indexOf('.html') > -1){
  //       return caches.match('/fallback.html')
  //     }
  //   })
  // );
});

