const titolo = document.getElementById("titolo");
const data = document.getElementById("data");
const macdate = new Date();
const giornisettimana = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];
const numgiorno = macdate.getDay();

titolo.innerHTML = "Buon " + giornisettimana[numgiorno-1];
data.innerHTML = macdate.getDate() + "/" + (macdate.getMonth()+1) + "/" + macdate.getFullYear();

if(macdate.getDate() >=7){
    titolo.innerHTML = "Buona " + giornisettimana[numgiorno-1];
} else{
    
}