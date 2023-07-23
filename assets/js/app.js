'use strict';
export let windowWidth = window.innerWidth;

/****
 * Floating Navigation
 */
export function handleNavigation() {
    let buttonOpen = document.getElementById('btnOpen-navigation');
    let buttonClose = document.getElementById('btnClose-navigation');
    let header = document.getElementById('header');

    if (buttonOpen !== null && buttonClose !== null && header !== null) {
        buttonOpen.addEventListener('click', () => {
            header.classList.add("header-show");
        });

        buttonClose.addEventListener('click', () => {
            header.classList.remove("header-show");
        });
    }
}

/****
 * Expanded Footer
 */
export function handleExtendFooter() {
    let buttonOpen = document.getElementById('footer-extend');
    let overlayClose = document.getElementById('footer-overlay');
    let footer = document.getElementById('footer');

    if (buttonOpen !== null && overlayClose !== null && footer !== null) {
        buttonOpen.addEventListener('click', () => {
            footer.classList.add("footer-show");
        });

        overlayClose.addEventListener('click', () => {
            footer.classList.remove("footer-show");
        });
    }
}

/****
 * Button show hidden
 * Use price - password...
 */
export function handleButtonShowHidden() {
    const button = document.getElementById('button-visibility');
    const elmVisibility = document.getElementById('element-visibility');
    if (button !== null && elmVisibility !== null) {
        elmVisibility.setAttribute('data-price', elmVisibility.innerHTML.trim());

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
            if (!elmVisibility.classList.contains('is-hidden')) {
                elmVisibility.classList.add('is-hidden');
                elmVisibility.innerHTML = '*********';
                button.innerHTML = iconShow;
            } else {
                elmVisibility.classList.remove('is-hidden');
                elmVisibility.innerHTML = elmVisibility.getAttribute('data-price');
                button.innerHTML = iconHidden;
            }
        });
    }
}

/****
 * Chartjs.org - Chart Doughnut
 */
export function handleChartDoughnut() {
    const canvas = document.getElementById('chart-doughnut');
    if (canvas != null) {
        const chartDoughnut = new Chart(canvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: ["14", "11", "75"],
                    backgroundColor: [
                        'rgb(7, 96, 7)',
                        'rgb(26, 137, 23)',
                        'rgb(3,161,50)'
                    ],

                }]
            },
            options: {
                events: [],
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    doughnutlabel: {
                        labels: [
                            {
                                text: 'Tổng đơn',
                                font: {
                                    size: '14',
                                    family: "'Cabin', 'Arial', 'Helvetica', sans-serif",
                                    weight: '400'
                                },
                                color: '#909090'
                            },
                            {
                                text: '100',
                                font: {
                                    size: '24',
                                    family: "'Cabin', 'Arial', 'Helvetica', sans-serif",
                                    weight: '700'
                                },
                                color: '#333'
                            },
                        ]
                    },
                    labels: {
                        render: 'percentage',
                        fontSize: 16,
                        fontStyle: '700',
                        fontColor: '#ffffff',
                        fontFamily: "'Cabin', 'Arial', 'Helvetica', sans-serif",
                    }
                },
            },
        });
    }
}

/****
 * Chartjs.org - Chart Line
 */
