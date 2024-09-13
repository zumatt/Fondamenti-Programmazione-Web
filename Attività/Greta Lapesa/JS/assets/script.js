const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon Giovedì";
console.log(elemento.innerHTML);
let figli= 0;


const contenitore =document.getElementsByClassName("genitore");
console.log(contenitore);
const paragrafo = document.createElement

//creazione funzione per fare una interazione tra html, css, js
function ilMioBottone(){
    //creazione nuovo elemento
    if(figli > 0){
        return
    } else {
        const laMiaVariabile = document.getElementsByClassName("genitore");
        console.log(laMiaVariabile);
        //appendchild agg figlio
        const mioFiglio= laMiaVariabile[0].appendChild(document.createElement("p"));
        mioFiglio.innerHTML= "sono nato";
        mioFiglio.setAttribute("class", "bellezza");
        mioFiglio.setAttribute("id", "primogenito ti odio")
        figli ++;
    }
   
}
 
const bottoncino= document.getElementById("bottone");
bottoncino.addEventListener("click", ilMioBottone);

//per attivare la funzione sopra, fare così si richiama la funzuone 
//ilMioBottone();