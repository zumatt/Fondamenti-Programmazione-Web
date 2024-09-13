const data = document.getElementById("data");

function aggiornamentoora() {
    const macDate = new Date();
    data.innerHTML = aggiungizero(macDate.getHours()) + ":" + aggiungizero(macDate.getMinutes()) + ":" + aggiungizero(macDate.getSeconds());
}

function aggiungizero(valore) {
    return valore <= 9 ? "0" + valore : valore;
}

// Aggiorna l'ora ogni secondo
aggiornamentoora(); // Chiamato subito per mostrare l'orario subito
setInterval(aggiornamentoora, 1000); // 1000 millisecondi = 1 secondo