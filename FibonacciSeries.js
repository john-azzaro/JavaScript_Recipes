"use strict";
// OBJECTIVE ////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Print out the n-th entry (i.e. the n in >> function fib(n) {...}) << in the fibonacci series.
//        The fibonacci series is an ordering of numbers where each number is the sum of the preceding two.
//         For example, the sequence [0,1,1,2,3,5,8,13,21,34] forms the first ten entries of the fibonacci series.

//         Example: fib(4) === 3

// SUMMARY //////////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?:  
//    1. Profile differences in runtime complextiy between different solutions

// What is the BEST solution? 
//     1. The best way is to generate the entire series up to the nth entry and return the last entry.

// What are the special components of these solutions?:  
//     1. iterative
//     2. recursive

// What needs work?
//     1. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Basically with a fibonacci sequence, you take the first two numbers, add them together, and then you get a new number... then repeat.

*/


///// SOLUTION 1 //////////////////////////////////
/* 
 The trick to this solution is that the first two numbers of ther seuqnece cannot be effectivly generated by a for loop.
 The algorithm is to look at the previous two number and add them together.
*/


// 1. Declare a function that holds an array.
//    - now because we know that the first two numbers of a fibonacci sequence are 0,1, we can insert that into our result array by default.
// 2.  now we need to have a for loop that will iterate from i = 2 (so start at 2) then iterate to n.
// 3. then we need to pull out the previous 2 records of the result array.


function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        const a = result[result.length - 1];   // first time the loop runs, i will be be equal to 2... so A will be recieving the second element.
        const b = result[result.length - 2];   // second time the loop runs, i will be equal to 2 - 2, which will initially give us 0.
        result.push(a + b)                     // push a + b into result.
    }
    return result[result.length - 1];
}

console.log(fib(4));