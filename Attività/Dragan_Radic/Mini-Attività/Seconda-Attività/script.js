const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon gion giorno";
console.log(elemento.innerHTML);
let i = 0;






function ilMioBottone(){
    if(i < 1){
        const laMiaVariabile = document.getElementsByClassName("genitore");
        console.log(laMiaVariabile);
        const mioFiglio = laMiaVariabile[0].appendChild(document.createElement("p"));
        mioFiglio.innerHTML = "sono nato";
        mioFiglio.setAttribute("class", "bellezza");
        mioFiglio.setAttribute("id","primogenito");
        i ++;
    } 
}

const bottoncino = document.getElementById("bottone");
bottoncino.addEventListener("click", ilMioBottone);