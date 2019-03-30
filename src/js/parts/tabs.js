import tab from './tab';
let tabs = () => {
  'use strict';
  // --------------
	// ----- CalcTabs
  // --------------
  let tabs = document.querySelector('.decoration'),
      item = tabs.querySelectorAll('.decoration_item'),
      info = tabs.querySelector('.decoration_slider'),
      tabContent = tabs.querySelectorAll('.decoration_block');

  tab(tabContent, item, info, 'decoration_item', 0);
}
export default tabs;