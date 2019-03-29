function calc() {
  'use strict';
  // ----------
	// ----- Calculator
	// ----------
  let btn = 'glazing_price_btn',
      modal = document.querySelector('.popup_calc'),
      close = modal.querySelector('.popup_calc_close');

  document.addEventListener('click', function(e) {
    let t = e.target;
    if(t && t.classList.contains(btn)) {
      modal.style.display = 'block';
      document.body.parentElement.style.overflow = 'hidden';
    }
  });
  close.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.parentElement.style.overflow = '';
  });
  // let persons = document.querySelectorAll('.counter-block-input')[0],
	// 		restDays = document.querySelectorAll('.counter-block-input')[1],
	// 		place = document.getElementById('select'),
	// 		placeValue = 1,
	// 		totalValue = document.getElementById('total'),
	// 		personsSum = 0,
	// 		daysSum = 0,
	// 		total = 0;
	// 		totalValue.innerHTML = 0;

	// persons.addEventListener('change', function() {
	// 	personsSum = +this.value;
	// 	total = (daysSum * personsSum)*4000*placeValue;
	// 	if (restDays.value == '' || persons.value == '') {
	// 		totalValue.innerHTML = 0;
	// 	} else {
	// 		totalValue.innerHTML = total;
	// 	}
	// });
	// persons.addEventListener('keypress', function(e) {
	// 	var keycode = (e.keyCode ? e.keyCode : e.which);
  //   if (/\D/.test(String.fromCharCode(keycode))) { // a non–digit was entered
  //       e.preventDefault();
  //   }
  // });
	// restDays.addEventListener('change', function() {
	// 	daysSum = +this.value;
	// 	total = (daysSum * personsSum)*4000*placeValue;
	// 	if (restDays.value == '' || persons.value == '') {
	// 		totalValue.innerHTML = 0;
	// 	} else {
	// 		totalValue.innerHTML = total;
	// 	}
	// });
	// restDays.addEventListener('keypress', function(e) {
	// 	var keycode = (e.keyCode ? e.keyCode : e.which);
  //   if (/\D/.test(String.fromCharCode(keycode))) { // a non–digit was entered
  //       e.preventDefault();
  //   }
  // });
	// place.addEventListener('change', function() {
	// 	placeValue = this.options[this.selectedIndex].value;
	// 	if (restDays.value == '' || persons.value == '') {
	// 		totalValue.innerHTML = 0;
	// 	} else {
	// 		let a = (daysSum * personsSum)*4000*placeValue;
	// 		totalValue.innerHTML = a;
	// 	}
	// });
}
export default calc;