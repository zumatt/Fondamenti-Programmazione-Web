const titolo = document.getElementById("titolo");
const data = document.getElementById("data");

let macdate = new Date();
const giornisettimana = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];
const numgiorno = macdate.getDay();


if(numgiorno >=7){
    titolo.innerHTML = "Buona " + giornisettimana[numgiorno-1];
} else{
    titolo.innerHTML = "Buon " + giornisettimana[numgiorno-1];
}

aggiornamentoora();
setInterval(aggiornamentoora, 100);

function aggiornamentoora(){
    macdate = new Date();
    data.innerHTML =  aggiungizero(macdate.getHours())+ ":" + aggiungizero(macdate.getMinutes()) + ":" + aggiungizero(macdate.getSeconds());
}

function aggiungizero(valore){
    let orario = 0;
    if(valore<=9){
        orario = "0" + valore
        } else{
            orario = valore
        };
        
        return orario; 
}