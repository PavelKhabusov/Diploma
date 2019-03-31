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
    (overflowStatus == '') ? btn.classList.add('over') : btn.classList.remove('over');
    document.body.parentElement.style.overflow = overflowStatus;
  }

  document.addEventListener('click', function(e) {
    let t = e.target;
    e.preventDefault();
    (t.classList.contains(more)) ? bindModal(overlay, 'block', 'hidden') : '';
    (t.classList.contains(moreLink)) ? bindModal(overlayLink, 'block', 'hidden') : '';
    if (t.classList.contains('over') || t.classList.contains('popup_close')) {
      bindModal(overlay, 'none', '');
      bindModal(overlayLink, 'none', '');
    }
  });

  setTimeout(bindModal, 60000, overlayLink, 'block', 'hidden');
}
export default modal;