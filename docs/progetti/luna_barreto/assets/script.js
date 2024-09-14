const titolo = document.getElementById("titolo");
const ora = document.getElementById("ora")
// const data = document.getElementById("data")

let macDate = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const numGiorno = macDate.getDay();

if(numGiorno >= 7){
    titolo.innerHTML = "Ciao! Buona " + giorniSettimana[numGiorno-1];
} else {
    titolo.innerHTML = "Ciao! Buon " + giorniSettimana[numGiorno-1];
}



aggiornamentoOra();

setInterval(aggiornamentoOra, 100);

function aggiornamentoOra(){
    macDate = new Date();
    aggiungiZero();
    ora.innerHTML = "sono le " + aggiungiZero(macDate.getHours()) + ":" + aggiungiZero(macDate.getMinutes()) + ":" + aggiungiZero(macDate.getSeconds());
    // data.innerHTML = macDate.getDate() + "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();
}

function aggiungiZero(valore){
    let orario = 0;
    if(valore<=9){
        orario = "0" + valore
    } else {
        orario = valore
    };

    return orario;

}