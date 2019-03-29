function timer() {
	'use strict';	
  // -----------
	// ----- Timer
	// -----------
	let deadline = '2019-04-05';

	let getTimeRemaining = endtime => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor((t/1000) % 60),
				minutes = Math.floor((t/1000/60) % 60),
				hours = Math.floor((t/1000/60/60) % 24),
				days = Math.floor((t/1000/60/60/24));
		if(seconds < 10) seconds = '0' + seconds;
		if(minutes < 10) minutes = '0' + minutes;
		if(hours < 10) hours = '0' + hours;
		if(days < 10) days = '0' + days;
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
				days = timer.querySelector('.days'),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(() => {
			let t = getTimeRemaining(endtime);
			days.textContent = t.days;
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}, 1000);
	}
	setClock('timer', deadline);
}
export default timer;