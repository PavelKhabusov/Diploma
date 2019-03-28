function tabs() {
  'use strict';
  // ----------
	// ----- Tabs
	// ----------
  let tabs = document.querySelector('.glazing'),
      tab = document.querySelectorAll('.glazing_block'),
      info = tabs.querySelector('.glazing_slider'),
      tabContent = tabs.querySelectorAll('.row');
  console.log(tab);
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
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
export default tabs;