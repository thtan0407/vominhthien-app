'use strict';
export let windowWidth = window.innerWidth;

export function handleNavigation() {
    let buttonOpen = document.getElementById('btnOpen-navigation');
    let buttonClose = document.getElementById('btnClose-navigation');
    let header = document.getElementById('header');

    buttonOpen.addEventListener('click', () => {
        header.classList.add("header-show");
    });

    buttonClose.addEventListener('click', () => {
        header.classList.remove("header-show");
    });
}

export function handleExtendFooter() {
    let buttonOpen = document.getElementById('footer-extend');
    let overlayClose = document.getElementById('footer-overlay');
    let footer = document.getElementById('footer');

    buttonOpen.addEventListener('click', () => {
        footer.classList.add("footer-show");
    });

    overlayClose.addEventListener('click', () => {
        footer.classList.remove("footer-show");
    });
}

window.addEventListener('load', function () {
    handleNavigation();
    handleExtendFooter();
    window.addEventListener("resize", () => {
        windowWidth = window.innerWidth;
    });
});


