function modal() {
  'use strict';
  // -----------
	// ----- Modal
	// -----------
	let more = document.querySelectorAll('.popup_engineer_btn'),
  overlay = document.querySelector('.popup_engineer'),
  close = overlay.querySelector('.popup_close');

  more.forEach(function(item) {
    item.addEventListener('click', function() {
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
}
export default modal;