document.addEventListener('DOMContentLoaded', () => {
    const navLinkEls = document.querySelectorAll('.nav_link');

    navLinkEls.forEach(navLinkEl => {
        navLinkEl.addEventListener('click', (event) => {
            event.preventDefault();

            const targetSectionId = navLinkEl.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop,
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

document.addEventListener('DOMContentLoaded', () => {
    const navLinkEls = document.querySelectorAll('.nav_link');
    const sectionEls = document.querySelectorAll('section');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top >= -0.5 * windowHeight &&
            rect.bottom <= 1.5 * windowHeight
        );
    }

    function setActiveSection() {
        sectionEls.forEach((sectionEl, index) => {
            if (isElementInViewport(sectionEl)) {
                const targetSectionId = sectionEl.id;
                const targetNavLink = document.querySelector(`.nav_link[href="#${targetSectionId}"]`);

                navLinkEls.forEach(navLinkEl => {
                    navLinkEl.classList.remove('is-active');
                });

                if (targetNavLink) {
                    targetNavLink.classList.add('is-active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveSection);
    window.addEventListener('resize', setActiveSection);
});

/*
document.addEventListener('DOMContentLoaded', () => {
    const navLinkEls = document.querySelectorAll('.nav_link');
    const sectionEls = document.querySelectorAll('section');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        console.log('Top:', rect.top);
        console.log('Bottom:', rect.bottom);
        console.log('Section:', el.id);

        return (
            rect.top >= -0.5 * windowHeight &&
            rect.bottom <= 1.5 * windowHeight
        );
    }

    function setActiveSection() {
        sectionEls.forEach((sectionEl, index) => {
            if (isElementInViewport(sectionEl)) {
                const targetSectionId = sectionEl.id;
                const targetNavLink = document.querySelector(`.nav_link[href="#${targetSectionId}"]`);

                navLinkEls.forEach(navLinkEl => {
                    navLinkEl.classList.remove('is-active');
                });

                if (targetNavLink) {
                    targetNavLink.classList.add('is-active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveSection);
    window.addEventListener('resize', setActiveSection);
});
*/