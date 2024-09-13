// questo mi serve per poter cambiare un contenuto all'interno di un html 
const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon Giovedì!";
console.log(elemento.innerHTML);






let i = 0;
function ilMioBottone(){
    if(i > 0){
        return
    } else {
    const LaMiaVariabile = document.getElementsByClassName("genitore"); //prendi tutti gli elementi con classe genitore
    console.log(LaMiaVariabile); //controlliamo gli elementi che abbiamo che ora è uno solo
    const mioFiglio = LaMiaVariabile[0].appendChild(document.createElement("p"))  //con questo sto creando un figlio del genitore e tra parentesi gli diciamo chi è, in questo caso P
    mioFiglio.innerHTML = "sono nato"; //creazione del contenuto dell'elemento all'interno di genitore
    mioFiglio.setAttribute("class", "bellezza");
    mioFiglio.setAttribute("id", "primogenito");
    i++;
    }
}
//con "ilMioBottone();" dopo le stringhe sopra faccio partire la funzione, senza questo passo tutto il codice di sopra non mostrerà niente, una volta che inserisco onclick sull'html devo cancellarlo da qui altrimenti me ne mostra 2




const bottoncino = document.getElementsByid("bottone");
bottoncino[0].addEventListener("onmouseover", ilMioBottone);
