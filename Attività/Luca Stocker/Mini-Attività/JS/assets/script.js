const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedì";
console.log(elemento.innerHTML);
let i = 0;

function ilMioBottone(){
    if(i < 1){
        const laMiaVariabile = document.getElementsByClassName("genitore");
        console.log(laMiaVariabile);
        const mioFiglio = laMiaVariabile[0].appendChild(document.createElement("p"));
        mioFiglio.innerHTML = "siamo la NATO";
        mioFiglio.setAttribute("class","bellezza");
        mioFiglio.setAttribute("id","primogenito");
        i ++;
    }    
}

const bottoncino = document.getElementById("bottone");
bottoncino.addEventListener("click", ilMioBottone);