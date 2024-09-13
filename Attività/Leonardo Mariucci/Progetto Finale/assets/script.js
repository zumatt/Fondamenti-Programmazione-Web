const titolo = document.getElementById("titolo");
const data = document.getElementById("data");

let macDate = new Date();

const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const numGiorno = macDate.getDay();

if(macDate.getDay() >= 7){
    titolo.innerHTML = "Buona" + giorniSettimana[numGiorno-1];
}else{
    titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1];
}



// per vedere la data
// data.innerHTML = macDate.getDate() + "/" + (macDate.getMonth() + 1 ) + "/" + macDate.getFullYear();

aggiornamentoOra();

setInterval(aggiornamentoOra, 500);

function aggiornamentoOra(){

    macDate = new Date();
    data.innerHTML = aggiungiZero(macDate.getHours()) + ":" + aggiungiZero(macDate.getMinutes()) + ":" + aggiungiZero(macDate.getSeconds());
}
// per mettere lo zero davanti ai numeri dell'ora in unità
function aggiungiZero(valore){
    let orario = 0;
    if(valore <= 9) { 
        orario = "0" + valore
    } else {
        orario =valore
    };

    return orario;
}
