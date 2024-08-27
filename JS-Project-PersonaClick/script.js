$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
  
    menuToggle.addEventListener("click", function () {
      mobileMenu.style.display = "block";
    });
  
    closeMenu.addEventListener("click", function () {
      mobileMenu.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === mobileMenu) {
        mobileMenu.style.display = "none";
      }
    });
  });