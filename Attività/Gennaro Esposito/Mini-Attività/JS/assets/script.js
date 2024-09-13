const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedi";
console.log(elemento.innerHTML);



function ilMioBottone() {
const laMiaVariabile = document.getElementsByClassName("genitore");
console.log(laMiaVariabile);
const mioFiglio = laMiaVariabile[0].appendChild(document.createElement("p"));
mioFiglio.innerHTML = "sono nato"
mioFiglio.setAttribute("class","bellezza");
mioFiglio.setAttribute("id","primogenito");

}
