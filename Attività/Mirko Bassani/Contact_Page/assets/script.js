const tiolo = document.getElementById("titolo");
const data = document.getElementById("data");

let macDate = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato","Domenica"];
const numGiorno = macDate.getDay();

if(macDate.getDay() >=7){
titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1];
} else {
    titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1];
}

// funzione per la data
// data.innerHTML =macDate.getDate() + "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();

// funzione per l'orario
setInterval(aggiornamentoOra, 1000);
function aggiornamentoOra(){
    macDate = new Date();
    data.innerHTML = aggiungiZero(macDate.getHours()) + ":" + aggiungiZero(macDate.getMinutes()) + ":" + aggiungiZero(macDate.getSeconds());
}

function aggiungiZero(valore){
    let orario = 0;
    if(valore<=9){
        orario = "0"+ valore
    }else{
        orario = valore
    };

    return orario;
}

let clicks = 0;

function emmebi(){
    clicks++;
    const monogram = document.getElementById("monogram")
    if(clicks % 2 == 0){
        monogram.innerHTML = "MB";
    } else {
        monogram.innerHTML = "Mirko Bassani";
    }
}

const nome = ["Mirko Bassani"]

