let modal = () => {
  'use strict';
  // -----------
	// ----- Modal
	// -----------
	let more = 'popup_engineer_btn',
      moreLink = 'phone_link',
      overlay = document.querySelector('.popup_engineer'),
      overlayLink = document.querySelector('.popup');
  let bindModal = (btn, overlayStatus, overflowStatus) => {
    btn.style.display = overlayStatus;
    (overflowStatus != '') ? btn.classList.add('over') : btn.classList.remove('over');
    document.body.parentElement.style.overflow = overflowStatus;
  }

  document.body.addEventListener('click', (e) => {
    let t = e.target;
    (t.classList.contains(more)) ? bindModal(overlay, 'block', 'hidden') :
    (t.classList.contains(moreLink)) ? (e.preventDefault(), 
      bindModal(overlayLink, 'block', 'hidden')) : 
    (t.classList.contains('over') || t.classList.contains('popup_close')) ? (
      bindModal(overlay, 'none', ''),
      bindModal(overlayLink, 'none', '')) : '';
  });

  setTimeout(bindModal, 60000, overlayLink, 'block', 'hidden');
}
export default modal;