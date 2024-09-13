const titolo = document.getElementById("titolo");
const data = document.getElementById("data")

let windData = new Date();
const giorniSettimana = ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato", "Domenica"];
const numGiorno = windData.getDay();

if(windData.getDay() >= 7){
titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1]
} else {
    titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1]
}

aggiornamentoOra();

setInterval(aggiornamentoOra, 100);

function aggiornamentoOra(){
    windData = new Date();
    aggiungiZero();
   
    data.innerHTML = aggiungiZero(windData.getHours()) + ":" + aggiungiZero(windData.getMinutes()) + ":" + aggiungiZero(windData.getSeconds());
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

let click = 0;

function toggleContent(){
    click++;
    const elContainer = document.getElementById("dcontent");

    if(click%2==0){
        elContainer.style.display="none";

    } else{
        elContainer.style.display="block";
    }

}