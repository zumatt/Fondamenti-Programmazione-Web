document.querySelectorAll(".head").forEach( el => {
    el.addEventListener('click', evt => {
        evt.target.nextElementSibling.classList.toggle("closed")
    })
})

//modal x immagini
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".grid-image");

// click event open modal
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src; // Set the modal image source to the clicked image's source
    });
});

//x close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// user clicks outside the image
modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}

// esc modal closes
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

