function lightbox() {
	'use strict';	
  // --------------
	// ----- Lightbox
	// --------------
  let overlay = document.createElement('div'),
      works = document.querySelector('.works');
      overlay.classList.add('works_overlay');
      
  works.addEventListener('click', function(e){
    let t = e.target;
    if(t && t.tagName == 'IMG' && !t.classList.contains('lupa')){
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
  document.addEventListener('click', function(e) {
    let t = e.target;
    if(t && t.classList.contains('works_overlay')){
      overlay.parentElement.removeChild(overlay);
      document.body.parentElement.style.overflow = '';
    }
  });
}
export default lightbox;