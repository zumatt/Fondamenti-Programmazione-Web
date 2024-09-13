function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var principale = document.getElementById("principale");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "more information"; 
      moreText.style.display = "none";
      principale.style.height = "min-content";  // Imposta l'altezza a 50vh
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "less information"; 
      moreText.style.display = "inline";
      principale.style.height = "min-content";  // Imposta l'altezza a max-content
    }
}
