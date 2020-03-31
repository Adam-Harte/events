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
