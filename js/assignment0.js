$(document).ready(function() {
    $('#button').click(function() {
    printFizzBuzz($('#formValue').val());
    });
});

function printFizzBuzz(n) {
	if (n < 1) {
		console.log('The number has be to larger or equal to 1');
		return;
	}
	
	var div = document.getElementById('fizzbuzz');
	div.innerHTML = '';
	
	for (i = 1; i <= n; i++) {
		if (i%3 == 0 && i%5 == 0) {
			div.innerHTML = div.innerHTML + '<p>FizzBuzz</p>';
		} else if (i%3 == 0) {
			div.innerHTML = div.innerHTML + '<p>Fizz</p>';
		} else if (i%5 == 0) {
			div.innerHTML = div.innerHTML + '<p>Buzz</p>';
		} else {
			div.innerHTML = div.innerHTML + '<p>' + i + '</p>';
		}
	}
	return;
}