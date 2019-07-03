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
// }