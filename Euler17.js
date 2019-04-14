const written = n => {
	n = n.toString().split("").map(n => parseInt(n));
	
	const first20 = [
		"", "one", "two", "three", "four",
		"five", "six", "seven", "eight", "nine", 
		"ten", "eleven", "twelve", "thirteen", 
		"fourteen", "fifteen", "sixteen", 
		"seventeen", "eighteen", "nineteen"
	];
	
	const tens = [
		"teen", "twenty", "thirty", "forty", "fifty",
		"sixty", "seventy", "eighty", "ninety"
	];	
	
	
	if (n.length == 1) {
		return first10[n[0]];
	}
	if (n.length == 2) {
		if (n[0] == 1) {
			return first10[n[1]] + tens[0];
		}
	}
}

(function main() {
	console.log(written(14));
})();