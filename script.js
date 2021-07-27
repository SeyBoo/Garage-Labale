(function () {
    const header = document.querySelector('nav');
      const icon = document.querySelector('.icon-container');
      const menu = document.querySelector('.mobile-menu');
      icon.onclick = function () {
          header.classList.toggle('menu-open');
      }
  }());

  $(document).ready(function () {
    $('.menu-item-contact').click(function() {
        document.querySelector('nav').classList.remove('menu-open');
        document.querySelector('nav').style.display = "none";
        $('html, body').animate({
        scrollTop: $(".contact").offset().top
        }, 'slow')
        setTimeout(function() {
            document.querySelector('nav').style.display = "block";
        },1000);
    }),
    $('.menu-item-reparation').click(function (){
        document.querySelector('nav').classList.remove('menu-open');
        document.querySelector('nav').style.display = "none";
      $('html, body').animate({
        scrollTop: $(".reparation").offset().top
      }, 'slow')
      setTimeout(function() {
        document.querySelector('nav').style.display = "block";
    },1000);
    }),
    $('.menu-item-garagiste').click(function (){
        document.querySelector('nav').classList.remove('menu-open');
        document.querySelector('nav').style.display = "none";
      $('html, body').animate({
        scrollTop: $(".garagiste").offset().top
      }, 'slow')
      setTimeout(function() {
        document.querySelector('nav').style.display = "block";
    },1000);
    }),
    $('.menu-item-mecanique').click(function (){
        document.querySelector('nav').classList.remove('menu-open');
        document.querySelector('nav').style.display = "none";
        $('html, body').animate({
          scrollTop: $(".mecanique").offset().top
        }, 'slow')
        setTimeout(function() {
            document.querySelector('nav').style.display = "block";
        },1000);
      }),
    $('.menu-item-atelier').click(function (){
        document.querySelector('nav').classList.remove('menu-open');
        document.querySelector('nav').style.display = "none";
        $('html, body').animate({
          scrollTop: $(".atelier").offset().top
        }, 'slow')
        setTimeout(function() {
            document.querySelector('nav').style.display = "block";
        },1000);
      })
  });

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


const faders = document.querySelectorAll('section');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  