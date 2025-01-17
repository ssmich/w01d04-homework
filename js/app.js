// 1. Verbal Questions
// 		1. What is the difference between a parameter and an argument?

// 			A parameter is an input variable for a function. An argument
//			is the value of the parameter that gets passed into the 
//			function. A parameter is the input variable for a function. 
//			An argument is the value assigned to the parameter.

//		2. Within a function, what is the difference between return 
// 		   and console.log?

//			Return specifies a value to be returned and terminates the 
//			code within a fuction. Console.log prints and does not 
//			return a value and is therefore undefined. 

//		3. What are the implications of the ability of a function to 
//		   return a value?

//			Return must be included in the function as the last step.

// 2. Palindrome again. 
// 		Write a function checkPalindrome that accepts a single argument, 
//		a string. Yes, you've done it before, but do it again. Later in 
//		this assignment we're gonna beef up our palindrome function some. 
//		See if you can do it without looking back at your previous answer. 
//		The function should return true if the string is a palindrome, 
//		false if not. Make sure your function will give the correct answer 
//		for words with capital letters.

// 		console.log(checkPalindrome("Radar"));
//  	=> true
// 		console.log(checkPalindrome("Borscht"));
// 		=> false

let str = "radAR"
let str2 = "happy"

 function checkPalindrome(str){
 	for (let i = 0; i < (str.length/2); i++){
 		if (str[i] !== str[str.length-1-i] && 
 			str[i] !== str[str.length-1-i].toUpperCase() && 
 			str[i] !== str[str.length-1-i].toLowerCase()){
 			return false;
 		} 
 	}
 	return true;
}
console.log(checkPalindrome(str));
console.log(checkPalindrome(str2));

//	3. Digit Sum
//	Write a function sumDigits that accepts a number and returns the sum
//  of its digits.

//	console.log(sumDigits(42));
//	=> 6;

function sumDigits(num){
	let numStr = num.toString();
	let numStrArray = numStr.split("");
	let numArray = numStrArray.map(Number);
	let answer = 0
	for (let i = 0; i < numArray.length; i++){
		answer += numArray[i]
	}
	return answer;
}

console.log(sumDigits(345));

// 4. Pythagoras
// 	Write a function calculateSide that takes two arguments: sideA and
// 	sideB, and returns the solution for sideC using the Pythagorean 
//	theorem.
//	hint: discover the Pythagorean Theorem on a website called google.com
//	hint: checkout the Math methods in javascript
//	ex :console.log(calculateSide(8, 6)); => 10

// **calculateHypotenuse is a much more descriptive name than calculateSide.
function calculateHypotenuse(a,b){
	let hypotSqr = Math.pow(a,2) + Math.pow(b,2);
	console.log(Math.sqrt(hypotSqr));
};

calculateHypotenuse(3,4);

// 5. Sum Array
// 	Write a function sumArray that takes an array as an argument. 
// 	The array should contain numbers. The function should return 
//	the sum of the numbers in the array.
// 	Expected result:
//	console.log(sumArray([1, 2, 3, 4, 5, 6])); => 21

let array = [4, 1, -3];

function sumArray(array){
	let sum = 0
	for(let i = 0; i < array.length; i++){
		sum += array[i];
	};
	return sum
}

console.log(sumArray(array));

// 6. Prime Numbers
//	Step One
//	Write a function called checkPrime that will test whether a 
//	number is Prime. The function will return true (Boolean) if Prime, 
//	false if not. Hint: Check every number up to the square root. To 
//	do this, try a for loop.

function checkPrime(num){
	for(let i = 2; i < num; i++){
		if(num % i === 0){
			return false
		} 
	}
	return true;
}

console.log(checkPrime(5));
console.log(checkPrime(28));

//	Step Two
//	Write another function called printPrimes that will print 
//	(console log) all the Primes up to an arbitrary limit. For example, 
//	if you invoke your function with printPrimes(97), it will print all 
//	the Prime numbers up to and including 97. This function can call on 
//	the previous checkPrime function.

function printPrimes(num){
	let allPrimes = [];
	for(let i = 1; i <= num; i++){
		if (checkPrime(i) === true){
			allPrimes.push(i);
		}
	}
	return console.log(allPrimes); 
}

printPrimes(97);


