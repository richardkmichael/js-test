var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === 'complete') {
    console.log('Document ready.');
    clearInterval(readyStateCheckInterval);
  }
}, 2000);
