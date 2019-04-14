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

const nthPrime = n => {
	let numPrimes = 0;
	for (let q = 1 ; ; q++) {
		if (isPrime(q)) {
			numPrimes++;
			if (numPrimes == n+1) {
				return q;
			}
		}
	}
};

(function main() {
	console.log(nthPrime(100000));	
})();