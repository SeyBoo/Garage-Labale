function menuToggleOn() {
    document.querySelector(".nav-menu-bar-1").style.marginBottom = "0rem";
    document.querySelector(".nav-menu-bar-2").style.marginTop = "0rem";
    document.querySelector(".nav-menu-bar").style.height = ".05px";
    document.querySelector(".nav-menu-bar-1").style.transition = "all 1s"; 
    setTimeout(function() {
        document.querySelector(".menu-mobile").style.width = "100%";
    }, 500);
    
    setTimeout(function() {
        document.querySelector(".nav-close-bar-1").style.transform = "rotate(45deg)";
        document.querySelector(".nav-close-bar-1").style.transition = "transform 1s";
        document.querySelector(".nav-close-bar-2").style.transform = "rotate(90deg)";
        document.querySelector(".nav-close-bar-2").style.transition = "transform 1s";
    }, 500);
}


function menuToggleOff() {
    document.querySelector(".menu-mobile").style.width = "0";
    document.querySelector(".nav-close-bar-1").style.transform = "none";
    document.querySelector(".nav-close-bar-2").style.transform = "none";
    setTimeout(function() {
        document.querySelector(".nav-menu-bar-1").style.marginBottom = ".7rem";
        document.querySelector(".nav-menu-bar-2").style.marginTop = ".7rem";
        document.querySelector(".nav-menu-bar").style.height = "1px";
    }, 1000);

}

function showRest() {
    if ($(window).width() < 768) {
        document.querySelector("header").style.display = "none";
     }
}

document.querySelectorAll(".nav-links-li").forEach(el => el.addEventListener("click",function(e) {

    if(this === "nav-links-li nav-links-contact") {
        $('html,body').animate({
            scrollTop: $(".contact").offset().top},
            'slow');
    }
    if(this === "nav-links-li nav-links-reparation") {
        $('html,body').animate({
            scrollTop: $(".reperation").offset().top},
            'slow');
    }
    if(this === "nav-links-li nav-links-garagiste") {
        $('html,body').animate({
            scrollTop: $(".garagiste").offset().top},
            'slow');
    }
    if(this === "nav-links-li nav-links-initiation") {
        $('html,body').animate({
            scrollTop: $(".mecanique").offset().top},
            'slow');
    } 
    if(this === "nav-links-li nav-links-atelier") {
        $('html,body').animate({
            scrollTop: $(".atelier").offset().top},
            'slow');
    } 
    if($(window).width() < 768) {
        document.querySelector("header").style.display = "none";
      }
}));

document.querySelectorAll(".reparation-bottom-li").forEach(el => el.addEventListener("click",function(e) {
    
    if(this === "reparation-bottom-li reparation-bottom-controle") {
        console.log("test");
    }
    if(this === "nav-links-li nav-links-reparation") {
        $('html,body').animate({
            scrollTop: $(".reperation").offset().top},
            'slow');
    }
    if(this === "nav-links-li nav-links-garagiste") {
        $('html,body').animate({
            scrollTop: $(".garagiste").offset().top},
            'slow');
    }
    if(this === "nav-links-li nav-links-initiation") {
        $('html,body').animate({
            scrollTop: $(".mecanique").offset().top},
            'slow');
    } 
    if(this === "nav-links-li nav-links-atelier") {
        $('html,body').animate({
            scrollTop: $(".atelier").offset().top},
            'slow');
    } 
    
}));