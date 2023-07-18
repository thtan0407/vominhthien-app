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

window.addEventListener('load', function () {
	handleNavigation();
	window.addEventListener("resize", () => {
		windowWidth = window.innerWidth;
	});
});


