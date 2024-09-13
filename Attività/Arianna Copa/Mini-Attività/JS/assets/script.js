const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML= "Buon giovedì!";
console.log(elemento.innerHTML);
let i = 0;
let r = 1;

function ilmiobottone(){
    if(i < 1) {
        const lamiavariabile = document.getElementsByClassName("genitore");
        console.log(lamiavariabile);
        const miofiglio = lamiavariabile[0].appendChild(document.createElement("p"));
        console.log(miofiglio);
        miofiglio.innerHTML ="sono nato";
        miofiglio.setAttribute("class" ,"bellezza");
        miofiglio.setAttribute("id", "primogenito");
        
        console.log(document.querySelector(".descrizione"));
        i ++;
    }
}
