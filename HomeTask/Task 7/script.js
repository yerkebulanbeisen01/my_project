let buttons = document.getElementsByTagName('button');
// let spans = document.getElementsByTagName('span');

for (var i = 0; i < buttons.length; i++) {
	// buttons[i].addEventListener('click', function() {
	// 	// spans[i].style.textDecoration = 'line-through';
	// 	document.getElementByID(i).style.textDecoration='line-through';
	// 	alert(i);
	// });
	buttons[i].onclick = function() {
		spans[i].style.textDecoration = 'line-through';
	};
}

