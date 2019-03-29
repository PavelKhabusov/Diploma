function modal() {
  'use strict';
  // -----------
	// ----- Modal
	// -----------
	let more = 'popup_engineer_btn',
	moreLink = 'phone_link',
  overlay = document.querySelector('.popup_engineer'),
  overlayLink = document.querySelector('.popup');

  function openModal(elem, mod) {
    document.addEventListener('click', function(e) {
      let t = e.target;
      if(t && t.classList.contains(elem)) {
        e.preventDefault();
        mod.style.display = 'block';
        mod.classList.add('over');
        document.body.parentElement.style.overflow = 'hidden';
      }
      while(t.tagName == 'STRONG') t = t.parentElement;
      if(t && t.classList.contains('over') || t.classList.contains('popup_close')){
        mod.style.display = 'none';
        mod.classList.remove('over');
        document.body.parentElement.style.overflow = '';
      }
    });
  }
  openModal(more, overlay);
  openModal(moreLink, overlayLink);
}
export default modal;