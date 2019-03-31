import tab from './tab';
let calc = () => {
  'use strict';
  // ----------------
	// ----- Calculator
	// ----------------
	
	// Main Object
	window.Information = {
		windowType: '',
		windowWidth: '',
		windowHeight: '',
		glazing: '',
		temperature: ''
	};
	// Variables
	let btn = 'glazing_price_btn',
      modal = document.querySelector('.popup_calc'),
			close = 'popup_calc_close',
			info = modal.querySelector('.balcon_icons'),
      item = info.querySelectorAll('a'),
			tabContent = modal.querySelectorAll('.big_img img'),
			width = modal.querySelector('#width'),
			height = modal.querySelector('#height'), 

			profileButton = 'popup_calc_button',
			profile = document.querySelector('.popup_calc_profile'),
			profileClose = 'popup_calc_profile_close',
			profileSelect = profile.querySelector('select'),
			profileCheck = profile.querySelectorAll('input[type="checkbox"]'),
			
			end = document.querySelector('.popup_calc_end'),
			endButton = 'popup_calc_profile_button',
			endClose = 'popup_calc_end_close',
			endInputs = end.querySelectorAll('input');

document.body.addEventListener('click', function(e) {
	let t = e.target;
	if(t) {
		// Close
		if(t.classList.contains(close) || t.classList.contains(profileClose) || t.classList.contains(endClose)) {
			modal.style.display = 'none';
			profile.style.display = 'none';
			end.style.display = 'none';
			document.body.parentElement.style.overflow = '';
			width.value = '';
			height.value = '';
			for (var key in Information) {
				Information[key] = '';
			}
			for (let i = 0; i < tabContent.length; i++) {
				item[i].classList.remove('active');
			}
			profileSelect[0].selected = true;
			profileCheck[0].checked = false;
			profileCheck[1].checked = false;
			for(let i = 0; i < endInputs.length; i++) {
				endInputs[i].value = '';
			}
			if(end.querySelector('.status')) end.querySelector('.status').remove();
		}
	// First Popup
		// Open
		if(t.classList.contains(btn)) {
			modal.style.display = 'block';
			document.body.parentElement.style.overflow = 'hidden';
		}
		// Next Button 
		if(t.classList.contains(profileButton)) {
			if(Information.windowType != '' && Information.windowWidth != '' && Information.windowHeight != '') {
				modal.style.display = 'none';
				profile.style.display = 'block';
			} else {
				alert('Ошибка! Неверно введены данные!');
			}
		}

	// Second Popup
		// Next Button
		if(t.classList.contains(endButton)) {
			if(Information.temperature != '' && Information.glazing != '') {
				profile.style.display = 'none';
				end.style.display = 'block';
			} else {
				alert('Ошибка! Неверно введены данные!');
			}
		}
	}
});

	// Tabs
	tab(tabContent, item, info, 'A', 2);

  // Width & Height
	width.addEventListener('change', () => {
		Information.windowWidth = width.value;
	});
	width.addEventListener('keypress', function(e) {
		var keycode = (e.keyCode ? e.keyCode : e.which);
    if (/\D/.test(String.fromCharCode(keycode))) { // a non–digit was entered
        e.preventDefault();
    }
	});
	
	height.addEventListener('change', () => {
		Information.windowHeight = height.value;
	});
	height.addEventListener('keypress', function(e) {
		var keycode = (e.keyCode ? e.keyCode : e.which);
    if (/\D/.test(String.fromCharCode(keycode))) { // a non–digit was entered
        e.preventDefault();
    }
	});

// Second Popup
	// Select
	profileSelect.addEventListener('change', function() {
		Information.glazing = this.options[this.selectedIndex].value;
	});

	// Checkboxes
	profileCheck.forEach(function(item, i, arr) {
		item.addEventListener('change', () => {
			if(item.checked) {
				arr[i == 0 ? 1 : 0].checked = false;
				Information.temperature = i ? 'warm' : 'cold';
			} else {
				Information.temperature = '';
			}
		});
	});

}
export default calc;