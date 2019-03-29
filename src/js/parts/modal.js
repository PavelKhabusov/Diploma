function modal() {
  'use strict';
  // -----------
	// ----- Modal
	// -----------
	let more = 'popup_engineer_btn',
	moreLink = 'phone_link',
  overlay = document.querySelector('.popup_engineer'),
  overlayLink = document.querySelector('.popup'),
  close = overlay.querySelector('.popup_close'),
  closeLink = overlayLink.querySelector('.popup_close');

  function openModal(elem, mod, clz) {
    // elem.forEach(function(item) {
    //   item.addEventListener('click', function() {
    //     mod.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    //   });
    // });
    document.addEventListener('click', function(e) {
      let t = e.target;
      if(t && t.classList.contains(elem)) {
        e.preventDefault();
        mod.style.display = 'block';
        document.body.parentElement.style.overflow = 'hidden';
      }
    });
    clz.addEventListener('click', function() {
      mod.style.display = 'none';
      document.body.parentElement.style.overflow = '';
    });
  }
  openModal(more, overlay, close);
  openModal(moreLink, overlayLink, closeLink);
}
export default modal;