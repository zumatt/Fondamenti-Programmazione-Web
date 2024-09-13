let elTempo = document.getElementById("timer");
let actualDate = new Date();

setInterval(() => {
    actualDate = new Date();
    const deliveryDate = new Date("September 13, 2024 15:00:00");
    const remainingTime = deliveryDate - actualDate;
    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    elTempo.innerHTML = "Tempo rimanente " + aggiungiZero(remainingHours) + "h " + aggiungiZero(remainingMinutes) + "m " + aggiungiZero(remainingSeconds) + "s";
}, 100);

function aggiungiZero(valore){
    let orario = 0;
    
    if(valore<=9){
        orario = "0" + valore;
    }else{
        orario = valore;
    };

    return orario;
}