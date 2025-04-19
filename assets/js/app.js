/*document.addEventListener("click", function() {
    let elem = document.documentElement;
    
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        }
    }
});*/

    let backPressCount = 0;

    async function showToast(message) {
      const toast = document.createElement('ion-toast');
      toast.message = message;
      toast.duration = 2000; // Durasi toast dalam milidetik
      document.body.appendChild(toast);
      await toast.present();
    }

    window.addEventListener('popstate', function(event) {
      if (backPressCount === 0) {
        backPressCount++;
        showToast('Press back again to exit.');
        history.pushState(null, null, location.href);
      } else {
        window.close();
      }
    });

    window.history.pushState(null, null, location.href);
