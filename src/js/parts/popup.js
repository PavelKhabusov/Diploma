function popup() {
  'use strict';
  // -----------
	// ----- Popup
	// -----------
	let more = document.querySelectorAll('.phone_link'),
  overlay = document.querySelector('.popup'),
  close = overlay.querySelector('.popup_close');

  more.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
}
export default popup;