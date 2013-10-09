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

window.onload = function(){
  if (navigator.mozApps){
    html = " | <a href=\"#\" id=\"mozilla_app\">Install on Mozilla Marketplace</a>"
    document.getElementById("install").innerHTML = html

    bindEvent(document.getElementById("mozilla_app"), 'click', function(){
      var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/package.webapp";
      var installApp = navigator.mozApps.installPackage(manifestURL);

      request.onsuccess = function() {
        alert("App installed");
      };
      request.onerror = function() {
        alert(this.error.name);
      };
    });
  }
};
