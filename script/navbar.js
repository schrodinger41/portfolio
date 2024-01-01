document.addEventListener('DOMContentLoaded', function () {
  
    function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

