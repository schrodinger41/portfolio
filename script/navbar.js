document.addEventListener('DOMContentLoaded', () => {
    const navLinkEls = document.querySelectorAll('.nav_link');

    navLinkEls.forEach(navLinkEl => {
        navLinkEl.addEventListener('click', (event) => {
            event.preventDefault();

            const targetSectionId = navLinkEl.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop,/*hi*/
                behavior: 'smooth'
            });

            navLinkEls.forEach(el => el.classList.remove('is-active'));
            navLinkEl.classList.add('is-active');
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

