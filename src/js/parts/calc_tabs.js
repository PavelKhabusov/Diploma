function calc_tabs() {
  'use strict';
  // --------------
	// ----- CalcTabs
	// --------------
  let tabs = document.querySelector('.glazing'),
      tab = document.querySelectorAll('.glazing_block'),
      info = tabs.querySelector('.glazing_slider'),
      tabContent = tabs.querySelectorAll('.row');

  let hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].children[1].classList.remove('active');
    }
  }

  hideTabContent(1);

  let showTabContent = b => {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tab[b].children[1].classList.add('active');
    }
  }
  info.addEventListener('click', function(e) {
    let tar = e.target;
    while ((tar = tar.parentElement) && !tar.classList.contains('glazing_block'));
    if(tar && tar.classList.contains('glazing_block')) {
      for(let i = 0; i < tab.length; i++) {
        if(tar == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}
export default calc_tabs;