let clicks = 0;

function changeBox(id){
    //console.log(id);
    clicks ++; //È come scrivere clicks += 1; oppure clicks = clicks + 1;
    id.children[0].innerHTML = "Cliccato " + clicks + " volte";
    if(id.classList.contains("clicked")){
        id.classList.remove("clicked");
        id.classList.add("notClicked");
    } else if (id.classList.contains("notClicked")){
        id.classList.remove("notClicked");
        id.classList.add("clicked");
    }
}