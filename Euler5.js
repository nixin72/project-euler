/*
	This is NOT currently working. I will return to it. 
*/
(function main() {
	let range = [...Array(20).keys()].slice(10).map(n => n+1);
	console.log(range);
	max = range.reduce((prod, n) => prod*n+1, 1);
	console.log(max);
	
	// for (let n = 0 ; n < max ; n++) {
		// console.log(n);
	// }
})();
