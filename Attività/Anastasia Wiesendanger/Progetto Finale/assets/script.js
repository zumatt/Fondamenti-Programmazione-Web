const titolo = document.getElementById("titolo");
const data = document.getElementById("data");

let macDate = new Date(); //const macDate = new Date();
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const numGiorno = macDate.getDay();

if (numGiorno >= 7){
    titolo.innerHTML = "Buona " + giorniSettimana[numGiorno-1];
}else{ 
    titolo.innerHTML = "Buon " + giorniSettimana[numGiorno-1];
}


aggiornamentoOra();

setInterval (aggiornamentoOra,100);

// function aggiornamentoOra (){
// macDate = new Date();
// console.log(macDate.getSeconds());
// data.innerHTML = macDate.getHours() + ":" + (macDate.getMinutes()+1) + ":" + macDate.getSeconds();
// }

//data.innerHTML = macDate.getDate() + "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear ();

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

      return orario;   //return, ritorna valore all'interno di ogni funzione.
    }

   