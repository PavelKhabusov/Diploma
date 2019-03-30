import tab from './tab';
let calc_tabs = () => {
  'use strict';
  // --------------
	// ----- CalcTabs
	// --------------
  let tabs = document.querySelector('.glazing'),
      item = document.querySelectorAll('.glazing_block'),
      info = tabs.querySelector('.glazing_slider'),
      tabContent = tabs.querySelectorAll('.row');
  
  tab(tabContent, item, info, 'glazing_block', 1);
}
export default calc_tabs;