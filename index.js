document.addEventListener('DOMContentLoaded', function () {
    const ham = document.querySelector('.ham');
    const body = document.querySelector('body');
    const noScroll = document.querySelector('.no-scroll');
    const hamClose = document.querySelector('.close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .links');

    function closeMobileNav() {
        const mobileNav = document.querySelector('.mobile-nav');
        body.classList.remove('no-scroll');
        mobileNav.classList.remove('mobile-nav-open');
    }

    function handleLinkClick(event) {
        closeMobileNav();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        event.preventDefault();
    }

    ham.addEventListener('click', () => {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.add('mobile-nav-open');
        body.classList.add('no-scroll');
    });

    hamClose.addEventListener('click', closeMobileNav);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-next-button",
          prevEl: ".swiper-prev-button",
        },
        breakpoints: {
          320:{
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });

});
