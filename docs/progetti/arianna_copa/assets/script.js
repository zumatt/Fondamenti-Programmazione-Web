const buongiorno = document.getElementById("buongiorno");
const data = document.getElementById("data");

let data2 = new Date();
const giornisettimana = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];
const numgiorno = data2.getDay();

if(numgiorno >=7){
    buongiorno.innerHTML = "Buona " + giornisettimana[numgiorno-1] + "!";
} else {
    buongiorno.innerHTML = "Buon " + giornisettimana[numgiorno-1] +"!";
}

oraaggiornata();
setInterval(oraaggiornata, 300);

function oraaggiornata(){
    data2 = new Date ();
    data.innerHTML =  aggiungizero(data2.getHours())+ ":" + aggiungizero(data2.getMinutes()) + ":" + aggiungizero(data2.getSeconds());}

function aggiungizero(valore){
    let orario = 0;
    if(valore<=9){
         orario = "0" + valore
     } else{
        orario = valore
    };

    return orario; 
        
    }