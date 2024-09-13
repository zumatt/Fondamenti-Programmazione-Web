const titolo = document.getElementById("titolo");
const data = document.getElementById("data");

let macDate = new Date();

const giorniSettimana = ["Lunedì...","Martedì...","Mercoledì...","Giovedì...","Venerdì...","Sabato...", "Domenica..."]; // Array dei giorni della settimana
const numGiorno = macDate.getDay(); // Ottiene il numero del giorno corrente

// Controllo del giorno e aggiornamento del titolo
if(macDate.getDay() >= 7){
    titolo.innerHTML = "È una normale " + giorniSettimana[numGiorno-1]; // Testo domenica
} else {
    titolo.innerHTML = "È un normale " + giorniSettimana[numGiorno-1]; // Testo altri giorni
}

aggiornamentoOra();

setInterval(aggiornamentoOra, 100);

function aggiornamentoOra(){
    // Aggiornamento testo con data corrente
    macDate = new Date();
    data.innerHTML = aggiungiZero(macDate.getHours()) + ":" + aggiungiZero(macDate.getMinutes()) + ":" + aggiungiZero(macDate.getSeconds());
}

function aggiungiZero(valore){
    let orario = 0;

    if(valore<=9)
        {orario = "0" + valore;
    
    }else{
        orario = valore;
    };

    return orario;
}