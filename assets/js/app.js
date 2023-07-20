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

export function handleButtonShowHidden() {
	const button = document.getElementById('button-password');
	const priceElm = document.getElementById('price-handle');
	priceElm.setAttribute('data-price', priceElm.innerHTML.trim());

	const iconHidden = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									 fill="none">
									<path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
										  fill="#191E24"/>
								</svg>`;
	const iconShow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									 fill="none">
									<path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
										  fill="#212C28"/>
									<path d="M11.9999 9.13965C10.4299 9.13965 9.1499 10.4196 9.1499 11.9996C9.1499 13.5696 10.4299 14.8496 11.9999 14.8496C13.5699 14.8496 14.8599 13.5696 14.8599 11.9996C14.8599 10.4296 13.5699 9.13965 11.9999 9.13965Z"
										  fill="#212C28"/>
								</svg>`;

	button.addEventListener('click', () => {
		if (!priceElm.classList.contains('is-hidden')) {
			priceElm.classList.add('is-hidden');
			priceElm.innerHTML = '*********';
			button.innerHTML = iconShow;
		} else {
			priceElm.classList.remove('is-hidden');
			priceElm.innerHTML = priceElm.getAttribute('data-price');
			button.innerHTML = iconHidden;
		}
	})
}

export function handleChartDoughnut() {
	const canvas = document.getElementById('chart-doughnut');
	if (canvas != null) {
		const chartDoughnut = new Chart(document.getElementById('chart-doughnut').getContext('2d'), {
			type: 'doughnut',
			data: {
				datasets: [{
					label: 'Tổng đơn',
					data: ["14", "11", "75"],
					backgroundColor: [
						'rgb(7, 96, 7)',
						'rgb(26, 137, 23)',
						'rgb(3,161,50)'
					],

				}]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Doughnut Chart'
					}
				}
			},

		});
		console.log(chartDoughnut)
	}
}

window.addEventListener('load', function () {
	handleNavigation();
	handleExtendFooter();
	handleButtonShowHidden();
	handleChartDoughnut();
	window.addEventListener("resize", () => {
		windowWidth = window.innerWidth;
	});
});


