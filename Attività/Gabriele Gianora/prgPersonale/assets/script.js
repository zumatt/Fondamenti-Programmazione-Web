const titolo = document.getElementById("titolo");
const data = document.getElementById("data");

//const macDate = new Date(); -ATTIVARE PER VEDERE SOLO LA DATA
let macDate = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const numGiorno = macDate.getDay();

if(numGiorno >=7){
    titolo.innerHTML = "Ciao, Buona " + giorniSettimana[numGiorno-1];
} else {
    titolo.innerHTML = "Ciao, Buon " + giorniSettimana[numGiorno-1];
}
//ATTIVARE PER VEDERE SOLO LA DATA
//data.innerHTML = macDate.getDate() + "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();

aggiornamentoOra();
setInterval(aggiornamentoOra, 1000);

function aggiornamentoOra(){
    macDate = new Date();
    data.innerHTML = aggiungiZero(macDate.getHours()) + ":" + aggiungiZero(macDate.getMinutes()) + ":" + aggiungiZero(macDate.getSeconds());
}

function aggiungiZero(valore){
    let orario = 0;
    if(valore<=9){
        orario = "0" + valore;
    }else{
        orario = valore;
    };
    return orario;
}

function bottone(){
    document.getElementById("demo").innerHTML = "spero ti piaccia, sono un po' una capra. clicca quello sotto"
}