const titolo = document.getElementById("titolo");
const data = document.getElementById("data");
let macData = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdi", "Sabato", "Domenica"];
const numGiorno = macData.getDay();

//questo lo abbiamo fatto per far si che ogni giorno si aggiornasse con il giorno giusto e il giusto buon
// if(numGiorno >= 7){
//     titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1];
// } else {
//     titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1];
// }

data.innerHTML = macData.getDate() + "/" + (macData.getMonth()+1) + "/" + macData.getFullYear();



