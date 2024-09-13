function getCookie(id){
    const element = document.getElementById(id);
    const cookie = document.cookie;
    let cookies = cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        cookies[i] = cookies[i].split('=');
    }

    if (cookies.length > 0) {
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i][0].trim() === 'username') {
                element.innerHTML = `Ciao ${cookies[i][1]} del corso ${cookies[i + 1][1]}`;
                return;
            }
        }
    }
    element.innerHTML = 'Cookie non trovato';
}

function cookieName(){
    const name = prompt('Inserisci il tuo nome');
    const date = new Date();
    const secExpires = date.getSeconds() + 15;
    date.setSeconds(secExpires);
    const expires = date.toUTCString();
    document.cookie = `username=${nome}; `
    document.cookie = `username=${name}; expires=${expires}`;
    document.cookie = `corso=CV; expires=${expires}`;
    alert('Ciao ' + name);

    getCookie('userName');
}

getCookie('userName');