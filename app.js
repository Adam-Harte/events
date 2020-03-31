// adding events
const eventBtn1 = document.getElementById('evt1');
const eventBtn2 = document.getElementById('evt2');

eventBtn1.onclick = function() {
	alert('html attribute event assigned in JavaScript');
};

eventBtn2.addEventListener('click', () => {
	alert('event listener added');
});
