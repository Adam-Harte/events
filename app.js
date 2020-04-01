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

// preventDefault
const form = document.querySelector('form');
form.addEventListener('submit', event => {
	event.preventDefault();
});

// capturing, bubbling and propagation
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const btn1 = document.getElementById('btn1');

div1.addEventListener(
	'click',
	() => {
		console.log('div 1');
	},
	true
);

div2.addEventListener('click', () => {
	console.log('div 2');
});

btn1.addEventListener('click', event => {
	console.log(
		'I will only show this event as all propagation has been stopped'
	);
	event.stopPropagation();
	event.stopImmediatePropagation();
});

btn1.addEventListener('click', () => {
	console.log(
		'I will not show as the earlier click event has been setup to call stopImmediatPropagation'
	);
});

// event delegation
const ul = document.querySelector('ul');
ul.addEventListener('click', event => {
	event.target.style.backgroundColor = 'red';
});
