const collatz = n => {
	let seq = [];	
	
	for ( seq.push(n) ; n > 0 ^ n == 1 ; seq.push(n) ) {
		n = n%2 == 0 ? n/2 : (3*n) + 1;
	}
	
	return seq;
};

(function main(q) {
	let max = [0], col = [];
	for ( ; q > 0 ; col = [collatz(--q).length, q] ) {
		if (col[0] > max[0]) {
			max = col;
		}
	}
	
	console.log(max);
})(1000000);