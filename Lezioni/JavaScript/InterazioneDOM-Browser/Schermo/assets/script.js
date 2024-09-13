//con questa operazione vado a riprendere un contenuto all'interno dell'html per poi farci un'interazione
const screenW = document.getElementById("screenW");
const screenH = document.getElementById("screenH");
const windowW = document.getElementById("windowW");
const windowH = document.getElementById("windowH");
const availableW = document.getElementById("availableW");
const availableH = document.getElementById("availableH");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

//richiamo il nome dell'elemento a cui voglio dare un'interazione.innerhtml metto = "inserisco il nome che voglio dare" + l'interazione che lui deve calcolare + px (in questo caso px perché va a calcolare roba dello schermo)
screenW.innerHTML = "The screeen width is: " + screen.width + "px";
screenH.innerHTML = "The screeen height is: " +  screen.height + "px";
windowW.innerHTML = "The window width is: " +  window.innerWidth + "px";
windowH.innerHTML = "The window height is: " +  window.innerHeight + "px";
availableW.innerHTML = "The available width is: " +  screen.availWidth + "px";
availableH.innerHTML = "The available height is: " +  screen.availHeight + "px";
colorDepth.innerHTML = "The color depth is: " +  screen.colorDepth;
pixelDepth.innerHTML = "The pixel depth is: " +  screen.pixelDepth;

function btnClick() {
    //questo è per fare l'interazione del bottone in modo che se schiccio mi si aggiornino tutte le info
    screenW.innerHTML = "The screeen width is: " + screen.width + "px";
    screenH.innerHTML = "The screeen height is: " +  screen.height + "px";
    windowW.innerHTML = "The window width is: " +  window.innerWidth + "px";
    windowH.innerHTML = "The window height is: " +  window.innerHeight + "px";
    availableW.innerHTML = "The available width is: " +  screen.availWidth + "px";
    availableH.innerHTML = "The available height is: " +  screen.availHeight + "px";
    colorDepth.innerHTML = "The color depth is: " +  screen.colorDepth;
    pixelDepth.innerHTML = "The pixel depth is: " +  screen.pixelDepth;
}
// const pippo = document.getElementById("windowW")

// pippo.innerHTML = "La larghezza della finestra è: " + window.innerWidth  + " pixels";