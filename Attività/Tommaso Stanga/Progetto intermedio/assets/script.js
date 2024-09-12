const titolo = document.getElementById("titolo");
const data = document.getElementById("data")
const windData = new Date();
const giorniSettimana = ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato", "Domenica"];
const numGiorno = windData.getDay()

if(windData.getDay() >= 7){
titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1]
} else {
    titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1]
}

data.innerHTML = windData.getDate() + "/" + (windData.getMonth()+1) + "/" + windData.getFullYear()