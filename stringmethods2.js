"use strict";
//1.. Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.


// function calculateAverage (list) {
//   if (list.length === 0) return 0;
//   else {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++)
//         sum += list[i];
//     return sum / list.length;
//   }

// }

// console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(calculateAverage([]));


// 2.  The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
// Note: Math.pow and some other Math functions like eval() and ** are disabled.
// function rasingPower (number, power) {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= number;
//     }
//     return result;
// }

// console.log(rasingPower(3,2));
// console.log(rasingPower(2,3));
// console.log(rasingPower(10,6));

// 3. Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// 4. Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//  let total = 0;
//  total = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
//  return total; 
  
// }
// console.log(goals(5, 10, 2));

// /5. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// function lovefunc(flower1, flower2){
//     if ((flower1 % 2 === 0 && flower2 % 2 !== 0) ) {
//         return true; 
//     } else {
//         return false; 
// }
// }
// console.log(lovefunc(34, 35));

//6.  lock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// function past(h, m, s){
//     return (h * 3600 + m * 60 + s) * 1000;
//   }
//   console.log(past(11, 23, 44));

// 7/ In this kata you will create a function to check a non-negative input to see if it is a prime number.
// The function will take in a number and will return True if it is a prime number and False if it is not.
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// function isPrime(n) {
//     }

//8. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// function countPositivesSumNegatives(input) {
//     let positive = 0;
//     let negative = 0;

//     for (let i = 0; i < input.length; ++i) {
//         if (input[i] > 0)
//             ++positive;
//         else
//             negative += input[i];
//     }

//     return [positive, negative];
// }

// 9.


// 10 Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name) {
//     let strs = name.split(" ");
//     let initials = strs.map(word => word[0].toUpperCase()).join(".");
//     return initials;
// }

// console.log(abbrevName("Mannopov Narimonjon"));






//   // 9 Given the string representations of two integers, return the string representation of the sum of those integers.
//   function sumStrings(a,b) { 
//     const num1 = +a;
//       const num2 = +b;
//       const sum = num1 + num2;
//       return sum.toString();
//   }
//   console.log(sumStrings("33", "44"));


