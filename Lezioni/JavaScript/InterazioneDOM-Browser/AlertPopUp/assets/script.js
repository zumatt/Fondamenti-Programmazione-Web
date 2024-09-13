function confirmBtn(msg, id){
    const label = document.getElementById(id);
    if(confirm(msg)){
        label.innerHTML = 'Hai risposto si!';
    } else {
        label.innerHTML = 'Hai risposto no!';
    }
}

function promptBtn(msg, id){
    const label = document.getElementById(id);
    const risposta = prompt(msg);
    label.innerHTML = "Il tuo nome è: " + risposta;
}


