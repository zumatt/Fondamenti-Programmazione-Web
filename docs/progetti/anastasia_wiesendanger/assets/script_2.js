function confirmBtn(msg, id){
    const label = document.getElementById(id);
    if(confirm(msg)){
        label.innerHTML = 'bravo! Cliccalo allora';
    } else {
        label.innerHTML = 'Continua a cercare col puntatore';
    }
}