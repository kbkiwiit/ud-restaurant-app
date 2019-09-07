// credit to Doug Brown for this.

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {scope: "/"}).then(reg => {
        console.log('service worker registered: ' + reg.scope);
      }).catch(error => {
          console.log('registration failed: ' + error);});
  }