"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .endsWith()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//  
//      string.endsWith('searchValue', length)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .endsWith() determines whether a string ends with the characters of a specified string.
//      • .endsWith() will return either TRUE or FALSE.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//       EXAMPLE 1: Create a function that evaluates the end value of a string as either true or false. 
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Create a function that evaluates the end value of a string as either true or false. 

const myString = "This is a string and it is amazing";

function endsWithValue(string, searchValue) {
  const endsWith = string.endsWith(searchValue);
  console.log(endsWith);
}

endsWithValue(myString, 'amazing');              // true