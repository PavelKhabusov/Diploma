let tab = (big, item, slider, blockName, index) => {
  'use strict';
  // ---------
	// ----- Tab
	// ---------
  let hideBig = a => {
    for (let i = a; i < big.length; i++) {
      big[i].classList.remove('show');
      big[i].classList.add('hide');
      switch(index) {
        case 0:
          item[i].firstElementChild.classList.remove('after_click');
          break;
        case 1:
          item[i].children[1].classList.remove('active');
          break;
        case 2:
          item[i].classList.remove('active');
          break;
      }
    }
  }
  hideBig(1);
  let showBig = b => {
    if(big[b].classList.contains('hide')) {
      big[b].classList.remove('hide');
      big[b].classList.add('show');
      switch(index) {
        case 0:
          item[b].firstElementChild.classList.add('after_click');
          break;
        case 1:
          item[b].children[1].classList.add('active');
          break;
        case 2:
          item[b].classList.add('active');
          break;
      }
    }
  }
  slider.addEventListener('click', function(e) {
    e.preventDefault();
    let t = e.target,
        tg = 't.tagName == blockName',
        cn = 't.classList.contains(blockName)',
        condition = (index == 2 ? tg : cn);
    while ((t = t.parentElement) && !eval(condition));
    if(eval(condition)) {
      for(let i = 0; i < item.length; i++) {
        if(t == item[i]) {
          hideBig(0);
          showBig(i);
          if(index == 2) Information.windowType = i+1;
          break;
        }
      }
    }
  });
}
export default tab;