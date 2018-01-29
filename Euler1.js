(function main() {	
	let sum = 0;

	[...Array(1000).keys()].filter(n => {	
		if (n%3 == 0 || n%5 == 0) {
			sum+=n;
			return true;
		}
		
		return false;
	});

	console.log(sum);
})();

