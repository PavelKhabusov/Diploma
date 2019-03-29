import { join } from "path";

function calc() {
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
			close = modal.querySelector('.popup_calc_close'),
			info = modal.querySelector('.balcon_icons'),
      tab = info.querySelectorAll('a'),
			tabContent = modal.querySelectorAll('.big_img img'),
			width = modal.querySelector('#width'),
			height = modal.querySelector('#height'), 

			profileButton = modal.querySelector('.popup_calc_button'),
			profile = document.querySelector('.popup_calc_profile'),
			profileClose = profile.querySelector('.popup_calc_profile_close'),
			profileSelect = profile.querySelector('select'),
			profileCheck = profile.querySelectorAll('input[type="checkbox"]'),
			
			endButton = profile.querySelector('.popup_calc_profile_button'),
			end = document.querySelector('.popup_calc_end'),
			endClose = end.querySelector('.popup_calc_end_close'),
			endInputs = end.querySelectorAll('input');
	// Close
	let Close = (popup, btn) => {
		btn.addEventListener('click', () => {
			popup.style.display = 'none';
			document.body.parentElement.style.overflow = '';
			width.value = '';
			height.value = '';
			for (var key in Information) {
				Information[key] = '';
			}
			for (let i = 0; i < tabContent.length; i++) {
				tab[i].classList.remove('active');
			}
			profileSelect[0].selected = true;
			profileCheck[0].checked = false;
			profileCheck[1].checked = false;
			for(let i = 0; i < endInputs.length; i++) {
				endInputs[i].value = '';
			}
			end.querySelector('.status').remove();
		});
	}
	Close(modal, close);
	Close(profile, profileClose);
	Close(end, endClose);
// First Popup
	// Open
  document.addEventListener('click', function(e) {
    let t = e.target;
    if(t && t.classList.contains(btn)) {
      modal.style.display = 'block';
      document.body.parentElement.style.overflow = 'hidden';
    }
  });
  
	// Tabs
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
					Information.windowType = i+1;
          break;
        }
      }
    }
  });
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

	// Next Button 
	profileButton.addEventListener('click', () => {
		if(Information.windowType != '' && Information.windowWidth != '' && Information.windowHeight != '') {
			modal.style.display = 'none';
			profile.style.display = 'block';
		} else {
			alert('Ошибка! Неверно введены данные!');
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

	// Next Button 
	endButton.addEventListener('click', () => {
		if(Information.temperature != '' && Information.glazing != '') {
			profile.style.display = 'none';
			end.style.display = 'block';
		} else {
			alert('Ошибка! Неверно введены данные!');
		}
	});

// Third Popup
}
export default calc;