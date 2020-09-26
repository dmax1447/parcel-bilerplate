var lastTime = (new Date()).getTime();
var checkInterval = 2000;

setInterval(function () {
  var currentTime = (new Date()).getTime();

  if (currentTime > (lastTime + checkInterval * 2)) {
    postMessage("wakeup");
  }

  lastTime = currentTime;
}, checkInterval);