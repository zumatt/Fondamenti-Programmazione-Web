// const titolo = document.getElementById("titolo");
const data = document.getElementById("data");
let macData = new Date();
// const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdi", "Sabato", "Domenica"];
// const numGiorno = macData.getDay();

//questo lo abbiamo fatto per far si che ogni giorno si aggiornasse con il giorno giusto e il giusto buon
// if(numGiorno >= 7){
//     titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1];
// } else {
//     titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1];
// }

data.innerHTML = macData.getDate() + "/" + (macData.getMonth()+1) + "/" + macData.getFullYear();



const ora = document.getElementById("ora");
let orario = new Date();

//con questo abbiamo messo l'orario dentro la pagina e con le if e else abbiamo fatto si che l'ora abbia lo 0 davanti dal 1 al 9
aggiornamentoOra();
setInterval(aggiornamentoOra, 100);

function aggiornamentoOra(){
    orario = new Date()
    ora.innerHTML = aggiungiZero(orario.getHours()) + ":" + aggiungiZero(orario.getMinutes()) + ":" + aggiungiZero(orario.getSeconds());
    };


function aggiungiZero(valore){
    let orario = 0;
    if(valore <=9){
        orario = "0" + valore;
    }else{
        orario = valore;
    };

    return orario;
}