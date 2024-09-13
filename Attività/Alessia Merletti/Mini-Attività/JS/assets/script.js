const elemento = document.getElementById("titolo");
console.log (elemento.innerHTML);
elemento.innerHTML = "buon giovedì";
console.log(elemento.innerHTML);
let i = 0;





function ilMiobottone(){
    
    if(i < 1){
       
    const contenitore = document.getElementsByClassName("genitore");
    console.log(contenitore);
    const mioFiglio = contenitore[0].appendChild(document.createElement("p"));
    mioFiglio.innerHTML = "sono nato"
    mioFiglio.setAttribute("class", "bellezza");
    mioFiglio.setAttribute("id", "primogenito");
    i ++;
    }
} 
