function setTimer(){
    const sec = prompt('Inserisci il tempo in secondi');
    try {
        timer = setTimeout(() => {
            alert('Tempo scaduto!');
        }, sec * 1000);
    } catch (error) {
        alert('Inserisci un numero valido');
    }
}

function stopTimer(){
    clearTimeout(timer);
    alert('Timer fermato');
}

function clock(){
    const date = new Date();
    const sec = date.getSeconds();
    document.getElementById('clock').innerHTML = sec;
}