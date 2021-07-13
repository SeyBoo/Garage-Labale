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
    document.querySelector("header").style.display = "none";
}