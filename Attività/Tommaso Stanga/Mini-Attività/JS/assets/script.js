const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedì!";
console.log(elemento.innerHTML);
let figli = 0;


function ilmiobottone(){
    if(figli > 0){
        return
    } else {
        const contenitore = document.getElementsByClassName("genitore");
        console.log(contenitore);
        const miofiglio = contenitore[0].appendChild(document.createElement("p"));
        miofiglio.innerHTML = "sono nato";
        miofiglio.setAttribute("class", "bellezza");
        miofiglio.setAttribute("id", "primogenito");
        figli ++;
    }
}

const bottoncino = document.getElementsByClassName("genitore");
bottoncino.addEventListener("click", ilmiobottone);