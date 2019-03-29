function modal() {
  'use strict';
  // -----------
	// ----- Modal
	// -----------
	let more = 'popup_engineer_btn',
      moreLink = 'phone_link',
      overlay = document.querySelector('.popup_engineer'),
      overlayLink = document.querySelector('.popup');

  function showModal(element) {
    element.style.display = 'block';
    element.classList.add('over');
    document.body.parentElement.style.overflow = 'hidden';
  }

  function openModal(elem, mod) {
    document.addEventListener('click', function(e) {
      let t = e.target;
      if(t && t.classList.contains(elem)) {
        e.preventDefault();
        showModal(mod);
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

  setTimeout(showModal, 60000, overlayLink);
}
export default modal;