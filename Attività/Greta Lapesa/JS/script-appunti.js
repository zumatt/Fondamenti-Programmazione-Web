//tipologie di variabili: numeri, testo o "liste"
let a = 0; //0
//i log sono qualcosa che ci permette di tenere traccia
console.log(testo + a);

//c'è una tipologia di variabile o costante che con un unico valore ci permette di avere valori multipli, valori diversi
// si chiama Array, utilizzato come lista, sai che il valore b contiene differenti infotmazioni. se si vuole stampare inlogo 
let b= ["ciao", "come", "stai?"];
console.log(b[2]);
//allora, quando vogliamo vedere nella console un dei volori della variabile, inserisci log (a[0,1,2,3,4,......])
//b.lenght è il numero di tutti gli elementi prensenti all'interno 
//questi sono calcoli di variabili, semplificati, quando si quando si aggiorna il valore di (a), rimane aggiornata nei calcoli. Si possono fare anche in negativo


a = a + 1; //1
a += 2; //1+2=3
a++; //3+1=4

let a= 0;
a += 3;
//if= se 
if(a == 3) { 
    console.log("vero")
}; else {
    console.log("falso")
};

if(a < 3)  {
    console.log("vero")
}; else {
    console.log("falso")
};


//condizione in cui entrambe devono essere &&
if(a > 3 && a == 3)

//condizione in cui deve essere o una oppure l'altra ||
if(a > 3 || a == 3)

// se voglio aggiungere una altra opzione (3) add else if
if (a > 3) {
    console.log("sono maggiore di 3");
} else if (a < 3) {
    console.log("sono minore di 3");
} else if (a == 3) {
    console.log("sono uguale a 3");
} else {
    console.error("la condizione è errara");
}

//ciclo for, ci permette di fare delle azioni ripetute
let a = 0;

for(let i = 0; i < 10; i++){ 
    console.log(i);
    a+=i
    console.log(a)
}
// in questo caso, fara i calcoli per il for mostrandoci i e poi sommera a+i


// mezzo tra for e if, finchè questa condizione è vera, fai quello che viene dichiarato.
// finchè l'utente non clicca su qualcosa, non fare niente, finchè l'utente non clicca qualcosa, quando clicca fai qualcosa
while (a <= 10){
    a++;
    console.log("a")
}



//siccome la classe continee + contenuti io devo dire quale voglio che venfa selezionato e cambiato
const elemento = document.getElementById("titolo");
//in questo modo sto salvando solo il contenuto del mio html
console.log(elemento.innerHTML)
//in questo modo ti mostra solo il il contenuto dell'elemento
elemento.innerHTML ="Buon Giovedì"
console.log(elemento.innerHTML)