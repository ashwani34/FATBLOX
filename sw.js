self.addEventListener('fetch', function(event) {
  // This is a minimal service worker to make the app installable
  event.respondWith(fetch(event.request));
});
