function btnClick(element) {
    const body = document.getElementsByTagName("body");
    const newElement = body[0].appendChild(document.createElement("p"));
    
    newElement.innerHTML = "La finestra è larga " + window.innerWidth + "px e alta " + window.innerHeight + "px";
}

let newWindow;

function openWindow() {
    newWindow = window.open("https://github.com/zumatt/Fondamenti-Programmazione-Web-24",);
}

function closeWindow() {
    newWindow.close();
}