"use strict";

var cacheName = 'v2';
var cacheFiles = ['./'];
self.addEventListener('install', function (e) {
  console.log('[SW] Installed', e);
  e.waitUntil(caches.open(cacheName).then(function (cache) {
    cache.addAll(cacheFiles);
  }));
});
self.addEventListener('activate', function (e) {
  console.log('[SW] activated', e);
  e.waitUntil(caches.keys().then(function (cacheNames) {
    Promise.all(cacheNames.map(function (eachItem) {
      if (eachItem !== cacheName) {
        caches.delete(eachItem);
      }
    }));
  }));
});
self.addEventListener('fetch', function (e) {
  console.log('[SW] Fetching', e.request.url);
}); // var CACHE_NAME = 'dependencies-cache';
//
//
// var REQUIRED_FILES = [
//   '/'
// ];
//
// self.addEventListener('install', function(event) {
//
//
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//
//         console.log('[install] Caches opened, adding all core components' +
//           'to cache');
//         return cache.addAll(REQUIRED_FILES);
//       })
//       .then(function() {
//         console.log('[install] All required resources have been cached, ' +
//           'we\'re good!');
//         return self.skipWaiting();
//       })
//   );
// });
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//
//
//         if (response) {
//           console.log(
//             '[fetch] Returning from ServiceWorker cache: ',
//             event.request.url
//           );
//           return response;
//         }
//
//         console.log('[fetch] Returning from server: ', event.request.url);
//         return fetch(event.request);
//       }
//     )
//   );
// });
// self.addEventListener('activate', function(event) {
//   console.log('[activate] Activating ServiceWorker!');
//
//   console.log('[activate] Claiming this ServiceWorker!');
//   event.waitUntil(self.clients.claim());
// });