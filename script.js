(function () {
    const header = document.querySelector('nav');
      const icon = document.querySelector('.icon-container');
      const menu = document.querySelector('.mobile-menu');
      icon.onclick = function () {
          header.classList.toggle('menu-open');
      }
  }());


document.querySelectorAll(".mobile-links").forEach(el => el.addEventListener("click",function(e) {

    if(this === "menu-item menu-item-contact") {
        $('html,body').animate({
            scrollTop: $(".contact").offset().top},
            'slow');
    }
    if(this === "menu-item menu-item-reparation") {
        $('html,body').animate({
            scrollTop: $(".reperation").offset().top},
            'slow');
    }
    if(this === "menu-item menu-item-garagiste") {
        $('html,body').animate({
            scrollTop: $(".garagiste").offset().top},
            'slow');
    }
    if(this === "menu-item menu-item-initiation") {
        $('html,body').animate({
            scrollTop: $(".mecanique").offset().top},
            'slow');
    } 
    if(this === "menu-item menu-item-atelier") {
        $('html,body').animate({
            scrollTop: $(".atelier").offset().top},
            'slow');
    } 
    if($(window).width() < 768) {
        document.querySelector("header").style.display = "none";
      }
}))

function moreControle() {

    var div = document.querySelector(".reparation-bottom-more-controle");

    if ($(div).is(':visible')) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

}
function morePneus() {

    var div = document.querySelector(".reparation-bottom-more-pneus");

    if ($(div).is(':visible')) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

}
function moreDistribution() {

    var div = document.querySelector(".reparation-bottom-more-distribution");

    if ($(div).is(':visible')) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

}
function moreFreins() {

    var div = document.querySelector(".reparation-bottom-more-freins");

    if ($(div).is(':visible')) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

}
function moreBatterie() {

    var div = document.querySelector(".reparation-bottom-more-batterie");

    if ($(div).is(':visible')) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

}
function moreVidange() {

    var div = document.querySelector(".reparation-bottom-more-vidange");

    if ($(div).is(':visible')) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

}