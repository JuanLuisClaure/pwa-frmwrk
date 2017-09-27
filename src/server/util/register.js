
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');


  window.addEventListener('load', function() {

    navigator.serviceWorker.register('./sw.js', {scope: '/'})
    .then((swReg) => {
      console.log('[SW] => ', swReg);
    })
    .catch((error) => {
      console.error('Service Worker Error', error);
    });

  });



} else {
  console.warn('Push messaging is not supported')
}
