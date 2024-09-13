const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedì";
console.log(elemento.innerHTML);
let figli = 0;

//document.querySelector("#titolo");
//console.log(document.querySelector("h1"));

function ilMioBottone(){
    if(figli > 0){
        return "Chiudo i rubinetti"
    } else {

    }
    const LaMiaVariabile = document.getElementsByClassName("genitore");
    console.log(LaMiaVariabile);
    //LaMiaVariabile[0].appendChild(document.createElement("p"));
    const mioFiglio = LaMiaVariabile[0].appendChild(document.createElement("p"));
    mioFiglio.innerHTML = "sono nato";
    mioFiglio.setAttribute("classe", "bellezza");
    mioFiglio.setAttribute("id", "primogenito");
    figli++;
}

//ilMioBottone(); (chiami la funzione)

const bottoncino = document.getElementsByClassName("genitore");
bottoncino[0].addEventListener();