let clicks = 0;

const button = document.getElementById("button");
button.addEventListener("mouseover", function(){
    const label = document.getElementById("labelBtn");
    label.innerHTML = "Mouse sopra " + ++clicks + " volte";
    if(button.classList.contains("clicked")){
        button.classList.remove("clicked");
        button.classList.add("notClicked");
    } else if (button.classList.contains("notClicked")){
        button.classList.remove("notClicked");
        button.classList.add("clicked");
    }
});