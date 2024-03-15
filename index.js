document.addEventListener('DOMContentLoaded', function () {
    const ham = document.querySelector('.ham');
    const hamClose = document.querySelector('.close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .links');

    function closeMobileNav() {
        const mobileNav = document.querySelector('.mobile-nav');
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
    });

    hamClose.addEventListener('click', closeMobileNav);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
});
