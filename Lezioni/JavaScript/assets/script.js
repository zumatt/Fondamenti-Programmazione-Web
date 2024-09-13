
//modifica contenuto
const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedì!";
console.log(elemento.innerHTML);




//aggiugnere attributi e eliminarli 

let i = 0;

function ilMioBottone(){
    

    if(i < 1)
    //generare contenuto
    const LaMiaVariabile = document.getElementsByClassName("genitore");
    console.log(LaMiaVariabile);
    const mioFiglio = LaMiaVariabile[0].appendChild(document.createElement("p"));
    mioFiglio.innerHTML = "sono nato";
    mioFiglio.setAttribute("class", "bellezza");
    mioFiglio.setAttribute("id", "primogenito");


}
