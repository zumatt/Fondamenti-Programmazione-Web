const tiolo = document.getElementById("titolo");
const data = document.getElementById("data");

const macDate = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerd`", "Sabato","Domenica"];
const numGiorno = macDate.getDay();

if(macDate.getDay() >=7){
titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1];
} else {
    titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1];
}

data.innerHTML =macDate.getDate() + "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();