"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: ... (spread operator)
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      myFunction(...iterableObj);
//      
//
//
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • the spread operator is used to : expand arrays, combine arrays, and copy arrays and objects.
//      • When you use the spread operator to expand an array, you take the items in an array and "expand"
//        out of the array. In other words, each item in the array is convereted to a string.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1:
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Use the spread operator to convert an array into a string

const myArray1 = ["Hello", "there", "friend"];

function spreadIt1(array) {
    console.log(...array);
}

console.log(myArray1);                            // [ 'Hello', 'there', 'friend' ]
spreadIt1(myArray1);                              // Hello there friend




// EXAMPLE 2: 

const myString = "Howdy there partner";

function spreadIt2(array) {
    let convertToArray = [...array];
    console.log(convertToArray);
}

console.log(myString);                     // Howdy there partner
spreadIt2(myString);                       //  [ 'H','o','w','d','y',' ','t','h','e','r','e',' ','p','a','r','t','n','e','r' ]