export function handleChartLine() {
    const canvas = document.getElementById('chart-line');
    if (canvas != null) {
        const chartLine = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['01/07', '05/07', '10/07', '15/07', '21/07', '26/07', '31/07'],
                datasets: [{
                    label: 'Biểu đồ Line',
                    data: [180, 140, 200, 160, 220, 180, 200],
                    borderColor: 'rgb(3,161,50)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                events: [],
                scales: {
                    yAxes: [{
                        ticks: {
                            fontSize: 14,
                            fontStyle: '400',
                            fontColor: '#A2A3A5',
                            fontFamily: "'Cabin', 'Arial', 'Helvetica', sans-serif",
                            beginAtZero: false,
                            stepSize: 40,
                            max: 260,
                            min: 140,
                            callback: function (value) {
                                return value + 'M';
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15,
                            fontStyle: '400',
                            fontColor: '#A2A3A5',
                            fontFamily: "'Cabin', 'Arial', 'Helvetica', sans-serif",
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }
}

/****
 * Popup Copy
 */
export function handleModalCopy() {
    const modalCopy = document.getElementById('modal-copy');
    if (modalCopy !== null) {
        setTimeout(function () {
            new bootstrap.Modal('#modal-copy').show()
        });
    }
}

/****
 * Screen Intro
 */
export function handleScreenIntro() {
    const introWrapper = document.getElementById('intro-wrapper');
    if (introWrapper !== null) {
        setTimeout(function () {
            introWrapper.classList.add('hidden-bg');
        }, 500);
    }

    const introSlider = document.getElementById('intro-slider');
    if (introSlider !== null) {
        new Swiper('#intro-slider .swiper', {
            speed: 500,
            slidesPerView: 1,
            effect: 'fade',
            loop: false,
            pagination: {
                el: "#intro-slider #intro-slider-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '#intro-slider .button-next',
                prevEl: '#intro-slider .button-prev',
            },
            on: {
                afterInit: function () {
                    handleSetPositionPaginationIntro()
                },
            },
        });
    }
}

/****
 * Set Position Pagination in Intro Slider
 */
export function handleSetPositionPaginationIntro() {
    const paginationIntro = document.getElementById('intro-slider-pagination');
    if (paginationIntro !== null) {
        function getPositionFromBottom(element) {
            let rect = element.getBoundingClientRect();
            let viewportHeight = window.innerHeight + element.clientHeight;
            return (viewportHeight - rect.bottom);
        }

        const introSliderButtons = document.querySelectorAll('.intro-slider_buttons');
        introSliderButtons.forEach((elm) => {
            paginationIntro.style.bottom = (getPositionFromBottom(elm) + 24) + 'px';
        });
    }
}


/****
 * Form Login Example
 */
export function handleFrmLoginExample() {
    const frmAccount = document.getElementById('formLoginExample');
    if (frmAccount !== null) {
        frmAccount.addEventListener('submit', (event) => {
            event.preventDefault();

            const modalValidate = new bootstrap.Modal('#modal-validate');

            const inputExample1 = document.getElementById('inputExample1').value;
            const inputExample2 = document.getElementById('inputExample2').value;
            if (inputExample1.trim() === '' || inputExample2.trim() === '') {
                modalValidate.show();
                return false;
            }
            const loadingContent = document.getElementById('loading-content');
            const modalLoading = new bootstrap.Modal('#modal-loading');
            modalLoading.show();
            setTimeout(() => {
                loadingContent.classList.add('is-success');
            }, 1000);
        })
    }
}

/****
 * Form Register Example - Step 1
 * Nhập số điện thoại
 */
export function handleFrmRegisterExampleStep1() {
    const frmRegister = document.getElementById('formRegisterExampleStep1');
    if (frmRegister !== null) {
        frmRegister.addEventListener('submit', (event) => {
            event.preventDefault();

            const modalValidate = new bootstrap.Modal('#modal-validate');

            const inputExample1 = document.getElementById('inputExample1').value;
            const inputExample2 = document.getElementById('inputExample2').value;
            if (inputExample1.trim() === '' || inputExample2.trim() === '') {
                modalValidate.show();
                return false;
            }
        })
    }
}

/****
 * Dropdown Phone Number
 */
export function handleDropdownNumberPhone() {
    const dropdownPhoneNumber = document.getElementById('dropdown-phoneNumber');
    const dropdownCall = document.getElementById('call-dropdown');
    const dropdownFill = document.getElementById('fill-dropdown');
    const dropdownInput = document.getElementById('inputExample1');
    const dropdownInner = document.getElementById('handle-dropdown');
    const dropdownInnerItems = document.querySelectorAll('#handle-dropdown > ul > li');
    if (dropdownPhoneNumber !== null && dropdownCall !== null && dropdownFill !== null && dropdownInput !== null && dropdownInner !== null && dropdownInnerItems !== null) {
        dropdownCall.addEventListener('click', () => dropdownInner.classList.toggle('is-show'));

        dropdownInnerItems.forEach(function (item) {
            item.addEventListener('click', function () {
                dropdownInnerItems.forEach(function (otherItem) {
                    if (otherItem !== item && otherItem.classList.contains('is-active')) {
                        otherItem.classList.remove('is-active');
                    }
                });

                item.classList.add('is-active');

                dropdownInner.classList.remove('is-show');

                dropdownFill.innerHTML = item.innerHTML;
                dropdownInput.value = item.getAttribute('data-value');
            });
        });

        document.body.addEventListener('click', function (event) {
            const target = event.target;

            if (!dropdownPhoneNumber.contains(target) && !dropdownCall.contains(target) && !dropdownInner.contains(target)) {
                dropdownInner.classList.remove('is-show');
            }
        });
    }
}


/****
 * Form Forgot Example - Step 1
 */
export function handleFrmForgotExampleStep1() {
    const frmForgot = document.getElementById('formForgotExampleStep1');
    if (frmForgot !== null) {
        frmForgot.addEventListener('submit', (event) => {
            event.preventDefault();

            const modalValidate = new bootstrap.Modal('#modal-validate');

            const inputExample1 = document.getElementById('inputExample1').value;
            if (inputExample1.trim() === '') {
                modalValidate.show();
                return false;
            }
        })
    }
}

/****
 * Form Forgot Example - Step 3
 */
export function handleFrmForgotExampleStep3() {
    const frmForgot = document.getElementById('formForgotExampleStep3');
    if (frmForgot !== null) {
        frmForgot.addEventListener('submit', (event) => {
            event.preventDefault();


            const inputExample1 = document.getElementById('inputExample1').value;
            const inputExample2 = document.getElementById('inputExample2').value;

            if (inputExample1.trim() !== '' && inputExample2.trim() !== '' && inputExample1 === inputExample2) {
                const modalSuccess = new bootstrap.Modal('#modal-success');
                modalSuccess.show();
            }
            return false;
        })
    }
}

/****
 * Collapse Checkbox Select Items Cart
 */

export function handleSelectItemsCart() {
    const cartChoose = document.getElementById('cart-choose_02');
    const cartWrapper = document.getElementById('cart-wrapper');
    if (cartChoose !== null && cartWrapper !== null) {
        const cartButtons = cartWrapper.querySelectorAll('.cart-action_button');
        if (cartButtons.length > 0) {
            cartChoose.addEventListener('show.bs.collapse', event => {
                cartButtons.forEach((button) => button.classList.add('is-checkbox'));
            });

            cartChoose.addEventListener('hide.bs.collapse', event => {
                cartButtons.forEach((button) => button.classList.remove('is-checkbox'));
            })
        }
    }
}

window.addEventListener('load', function () {
    handleNavigation();

    handleExtendFooter();

    handleButtonShowHidden();

    handleChartDoughnut();

    handleChartLine();

    handleModalCopy();

    handleScreenIntro();

    handleFrmLoginExample();

    handleFrmRegisterExampleStep1();

    handleDropdownNumberPhone();

    handleFrmForgotExampleStep1();

    handleFrmForgotExampleStep3();

    handleSelectItemsCart();

    window.addEventListener("resize", () => {
        windowWidth = window.innerWidth;
    });
});


