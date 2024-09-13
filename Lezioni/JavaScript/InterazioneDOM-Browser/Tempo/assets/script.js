function setTimer(){
    let sec = prompt('Inserisci il tempo in secondi');
    try {
        const tipologia = typeof sec;
        sec = sec * 1000;
        if(tipologia == "string"){throw new TypeError("Il valore non è un numero")};
        timer = setTimeout(() => {
            alert('Tempo scaduto!');
        }, sec);
    } catch (error) {
        alert('Il tuo timer non è stato impostato correttamente - ' + error);
    }
}

function stopTimer(){
    clearTimeout(timer);
    alert('Timer fermato');
}

function clock(){
    const date = new Date();
//quando metti "date" ti tira fuori tutte le informazioni possibili, ma se metti il punto dopo date puoi selezionare per vedere solo l'info che ti interessa, che sia ora, giorno ecc
    document.getElementById('clock').innerHTML = date;
}

function uno(){
    console.log("1");
}