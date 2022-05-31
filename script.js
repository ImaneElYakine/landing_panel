// Evenement sur le scroll pour la rotation des cercles
window.onscroll = function () {
    scrollRotate();
};

// Fonction qui anime les différents cercles
function scrollRotate() {
    document.getElementById("cercle1").style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    document.getElementById("cercle2").style.transform = "rotate(-" + window.pageYOffset/4 + "deg)";
    document.getElementById("cercle4").style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    document.getElementById("cercle_mobile").style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

// Swiper pour la version mobile de la section Le Panel
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 4000,
    }
});

// Affichage d'un message lors de l'envoi du formulaire de contact
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form_message").style.display = "block";
});
