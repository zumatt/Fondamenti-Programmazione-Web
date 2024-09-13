const elemento= document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon Giovedì";
console.log(elemento.innerHTML);
let figli = 0



function ilMioBottone(){
    if(figli < 1){
const contenitore = document.getElementsByClassName("genitore");
    console.log(contenitore);
    const mioFiglio = contenitore[0].appendChild(document.createElement("p"));
    mioFiglio.innerHTML = "👺"
    mioFiglio.setAttribute("class", "bellezza")
    mioFiglio.setAttribute("id", "puzza")
    figli++
    }
}

