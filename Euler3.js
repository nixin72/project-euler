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

const getFactors = n => {
	let m = n;
	let factors = [];
	for ( let q = 1 ; q < m ; q++ ) {
		if (n%q == 0) {
			factors.push(q);
			m = n/q;
			factors.push(m);
		}
	}
	
	return factors.sort((a, b) => a > b ? 1 : -1);
};

(function main() {
	let factors = getFactors(600851475143);
	for ( let q = 0 ; q < factors.length ; q++ ) {
		if (isPrime(factors[q])) {
			console.log(factors[q])
		}
	}
})();