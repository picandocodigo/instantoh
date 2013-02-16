function bindEvent(element, type, handler) {
  if(element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else {
    element.attachEvent('on'+type, handler);
  }
}

bindEvent(document.getElementById("play"), 'click', function(){
  document.getElementById("audio").play();
});

bindEvent(document.getElementById("mozilla_app"), 'click', function(){
  var request = navigator.mozApps.install("http://instantohthehumanity.com/app.webapp");
  request.onsuccess = function() {
    alert("App installed");
  };
  request.onerror = function() {
    alert(this.error.name);
  };
});
