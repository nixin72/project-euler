const fib = num => {
	var a = 1, b = 0, temp;

	while (num >= 0){
		temp = a;
		a = a + b;
		b = temp;
		num--;
	}

	return b;
};

(function main() {	
	let n = num = sum = 0;
	while (((num = fib(n)) != null) && num < 4000000) {
		if (num % 2 == 0) {
			sum += num;
		}
		
		n++;
	}

	console.log(sum);
})();