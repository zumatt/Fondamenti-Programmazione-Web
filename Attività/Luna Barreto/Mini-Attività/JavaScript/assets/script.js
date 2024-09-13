const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML="buon giovedì";
console.log(elemento.innerHTML);
let figli=0;

function ilMioBottone(){
    if(figli>1){
        return
    } else {
    const laMiaVariabile=document.getElementsByClassName("genitore");
    console.log(laMiaVariabile);
    const mioFiglio = laMiaVariabile[0].appendChild(document.createElement("p"));
    mioFiglio.innerHTML ="sono nato";
    mioFiglio.setAttribute("class","bellezza")
    mioFiglio.setAttribute("id","primogenito")
    figli ++;
}
}

