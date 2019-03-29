let form = () => {
	'use strict';
  // ----------------
	// ----- Modal Form
	// ----------------
	let message = {
		loading: 'Идет отправка...',
		success: 'Отправлено!',
		failure: 'Ошибка...' 
	};
	let forms = document.querySelectorAll('.form'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
	function sendForm(elem) {
    let input = elem.querySelectorAll('input');
    let tel_mask = input[1];
    tel_mask.addEventListener('keypress', function() {
      var that = this;
      setTimeout(function() {
          var res = /[^0-9]/g.exec(that.value);
          that.value = that.value.replace(res, '');
      }, 0);
    }, false);
		elem.addEventListener('submit', function(e) {
			e.preventDefault();
			elem.appendChild(statusMessage);
			let formData = new FormData(elem);
			if(Information.windowWidth != '') {
				for ( var key in Information ) {
					formData.append(key, Information[key]);
					Information[key] = '';
				}
			}
			function postData(data) {
				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

					request.onreadystatechange = function() {
						if(request.readyState < 4) {
							resolve()
						} else if(request.readyState === 4) {
							if(request.status == 200)
								resolve()
							} else {
								reject()
							}
					}
					request.send(data);
				});
			}
			function clearInput() {
				for(let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}
			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => statusMessage.innerHTML = message.success)
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput)
		});
	}
	forms.forEach(function(item){
    sendForm(item);
  });
}
export default form;