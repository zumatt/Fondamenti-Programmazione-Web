const titolo = document.getElementById("titolo");
const data = document.getElementById("data");
const macDate = new Date();
const giorniSettimana = ["Lunedì","Martedì","Mercoledì", "Giovedì","Venerdì","Sabato", "Domenica"];
const numGiorno = macDate.getDay();


if(numGiorno >= 7){
    titolo.innerHTML= "Buona " + giorniSettimana[numGiorno-1];
} else {
    titolo.innerHTML= "Buon " + giorniSettimana[numGiorno-1];
}

data.innerHTML = macDate.getDate()+ "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();

