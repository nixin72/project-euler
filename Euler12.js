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
	let currTri = q = 0;
	
	while (getFactors(currTri).length <= 500) {
		currTri += ++q;
	}
	
	console.log(currTri);
})();