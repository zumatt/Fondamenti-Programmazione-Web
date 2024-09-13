let a = 0;
let b = ["ciao", "come", "stai?"]; 

a = a + 1;
a += 2;
a++;

console.log(testo + a);



//console.log ci permette di tenere traccia di quello che facciamo, ti mostra i risultati in console
//console.error ti serve per far controllare alla console sul browser l'errore e la console ti dice qual'è e in che riga trovarlo, puoi usare anche control.warning

//Array è una variabile che contiene tanti valori, una lista di cose 
//in console se vuoi vedere un sola componente dell'array devi mettere "console.log(b[1]" b= al nome che hai dato all'array e 1 è il numero del valore che vuoi vedere, ricordarsi che il primo è sempre 0 quindi se ti dice che l'array ha 8 valori, l'ultimo sarà il 7
//console.log(b[b.length-1]) == per sapere quanti valori ci sono all'interno dell'arry B 

//option 5 parentesi []

let a = 0;

a+=3;

if (a = 3 && ) {
    console.log("vero")
} else { 
    console.log("falso")
};


// metti due uguali perché se ne metti una sola diventa una nuova variabile
//le condizioni possono essere A uguale, maggiore, minore di qualcosa
// se a una condizione aggiungi && ( che vuole dire questo E quello) puoi mettere 2 consizioni in una sola stringa, ma qui entrambe devono essere vere per dare vero
// se a una consizione aggiungi || ( che vuole dire questo O quello) puoi mettere 2 condizioni in una sola stringa, qui può essere vero anche se una delle due condizioni non è vera
// per mettere || devi fare option 7

let a = 0;

a+=3;

if (a > 3) {
    console.log("sono maggiore!")
} else if (a < 3) { 
    console.log("sono minore!")
} else if (a ==3) {
    console.log("sono 3!")
} else {
    console.error("la condizione è errata")
};

//per avere due risposte prima di dire che è un errore devi fare come si vede qui sopra
//se metti gli if separati il codice leggerà tutto e ti darà una risposta per ogni if, se inceve ci metti else e la prima risposta dovesse essere corretta non continuerà a leggere nonostante anche la seconda risposta possa essere vera

//ciclo for ci permette di fare delle azioni ripetute 
// dichiari la variabile; finché non raggiunge bla bla; continua a fare una cosa quindi i++

let a = 5;

for(let i = 0; i < 10; i+=1;) {
    console.log(i)
    a+=1;
    console.log(a)
}

//i while loop possono essere infiniti, se non controlliamo il risultato il computer di chi apre la nostra pagina potrebbe andare in pappa e non caricare

let a = 5;
let b = ["matite", "scrivania", "pennarelli"];

for (let i = 0; i <=2; i1=1){
    console.log(b[i]);
}


//while è un mezzo tra for e if, e dice "finché questa condizione è vera continua a farlo", finché l'utente non tocca qualcosa non fare niente oppure finché l'utente tocca qualcosa che sia vero e allora agisci 
// attenzione con i while perché se fatti male ti possono impallare il pc, perché hai meno controllo rispetto ai for e quindi il pc va avanti all'inifinito se non metti le cose giuste
while (a <=10){
    a++;
    console.log()
}

//non è importante se è i o c perché noi decidiamo come chiamare la variabile
//3 elementi da mettere all'interno del for: l'inizio ,fino a, l'incremento

//differenza tra for e while: il for decido io ogni cosa, tutto il percorso. il while gli dico solo dove fermarsi

// Let e Const sono due variabili, ma const è una variabile costante




//???
const heading = document.getElementsById(titolo);
console.log(heading);


//innerHTML -- questo mi permette di vedere solo il contenuto del testo 
//innerhtml o innertext - la differenza è che innerhtml prende tutto, che sia testo, foto o video, se scelto innertext devo essere sicuro che all'interno ci sia solo un testo
const elementi = document.getElementsByClassName("descrizione");
elementi[0]
console.log(elementi[0].innerHTML)




// questo mi serve per poter cambiare il testo all'interno di un html 
const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon Giovedì!";
console.log(elemento.innerHTML);

//per creare un nuovo elemento 
const LaMiaVariabile = document.getElementsByClassName("genitore"); //prendi tutti gli elementi con classe genitore
console.log(LaMiaVariabile); //controlliamo gli elementi che abbiamo che ora è uno solo
const mioFiglio = LaMiaVariabile[0].appendChild(document.createElement("p"))  //con questo sto creando un figlio del genitore e tra parentesi gli diciamo chi è, in questo caso P
mioFiglio.innerHTML = "sono nato"; //creazione del contenuto dell'elemento all'interno di genitore
mioFiglio.setAttribute("class", "bellezza");
mioFiglio.setAttribute("id", "primogenito");



//creo una funzione e quindi una animazione di un bottone
//ilMioBottone sarà il nome della mia funzione
function ilMioBottone(){
    const LaMiaVariabile = document.getElementsByClassName("genitore"); //prendi tutti gli elementi con classe genitore
    console.log(LaMiaVariabile); //controlliamo gli elementi che abbiamo che ora è uno solo
    const mioFiglio = LaMiaVariabile[0].appendChild(document.createElement("p"))  //con questo sto creando un figlio del genitore e tra parentesi gli diciamo chi è, in questo caso P
    mioFiglio.innerHTML = "sono nato"; //creazione del contenuto dell'elemento all'interno di genitore
    mioFiglio.setAttribute("class", "bellezza");
    mioFiglio.setAttribute("id", "primogenito");
}
//con "ilMioBottone();" dopo le stringhe sopra faccio partire la funzione, senza questo passo tutto il codice di sopra non mostrerà niente, una volta che inserisco onclick sull'html devo cancellarlo da qui altrimenti me ne mostra 2


//faccio la stessa cosa del bottone ma con questo codice non avrò mille figli, ma ne avrò solo uno
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




