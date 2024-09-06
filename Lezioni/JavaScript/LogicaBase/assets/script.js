//Variabile di tipologia costante
const a = 10;
const b = [1, 2, 3, 4, 5];
const testo = "La condizione ";

//Variabile di tipologia variabile
let d = 20;
let e = 10;

//Calcoli semplici con le variabili
const c = a + b[0];
console.log(a + " + " + b[0] + " = " + c);
console.log("d = " + d);
d += d;
console.log("d += d è uguale a " + d);

//Condizioni
if (a > 5) {
    console.log(testo + "a > 5" + " è vera");
}

if (b.length > 3) {
    console.log(testo + "b.length > 3" + " è vera");
}

//Condizioni composte
    //b.lenght indica la lunghezza dell'array
if (a > 5 && b.length < 3) {
    console.log(testo + "a > 5 e b.length > 3" + " è vera");
} else {
    console.log(testo + "a > 5 e b.length > 3" + " è falsa");
}

if (a > 20 || b.length < 3) {
    console.log(testo + "a > 20 o b.length < 3" + " è vera");
} else if (a < 20 || b.length < 3) {
    console.log(testo + "a < 20 o b.length < 3" + " è vera");
}

//Cicli for
for (let i = 0; i < 10; i++) {
    console.log("Ciao questo è la ripetizione numero " + i);
}

for (let i = 0; i < b.length; i++) {
    console.log("b[" + i + "] = " + b[i]);
}

//Ciclo while
while (e < 100) {
    console.log("In questo passaggio il valore di e è uguale a " + e);
    e *= 2;
}