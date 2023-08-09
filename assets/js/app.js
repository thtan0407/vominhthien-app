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
			type: 'doughnut', data: {
				datasets: [{
					data: ["14", "11", "75"], backgroundColor: ['rgb(7, 96, 7)', 'rgb(26, 137, 23)', 'rgb(3,161,50)'],

				}]
			}, options: {
				events: [], responsive: true, maintainAspectRatio: false, plugins: {
					doughnutlabel: {
						labels: [{
							text: 'Tổng đơn', font: {
								size: '14', family: "'Cabin', 'Arial', 'Helvetica', sans-serif", weight: '400'
							}, color: '#909090'
						}, {
							text: '100', font: {
								size: '24', family: "'Cabin', 'Arial', 'Helvetica', sans-serif", weight: '700'
							}, color: '#333'
						},]
					}, labels: {
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
			type: 'line', data: {
				labels: ['01/07', '05/07', '10/07', '15/07', '21/07', '26/07', '31/07'], datasets: [{
					label: 'Biểu đồ Line',
					data: [180, 140, 200, 160, 220, 180, 200],
					borderColor: 'rgb(3,161,50)',
					backgroundColor: 'rgba(0, 0, 0, 0)',
					borderWidth: 2,
					pointRadius: 0
				}]
			}, options: {
				events: [], scales: {
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
					}], xAxes: [{
						ticks: {
							fontSize: 15,
							fontStyle: '400',
							fontColor: '#A2A3A5',
							fontFamily: "'Cabin', 'Arial', 'Helvetica', sans-serif",
						}
					}]
				}, legend: {
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
			speed: 500, slidesPerView: 1, effect: 'fade', loop: false, pagination: {
				el: "#intro-slider #intro-slider-pagination", clickable: true,
			}, navigation: {
				nextEl: '#intro-slider .button-next', prevEl: '#intro-slider .button-prev',
			}, on: {
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

/****
 * Prevent Default
 */

export function handlePreventDefault() {
	const preventItems = document.querySelectorAll('.handlePrevent');
	if (preventItems.length > 0) {
		preventItems.forEach((item) => {
			item.addEventListener('click', (event) => event.preventDefault());
		})
	}
}


/****
 * Init Tooltip Bootstrap
 */
export function handleInitTooltipBS() {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	if (tooltipTriggerList.length > 0) {
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
	}
}

/****
 * Handle Call Detail Order
 */
export function handleCallDetailOrder() {
	const callDetailItems = document.querySelectorAll('.call-detail_order');
	if (callDetailItems.length > 0) {
		callDetailItems.forEach(function (item) {
			item.addEventListener('click', function (event) {
				event.stopPropagation();
				item.closest('.order-item').classList.toggle('is-show');
			});
		});
	}
}

/****
 * Handle Call Collapse Order
 */
export function handleCallCollapseOrder() {
	const callCollapseItems = document.querySelectorAll('.order-item_collapse__button');
	if (callCollapseItems.length > 0) {
		callCollapseItems.forEach(function (item) {
			item.addEventListener('click', function (event) {
				event.stopPropagation();
				const orderItemCollapse = item.closest('.order-item_collapse');
				const orderItemCollapseHeight = orderItemCollapse.scrollHeight;
				const orderItemCollapseRow = orderItemCollapse.closest('tr');

				if (orderItemCollapse.classList.contains('is-show') === false) {
					orderItemCollapse.classList.add('is-show');
					orderItemCollapseRow.style.height = orderItemCollapseHeight + 10 + 'px';
				} else {
					orderItemCollapse.classList.remove('is-show');
					orderItemCollapseRow.style.height = '';
				}
			});
		});
	}
}

/****
 * Handle Modal Report
 * Dùng cho modal khiếu nại
 */
export function handleModalReport() {
	const callModalReported = document.getElementById('call-modal_reported');
	const modalReported = document.getElementById('modal-reported');
	if (callModalReported !== null && modalReported !== null) {
		callModalReported.addEventListener('click', () => {
			new bootstrap.Modal('#modal-reported').show()
		})
	}
}


/****
 * Modal Dropdown Filter
 */
export function handleModalDropdownFilter() {
	const dropdownFilters = document.querySelectorAll('#modal-filter .filter-dropdown .filter-dropdown_call');
	const dropdownFilterChoose = document.querySelectorAll('#modal-filter .filter-dropdown .filter-dropdown_choose');
	if (dropdownFilters.length > 0 && dropdownFilterChoose.length > 0) {
		dropdownFilters.forEach((filter) => {
			filter.addEventListener('click', () => {

				const currentDropdown = filter.closest('.filter-dropdown');
				const isCurrentDropdownVisible = currentDropdown.classList.contains('is-show');

				dropdownFilters.forEach((otherFilter) => {
					const otherDropdown = otherFilter.closest('.filter-dropdown');
					if (otherDropdown !== currentDropdown) {
						otherDropdown.classList.remove('is-show');
					}
				});

				currentDropdown.classList.toggle('is-show', !isCurrentDropdownVisible);
			});
		});

		dropdownFilterChoose.forEach((choose) => {
			choose.addEventListener('click', () => {
				const chooseOthers = choose.closest('.filter-dropdown').querySelectorAll('.filter-dropdown_choose');
				chooseOthers.forEach(function (otherItem) {
					if (otherItem !== choose && otherItem.classList.contains('is-active')) {
						otherItem.classList.remove('is-active');
					}
				});

				choose.classList.add('is-active');
				choose.closest('.filter-dropdown').classList.remove('is-show');
				choose.closest('.filter-dropdown').querySelector('.filter-dropdown_call span').innerHTML = choose.innerHTML;
			})
		});

		document.addEventListener('click', (event) => {
			const clickedElement = event.target;

			if (!clickedElement.closest('.filter-dropdown.is-show')) {
				const allFilterDropdowns = document.querySelectorAll('.filter-dropdown.is-show');

				allFilterDropdowns.forEach((dropdown) => {
					dropdown.classList.remove('is-show');
				});
			}
		});
	}
}

/****
 * Handle Modal Filter Time
 * Dùng cho modal filter time
 */
export function handleModalFilterTime() {
	const callFilterTime = document.getElementById('call-filter_time');
	const modalFilterTime = document.getElementById('modal-filter_time');
	if (callFilterTime !== null && modalFilterTime !== null) {
		callFilterTime.addEventListener('click', () => {
			new bootstrap.Modal('#modal-filter_time').show()
		})
	}
}


/****
 * Init DateRangePicker
 */
export function handleInitDateRangePicker() {
	const daterangepickerItems = $('.handle-init_daterangepicker');
	if (daterangepickerItems.length > 0) {
		daterangepickerItems.each(function () {
			$(this).daterangepicker({
				"singleDatePicker": true,
				"autoApply": true,
				"startDate": "07/20/2023",
				"endDate": "07/26/2023",
				"parentEl": $(this).closest('.filter-item_input'),
				"opens": "center"
			});
		})
	}
}

/****
 * Add Voucher in Modal
 */
export function handleAddVoucher() {
	const elmAdd = document.getElementById('add-voucher');
	const voucherList = document.getElementById('voucher-list');
	if (elmAdd !== null && voucherList !== null) {
		elmAdd.addEventListener('click', function () {
			const voucherNewItems = voucherList.querySelectorAll('.voucher-new')
			voucherNewItems.forEach((item) => item.classList.remove('voucher-new', 'voucher-highlight'))
			const htmlVoucher = `<div class="voucher-item voucher-new voucher-highlight p-3 hstack align-items-start gap-3">
                                            <div class="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                                     viewBox="0 0 36 36"
                                                     fill="none">
                                                    <path d="M33.75 5.625H12.375C12.0758 5.625 11.79 5.74425 11.5785 5.9535L10.125 7.40925L8.6715 5.9535C8.46 5.74425 8.17425 5.625 7.875 5.625H2.25C1.01025 5.625 0 6.63525 0 7.875V28.125C0 29.367 1.01025 30.375 2.25 30.375H7.875C8.17425 30.375 8.46 30.2558 8.6715 30.0465L10.125 28.5907L11.5785 30.0442C11.79 30.2557 12.0758 30.375 12.375 30.375H33.75C34.992 30.375 36 29.367 36 28.125V7.875C36 6.63525 34.992 5.625 33.75 5.625Z"
                                                          class="voucher-fill"/>
                                                    <path d="M19.125 16.875C17.2642 16.875 15.75 15.3608 15.75 13.5C15.75 11.6392 17.2642 10.125 19.125 10.125C20.9858 10.125 22.5 11.6392 22.5 13.5C22.5 15.3608 20.9858 16.875 19.125 16.875ZM19.125 12.375C18.504 12.375 18 12.879 18 13.5C18 14.121 18.504 14.625 19.125 14.625C19.746 14.625 20.25 14.121 20.25 13.5C20.25 12.879 19.746 12.375 19.125 12.375Z"
                                                          fill="white"/>
                                                    <path d="M25.875 25.875C24.0142 25.875 22.5 24.3608 22.5 22.5C22.5 20.6392 24.0142 19.125 25.875 19.125C27.7358 19.125 29.25 20.6392 29.25 22.5C29.25 24.3608 27.7358 25.875 25.875 25.875ZM25.875 21.375C25.2562 21.375 24.75 21.8812 24.75 22.5C24.75 23.1188 25.2562 23.625 25.875 23.625C26.4938 23.625 27 23.1188 27 22.5C27 21.8812 26.4938 21.375 25.875 21.375Z"
                                                          fill="white"/>
                                                    <path d="M16.875 25.8747C16.6207 25.8747 16.3665 25.7892 16.155 25.6137C15.678 25.2155 15.6127 24.5067 16.011 24.0297L27.261 10.5297C27.6615 10.0505 28.3702 9.992 28.845 10.3857C29.322 10.784 29.385 11.4927 28.9867 11.972L17.7367 25.472C17.5162 25.7352 17.1967 25.8747 16.875 25.8747Z"
                                                          fill="white"/>
                                                    <path d="M11.25 10.125H9V12.375H11.25V10.125Z" fill="white"/>
                                                    <path d="M11.25 23.625H9V25.875H11.25V23.625Z" fill="white"/>
                                                    <path d="M11.25 19.125H9V21.375H11.25V19.125Z" fill="white"/>
                                                    <path d="M11.25 14.625H9V16.875H11.25V14.625Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div class="vstack gap-2">
                                                <div class="heading-4">
                                                    Khuyến mãi tháng 7
                                                </div>
                                                <div class="primary-color">Hạn sử dụng: 31.07.2021</div>
                                                <div class="voucher-item_divider heading-4">
                                                    [VMTTAUJUL30]&nbsp;<span class="fw-normal">Giảm giá ngay 30% cho đơn hàng đi
                                                    bằng tàu về
                                                    TP.HCMM</span>
                                                </div>
                                                <div class="black-50-color">
                                                    Số lượng: x1
                                                </div>
                                            </div>
                                        </div>`;

			voucherList.insertAdjacentHTML('afterbegin', htmlVoucher);
			const modalVoucherAdd = document.getElementById('modal-voucher_add');
			if (elmAdd.getAttribute('data-notification') !== null && parseInt(elmAdd.getAttribute('data-notification')) === 1 && modalVoucherAdd !== null) {
				new bootstrap.Modal('#modal-voucher_add').show();
			}
		})
	}
}

/****
 * Scroll Tab Active khi load trang
 */
export function handleScrollTabActive() {
	const tabs = document.querySelectorAll('.theme-tabs_overflow');
	if (tabs.length > 0) {
		tabs.forEach((tab) => {
			const tabActive = tab.querySelector('.nav-tabs .nav-item .nav-link.active');
			if (tabActive !== null) {
				const scrollPosition = tabActive.offsetLeft - tab.offsetLeft - (tab.offsetWidth / 2);
				tab.scrollLeft = scrollPosition;
			}
		})
	}
}

/****
 * Handle Calculator Height Textarea Chat
 */
export function handleCalcHeightTextarea() {
	const textareaChat = document.getElementById('handleCalcHeightTextarea');
	const buttonImage = document.getElementById('buttonImage');
	const buttonText = document.getElementById('buttonText');

	if (textareaChat !== null) {
		textareaChat.addEventListener('input', () => {
			if (textareaChat.value.trim() !== '') {
				textareaChat.style.height = textareaChat.scrollHeight + 'px';
				if (buttonImage !== null) {
					buttonImage.classList.remove('is-show');
				}
				if (buttonText !== null) {
					buttonText.classList.add('is-show');
				}
			} else {
				textareaChat.style.height = '40px';
				if (buttonImage !== null) {
					buttonImage.classList.add('is-show');
				}
				if (buttonText !== null) {
					buttonText.classList.remove('is-show');
				}
			}
		});
	}
}

/****
 * Init fancybox version 5.0
 * File Đính kèm
 * Page gui-hang-trung-quoc-ttchung-file-dinh-kem.html
 */
export function handleInitFancyboxFile() {
	Fancybox.bind("[data-fancybox=file-dinh-kem]", {
		Toolbar: {
			display: {
				left: [""],
				middle: ["close",],
				right: [""],
			},
		},
		idle: false,
		Thumbs: {
			type: "classic",
		},
	});
}

/****
 * Handle Read All Notification
 */
export function handleReadAllNotification() {
	const buttonReadAll = document.getElementById('button-readAll');
	const iconNotification = document.getElementById('icon-notification');
	const modalReadAll = document.getElementById('modal-readAll');
	if (buttonReadAll !== null && iconNotification !== null && modalReadAll !== null) {
		const handleModal = new bootstrap.Modal('#modal-readAll');
		buttonReadAll.addEventListener('click', () => {
			handleModal.hide();
			iconNotification.classList.add('is-read');
		});
	}
}

/****
 * Handle Form Edit User
 */
export function handleFormEditUser() {
	const formEditUser = document.querySelectorAll('.form-edit_user');
	if (formEditUser.length > 0) {
		formEditUser.forEach((form) => {
			const formEditUserItem = form.querySelectorAll('.form-edit_user__item');
			if (formEditUserItem.length > 0) {
				formEditUserItem.forEach((item) => {

					const formEditUserItemInput = item.querySelector('.form-edit_user__input');
					if (formEditUserItemInput !== null) {
						formEditUserItemInput.addEventListener('keyup', function (event) {
							if (event.target.value.trim() !== '') {
								item.classList.add('is-value');
							} else {
								item.classList.remove('is-value');
							}
						});

						formEditUserItemInput.addEventListener('mouseup', function (event) {
							if (!formEditUserItemInput.classList.contains('is-value')) {
								item.classList.add('is-value');
							}
						});

						formEditUserItemInput.addEventListener('blur', function (event) {
							if (event.target.value.trim() === '') {
								item.classList.remove('is-value');
							}
						});
					}

					const formEditUserItemSelect = item.querySelector('.form-edit_user__select form-select');
					if (formEditUserItemSelect !== null) {
						formEditUserItemSelect.addEventListener('change', function (event) {
							if (event.target.value.trim() !== '') {
								item.classList.add('is-value');
							} else {
								item.classList.remove('is-value');
							}
						});
					}
				});
			}
		})
	}
}

/****
 * Handle Filter Price Other
 */
export function handleFilterPriceOther() {
	const filterPriceOther = document.getElementById('filterPriceOther');
	if (filterPriceOther !== null) {
		const filterPriceOtherButton = filterPriceOther.querySelector('button');
		const filterPriceOtherInput = filterPriceOther.querySelector('input');
		if (filterPriceOtherButton !== null && filterPriceOtherInput !== null) {
			filterPriceOtherButton.addEventListener('click', function () {
				if (filterPriceOther.classList.contains('is-input')) {
					filterPriceOtherButton.innerHTML = 'Số tiền';
					filterPriceOther.classList.remove('is-input');
				} else {
					filterPriceOtherButton.innerHTML = 'Nhập số tiền';
					filterPriceOther.classList.add('is-input');
				}
			});
		}
	}
}

/****
 * Slider Card Bank Link
 */
export function handleSliderBankLink() {
	const bankLink = document.getElementById('bank-link_slider');
	if (bankLink !== null) {
		new Swiper('#bank-link_slider .swiper', {
			speed: 500,
			slidesPerView: 1.75,
			effect: 'slide',
			loop: false,
			spaceBetween: 8
		});
	}
}

/****
 * Handle Overlay Lookup Hint
 */
export function handleOverlayLookupHint() {
	const lookupHint = document.getElementById('lookup-hint');
	if (lookupHint !== null) {
		setTimeout(function () {
			lookupHint.classList.add('is-hint');
		}, 250);

		lookupHint.addEventListener('click', () => {
			if (lookupHint.classList.contains('is-hint')) {
				lookupHint.classList.remove('is-hint');
			}
		});
	}
}

/****
 * Slider Webshop
 */
export function handleSliderWebshop() {
	const webshopSlide = document.getElementById('slider-webshop');
	if (webshopSlide !== null) {
		new Swiper('#slider-webshop .swiper', {
			speed: 500,
			slidesPerView: 3.5,
			effect: 'slide',
			loop: false,
			spaceBetween: 15
		});
	}
}

/****
 * Detail Image
 * Page khoi-tao-don-dat-hang-ho-keyword-searching-detail
 */
export function handleSliderDetailImages() {
	const detailAvatar = document.getElementById('detail-images_avatar');
	const detailThumb = document.getElementById('detail-images_thumb');
	if (detailAvatar && detailThumb) {
		let sliderDetailThumb = new Swiper('#detail-images_thumb .swiper', {
			spaceBetween: 8,
			slidesPerView: 4,
			loopAdditionalSlides: 0,
		});

		let sliderDetailAvatar = new Swiper('#detail-images_avatar .swiper', {
			speed: 1000,
			slidesPerView: 1,
			thumbs: {
				swiper: sliderDetailThumb,
			},
		});
	}
}

/****
 * Handle Footer Card Detail
 */
export function handleFooterCartDetail() {
	let buttonOpen = document.getElementById('call-footerDetail');
	let footerWrapper = document.getElementById('parentFooter');
	let cardFooterCart = document.getElementById('cardFooterCart');
	let cardFooterTotal = document.getElementById('cardFooterTotal');

	if (buttonOpen !== null && buttonOpen.getAttribute('data-bs-toggle') === 'collapse' && footerWrapper !== null && cardFooterCart !== null && cardFooterTotal !== null) {
		buttonOpen.addEventListener('click', () => {
			buttonOpen.setAttribute('data-bs-target', '#modal-add_cart__success');
			buttonOpen.setAttribute('data-bs-toggle', 'modal');
		});

		let modalAddCartSuccess = document.getElementById('modal-add_cart__success');
		document.addEventListener('click', function (event) {
			if (!footerWrapper.contains(event.target) && !modalAddCartSuccess.contains(event.target)) {
				buttonOpen.setAttribute('data-bs-target', '#cardFooterCart');
				buttonOpen.setAttribute('data-bs-toggle', 'collapse');
				new bootstrap.Collapse(cardFooterCart).hide();
				new bootstrap.Collapse(cardFooterTotal).show();
			}
		});
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

	handlePreventDefault();

	handleInitTooltipBS();

	handleCallDetailOrder();

	handleCallCollapseOrder();

	handleModalReport()

	handleModalDropdownFilter();

	handleModalFilterTime();

	handleInitDateRangePicker();

	handleAddVoucher();

	handleScrollTabActive();

	handleCalcHeightTextarea();

	handleInitFancyboxFile();

	handleReadAllNotification();

	handleFormEditUser();

	handleFilterPriceOther();

	handleSliderBankLink();

	handleOverlayLookupHint();

	handleSliderWebshop();

	handleSliderDetailImages();

	handleFooterCartDetail();

	window.addEventListener("resize", () => {
		windowWidth = window.innerWidth;
	});
});


