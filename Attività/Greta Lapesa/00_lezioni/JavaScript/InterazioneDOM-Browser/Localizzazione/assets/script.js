const windowHref = document.getElementById("windowHref");
const windowHostName = document.getElementById("windowHostName");
const windowPathName = document.getElementById("windowPathName");
const windowProtocol = document.getElementById("windowProtocol");

windowHref.innerHTML = "The url is: " + window.location.href;
windowHostName.innerHTML = "The domain is: " +  window.location.hostname;
windowPathName.innerHTML = "The path and filename is: " +  window.location.pathname;
windowProtocol.innerHTML = "The web protocol used is: " +  window.location.protocol;