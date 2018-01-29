const isPrime = n => {
	if (n % 2 == 0 && n != 2) {
		return false;
	}
	
	for ( let q=3 ; q<= n/2 ; q+=2 ) {
		if (n % q == 0) {
			return false;
		}
	}
	
	return true;
};

(function main() {
	let sum = 2;
	let currPrime = 0;
	
	for ( let q = 1 ; ; q+=2 ) {
		if (isPrime(q)) {
			currPrime = q;
			if (currPrime < 2000000) {
				sum += q;
				console.log(q);
			}
			else {
				break;
			}
		}
	}
	
	console.log(sum);
})();