'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .toString()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.toString()
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .toString() returns a string representing the specified array and its elements.
//      • .toString() essentially converts everything in an array to a string seperated by commas.
//      • .toString() is similar to .join() but you can specify something else instead a comma to 
//         seperate the elements in the array. 
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Convert an array into a string.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// EXAMPLE 1: Convert an array into a string.


const myArray = ['adam', 'barry', 'charlie', 'dan', 'ellie', 'frank'];


function convertToString(input) {
    const convertedString = input.toString();    
    console.log(convertedString);
}

convertToString(myArray);                          // adam,barry,charlie,dan,ellie,frank