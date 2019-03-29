import { join } from "path";

function calc() {
  'use strict';
  // ----------------
	// ----- Calculator
	// ----------------
  
// First Popup
	// Open 
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

	// Tabs
	let info = modal.querySelector('.balcon_icons'),
      tab = info.querySelectorAll('a'),
      tabContent = modal.querySelectorAll('.big_img img');
  let hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('active');
    }
  }
  hideTabContent(1);
  let showTabContent = b => {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			tab[b].classList.add('active');
    }
  }
  modal.addEventListener('click', function(e) {
    let tar = e.target;
    while ((tar = tar.parentElement) && !tar.tagName=='A');
    if(tar && tar.tagName=='A') {
			e.preventDefault();
      for(let i = 0; i < tab.length; i++) {
        if(tar == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
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