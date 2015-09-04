$(document).ready(function() {
    $('#button').click(function() {
      var div = document.getElementById('fizzbuzz');
      var n = Number($('#formValue').val());
      if (isNaN(n)) {
        div.innerHTML = '<p>What you entered is not a number. Please enter again!</p>';
      } else if (n < 1) {
        div.innerHTML = '<p>The number has be to greater or equal to 1. Please enter again!</p>';
      } else {
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
      }
    });
});
