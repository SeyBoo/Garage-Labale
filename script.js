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
    document.querySelector(".nav-close-bar-1").style.transition = "transform 1s";
    document.querySelector(".nav-close-bar-2").style.transition = "transform 1s";
    setTimeout(function() {
        document.querySelector(".nav-menu-bar").style.height = "1px";
        document.querySelector(".nav-menu-bar-1").style.marginBottom = ".7rem";
        document.querySelector(".nav-menu-bar-2").style.marginTop = ".7rem";
    }, 500);

}

/*
document.getElementById("test").addEventListener("click", function() {
    var element = document.querySelector(".nav-links");

    if (window.getComputedStyle(element).width === "0px") {
        element.style.width = "100%";
        console.log("go to block");
    } else if (window.getComputedStyle(element).width === "100%") {
        element.style.width = "0px";
        console.log("go to none");
    }
  });
 */
/*function menuToggle() {

    var element = document.querySelector(".nav-links");

    if (window.getComputedStyle(element).width === "0px") {
        element.style.width = "100%";
        console.log("go to block");
    } else if (window.getComputedStyle(element).width === "100%") {
        element.style.width = "0px";
        console.log("go to none");
    }
};*/