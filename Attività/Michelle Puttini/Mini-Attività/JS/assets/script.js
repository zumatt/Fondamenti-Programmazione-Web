const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedì";
console.log(elemento.innerHTML);
let figli = 0;

function ilMioBottone(){
    if(figli > 0){
        return 
    } else {
        const LaMiaVariabile = document.getElementsByClassName("genitore");
        console.log(LaMiaVariabile);
        const mioFiglio = LaMiaVariabile[0].appendChild(document.createElement("p"));
        mioFiglio.innerHTML = "sono nato";
        mioFiglio.setAttribute("class", "bellezza");
        mioFiglio.setAttribute("id", "primogenito");
        figli ++;
    }

}