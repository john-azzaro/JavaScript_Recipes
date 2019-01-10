"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. 
// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Check to see if two provided strings are anagrams of each other.
//       One string is an anagram of another if it uses the same chatacters in the same quantity.
//       Only consider characters, not spaces or punctuation.
//       Capital letters are considered the same as lower case.
//
//       examples
//       anagrams('rail safety', 'fairy tales') --> true
//       anagrams('RAIL! SAFETY!', 'fairy tales') --> true
//       anagrams('Hi there', 'Bye there')  --> false

// What is the BEST solution? 
//     1. 

// What are the special components of these solutions?:  
//     1. RegExp (i.e. )
//     2. character maps

// What needs work?
//     1. RegExp dont seem to work correctly in VSCode.  Second solution carries until this is hammered out.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Notes on edge cases: 
//       Only consider characters, not spaces or punctuation.
//       Capital letters are considered the same as lower case.
// 
// RegExp (regular expressions) can be used to manipulate strings and very easily remove all spaces and exclaimation marks from a string.
// 

    const word = "HI THERE!!!!";
    word.replace(/[^\w]/g, "").toLowerCase();



// Another thing is to rememebr how we generally solve any question that involves strings and comparisons between them
// is to generate character maps.  Character maps looks something like this:

//                             {                                
//                               H: 1,             
//                               e: 3,
//                               l: 2,
//                               o: 1,
//          "hello there" -->   "": 1,
//                               t: 1,
//                               h: 1,
//                               r: 1,
//                               !: 1
//                              }

//  One possible way to solve this question is to generate a character map out of both the strings you are given.
// so if you are given the strings "hello" and "lleho", you would get the same character map.
// so you could iterate over one fo the character maps and compare all the letters inside of it and then with all the ones in the 
// other one.

// one gotcha though when using character maps like this.
// when you want to compare the two character maps of "hello" and "lleho", you might think first iterate through the object with 
// the letters and then compare all the properties and values of "lleho"

// If you had "hellos" (with an added s) and "lleho" (no s), and you loop through the "hellos" object, the loop would gop through 
// letter, BUT when it came to the s in "hellos", it would essentially be missed.  The basic solution would be to count the characters
// or the keys in the object.





// SOLUTION 1 ///////////////////////////////////////
// For a solution involving character maps, we need to first:
//  1. build a charater map out of string A and string B.
//  2. compare all the characters inside the two maps.

// so first we need to make a character map out of both stringA and stringB.
// However, we dont want to build two for loops.
// Instead, we need to write a helper function (a seperate function that works with the main anagrams function) to build 
// a character map for us. 

// the helper function is going to build a character map for a given string.
// we only have to write this logic one time and reuse it when we need it.
// we create the function buildCharMap and pass a string into that function.
// Inisde the helper function, we first create an empty object that will serve as out character map 
// We then iterate through our string, and for every character in our string we will add it to our character map.

// but also remember that the string needs to be lowercase and needs to strip out spaces and any punctuation.


// function anagrams(stringA, stringB) {

// }

// function buildCharMap(string) {
//     const charMap = {};
//     for (char of string.replace(/[^\w]/g), '').toLowerCase() {

//     }
// }






// Solution 1 /////////////////////////////////

const numbers = [10,270, 376, -4, 277];
numbers.sort();

console.log(numbers);














function anagrams(stringA, stringB) {

}