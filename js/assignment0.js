function printFizzBuzz(n) {
	if (n < 1) {
		console.log("The number has be to larger or equal to 1");
		return;
	}
	for (i = 1; i <= n; i++) {
		if (i%3 == 0 && i%5 == 0) {
			console.log("FizzBuzz");
		} else if (i%3 == 0) {
			console.log("Fizz");
		} else if (i%5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
	return;
}