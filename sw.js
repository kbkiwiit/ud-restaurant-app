const cacheID = 'fend-restaurant-app-01'
const cachedFiles = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/restaurant.html',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheID).then((cache) => {
      return cache.addAll(cachedFiles);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request, {ignoreSearch: true}).then((response) => {
        return response || fetch(event.request).then((response) => {
          const clonedResponse = response.clone();
          caches.open(cacheID).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch((error) => {
          console.error(error);
        });
      })
    );
  });