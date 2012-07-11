/*jslint indent: 2 */

(function () {

  'use strict';

  var intervalTimers = {},
    date = new Date(),
    time = date.getTime();

  function setupIntervalTimer(name) {

    intervalTimers[name] = setInterval(function () {
      if (document.readyState === 'complete') {
        console.log('Document ready.');
        clearInterval(intervalTimers[name]);
      }
    }, 2000);
  }

  setupIntervalTimer(time);

}());
