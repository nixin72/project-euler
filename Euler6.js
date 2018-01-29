(function main() {
	let range = [...Array(100).keys()].map(n => n+1);
	let sum = range.reduce((tot, n) => tot+n*n, 0);
	let squares = Math.pow(range.reduce((tot, n) => tot+n), 2);
	console.log(squares-sum);	
})();