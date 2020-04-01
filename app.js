// adding events
const eventBtn1 = document.getElementById('evt1');
const eventBtn2 = document.getElementById('evt2');

eventBtn1.onclick = function() {
	alert('html attribute event assigned in JavaScript');
};

const btn2HandleClick = () => {
	alert('event listener added');
};

eventBtn2.addEventListener('click', btn2HandleClick);

// removing event listeners
eventBtn2.removeEventListener('click', btn2HandleClick);

// the event object
const evtObjBtn = document.getElementById('eventObject');
evtObjBtn.addEventListener('click', event => {
	console.log(event);
	console.log(event.target);
	event.target.disabled = true;
});

// different event types
const clickBtn = document.getElementById('click');
const mouseEvt = document.getElementById('mouse');

window.addEventListener('scroll', event => {
	console.log(event);
});

clickBtn.addEventListener('click', event => {
	console.log(event);
	console.log(event.x);
});

mouseEvt.addEventListener('mouseenter', event => {
	console.log(event);
	console.log(event.movementY);
});
