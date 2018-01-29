const isPalindrome = s => {
	let word = String(s);
	let rev = word.split('').reverse().join(''); 
	return word === rev;
};

(function main() {	
	let max = product = 0;	
	for ( let num1 = 999 ; num1 > 100 ; --num1 ) {
		for ( let num2 = num1 ; num2 > 100 ; --num2 ) {
			let product = num1 * num2;
			
			if (product > max && isPalindrome(product)) {
				max = product;
			}
		}		
	}
	
	console.log(max);	
})();