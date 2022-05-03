const size = [window.width, window.height];  //public variable

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});

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


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules

    pagination: {
        el: '.swiper-pagination',
    }
});