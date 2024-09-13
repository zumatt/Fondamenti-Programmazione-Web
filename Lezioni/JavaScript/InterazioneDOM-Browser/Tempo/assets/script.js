function setTimer(){
    const sec = prompt('Inserisci il tempo in secondi');
    try {
        const tipologia = typeof sec;
        sec = sec * 1000;
        if(tipologia == "string"){throw new TypeError("Il valore è un numero")};
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
    document.getElementById('clock').innerHTML = date;
}

// function uno(){
//     console.log('uno');    // in (clock,1000) metti (uno, 5000)
// }