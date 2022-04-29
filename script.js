

// Evenement sur le scroll pour la rotation des cercles
window.onscroll = function () {
    scrollRotate();
};


// Fonction qui anime les différents cercles
function scrollRotate() {
    document.getElementById("cercle1").style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    document.getElementById("cercle2").style.transform = "rotate(-" + window.pageYOffset/4 + "deg)";
    document.getElementById("cercle4").style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}


