"use strict";
// 1. Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.


// function removeMark(str) {
//     return str.slice(0, str.length - 1);
// }
// console.log(removeMark("Hello, world!"));



// Removing only one element from a string

// function removeMark(str) {
//     return str.replace("!", "")
// }
// console.log(removeMark("Hello, world!"));


// Removing all the same elements from a string

// function removeMark(str) {
//     return str.replace(/!/g, '');
// }
// console.log(removeMark("Hello, world!"));


// Removing with  substr() method
// function removeMark(str) {
//     return str.substr(0,12);
// }
// console.log(removeMark("Hello, world!"));


// function removeMark(str) {
//     return str.replaceAll("!", "")
// }
// console.log(removeMark("Hello, world!"));



//2.  In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, 
// representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.

// function findDifference (a, b) {
//     let listA = a[0] * a[1] * a[2];
//     let listB = b[0] * b[1] * b[2];
//     return Math.abs(listA - listB);
// }

// console.log(findDifference([2, 2, 3], [5, 4, 1]));


// 3. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//     return Math.abs(num) * -1;
//   }
// console.log(makeNegative(-3));

// -----------------------------------------------------------------------
// function makeNegative (num) {
//     if (num < 0) {
//         return num;
//     }
//      else {
//         return num*-1;
//     }
// }

// console.log(makeNegative(3));

// 4 Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
// function flickSwitch(arr){
//     return [];
//   }


//   function flickSwitch(arr) {
//     let word = true;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "flick") {
//             word = !true;
//         } else {
//             arr[i] = word;
//         }
//     }
//     return arr;
// }

// console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); 

// 5.If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// function excludingVatPrice(price) {
//     if (price === null) {
//         return -1;
//     }
//     const originalPrice = price / 1.15;
//     return originalPrice.toFixed(2) 
// }

// console.log(excludingVatPrice(230.00));
// console.log(excludingVatPrice(null));   

// 6. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// // You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
// function removeChar(str) {
//     return str.slice(1, -1);
// }


// console.log(removeChar("Narimonjon")); 



// 7.Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(strCount("Hello", "e"));


// 8.When provided with a letter, return its position in the alphabet.
// function position(letter) {
//     const lowerCaseLetter = letter.toLowerCase();
//     switch(lowerCaseLetter) {
//         case 'a':
//             return "Position of alphabet: 1";
//         case 'b':
//             return "Position of alphabet: 2";
//         case 'c':
//             return "Position of alphabet: 3";
//         case 'd':
//             return "Position of alphabet: 4";
//         case 'e':
//             return "Position of alphabet: 5";
//         case 'f':
//             return "Position of alphabet: 6";
//         case 'g':
//             return "Position of alphabet: 7";
//         case 'h':
//             return "Position of alphabet: 8";
//         case 'i':
//             return "Position of alphabet: 9";
//         case 'j':
//             return "Position of alphabet: 10";
//         case 'k':
//             return "Position of alphabet: 11";
//         case 'l':
//             return "Position of alphabet: 12";
//         case 'm':
//             return "Position of alphabet: 13";
//         case 'n':
//             return "Position of alphabet: 14";
//         case 'o':
//             return "Position of alphabet: 15";
//         case 'p':
//             return "Position of alphabet: 16";
//         case 'q':
//             return "Position of alphabet: 17";
//         case 'r':
//             return "Position of alphabet: 18";
//         case 's':
//             return "Position of alphabet: 19";
//         case 't':
//             return "Position of alphabet: 20";
//         case 'u':
//             return "Position of alphabet: 21";
//         case 'v':
//             return "Position of alphabet: 22";
//         case 'w':
//             return "Position of alphabet: 23";
//         case 'x':
//             return "Position of alphabet: 24";
//         case 'y':
//             return "Position of alphabet: 25";
//         case 'z':
//             return "Position of alphabet: 26";
//         default:
//             return "Error";
//     }
// }


// console.log(position("Y")); 


// function position(letter){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
//   }




// 9.Write a function which takes a number and returns the corresponding ASCII char for that value.
// function getChar(c){
//    return c.charCodeAt()
//   }
//   console.log(getChar("A"));



// function getChar(c) {
//     return String.fromCharCode(c)
//   }

// 10.What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// function addLength(str) {
//     let string = str.split(' ');
//     let result = string.map(word => `${word} ${word.length}`);
//     return result;
// }

// console.log(addLength("you will win")); 
