const screenW = document.getElementById("screenW");
const screenH = document.getElementById("screenH");
const windowW = document.getElementById("windowW");
const windowH = document.getElementById("windowH");
const availableW = document.getElementById("availableW");
const availableH = document.getElementById("availableH");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

screenW.innerHTML = "The screeen width is: " + screen.width + "px";
screenH.innerHTML = "The screeen height is: " +  screen.height + "px";
windowW.innerHTML = "The window width is: " +  window.innerWidth + "px";
windowH.innerHTML = "The window height is: " +  window.innerHeight + "px";
availableW.innerHTML = "The available width is: " +  screen.availWidth + "px";
availableH.innerHTML = "The available height is: " +  screen.availHeight + "px";
colorDepth.innerHTML = "The color depth is: " +  screen.colorDepth;
pixelDepth.innerHTML = "The pixel depth is: " +  screen.pixelDepth;

function btnClick() {
    screenW.innerHTML = "The screeen width is: " + screen.width + "px";
    screenH.innerHTML = "The screeen height is: " +  screen.height + "px";
    windowW.innerHTML = "The window width is: " +  window.innerWidth + "px";
    windowH.innerHTML = "The window height is: " +  window.innerHeight + "px";
    availableW.innerHTML = "The available width is: " +  screen.availWidth + "px";
    availableH.innerHTML = "The available height is: " +  screen.availHeight + "px";
    colorDepth.innerHTML = "The color depth is: " +  screen.colorDepth;
    pixelDepth.innerHTML = "The pixel depth is: " +  screen.pixelDepth;
}