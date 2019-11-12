'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .pop()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.pop()
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .pop() removes the last item in an array.
//      • .pop() returns the last item in the array.
//      • .pop() changes the length of the array.
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Remove the last element from an array.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//      https://alligator.io/js/push-pop-shift-unshift-array-methods/
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



const myArray = ['alan', 'bob', 'charlie', 'dan', 'eliot', 'frank', 'greg'];

function removeLastItem(array) {
    const removeItem = array.pop();
    console.log(removeItem);
}

console.log(myArray);                 // [ 'alan', 'bob', 'charlie', 'dan', 'eliot', 'frank', 'greg' ]
removeLastItem(myArray);              // greg
console.log(myArray);                 // [ 'alan', 'bob', 'charlie', 'dan', 'eliot', 'frank' ]