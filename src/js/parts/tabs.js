let tabs = () => {
  'use strict';
  // --------------
	// ----- CalcTabs
	// --------------
  let tabs = document.querySelector('.decoration'),
      tab = tabs.querySelectorAll('.decoration_item'),
      info = tabs.querySelector('.decoration_slider'),
      tabContent = tabs.querySelectorAll('.decoration_block');

  let hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].firstElementChild.classList.remove('after_click');
    }
  }

  hideTabContent(1);

  let showTabContent = b => {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tab[b].firstElementChild.classList.add('after_click');
    }
  }
  info.addEventListener('click', function(e) {
    let tar = e.target;
    while ((tar = tar.parentElement) && !tar.classList.contains('decoration_item'));
    if(tar && tar.classList.contains('decoration_item')) {
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