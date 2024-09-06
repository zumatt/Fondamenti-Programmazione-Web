//Metodo per leggere elementi tramite ID
const elementID = document.getElementById("descrizionePagina");
console.log(elementID);
elementID.innerHTML = "Descrizione pagina modificata con JavaScript";

//Metodo per leggere elementi tramite tag
const elementTag = document.getElementsByTagName("p");
console.log(elementTag);
console.log(elementTag[1]);
elementTag[1].setAttribute("class", "classeJs");

//Metodo per leggere elementi tramite classe
const elementClass = document.getElementsByClassName("classeJs");
console.log(elementClass);
console.log(elementClass[0].innerHTML);

//Metodo per aggiungere elemento
const elementDiv = document.getElementsByTagName("div");
const newElement = elementDiv[0].appendChild(document.createElement("p"));
newElement.setAttribute("id", "paragrafoNuovo");
newElement.innerHTML = "Nuovo elemento p aggiunto con JavaScript";

//Metodo per aggiornare un elemento
const elementUpdate = document.createElement("p");
elementUpdate.setAttribute("id", "paragrafoAggiornato");
elementUpdate.innerHTML = "Aggiornamento elemento con JavaScript";
elementDiv[0].replaceChild(elementUpdate, newElement);