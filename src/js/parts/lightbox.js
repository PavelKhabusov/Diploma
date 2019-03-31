let lightbox = () => {
	'use strict';	
  // --------------
	// ----- Lightbox
	// --------------
  let overlay = document.createElement('div');
      overlay.classList.add('works_overlay');

  document.addEventListener('click', (e) => {
    let t = e.target;
    if(t.classList.contains('works_overlay')){
      overlay.parentElement.removeChild(overlay);
      document.body.parentElement.style.overflow = '';
    }
    if(t.classList.contains('lightbox') && t.tagName == 'IMG' && !t.classList.contains('lupa')){
      e.preventDefault();
      overlay.innerHTML = '';

      let block = document.createElement('img'),
          tsrc = t.getAttribute('src');
          tsrc = tsrc.slice(0, 13) + "/big_img" + tsrc.slice(13, tsrc.length);
          block.setAttribute("src", tsrc);
          
      overlay.appendChild(block);
      document.body.appendChild(overlay);
      document.body.parentElement.style.overflow = 'hidden';
    }
  });
}
export default lightbox;