"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method:  .trimRight()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     string.trimRight()
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .trimRight() removes white space from the END of the string.
//      •
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Trim the extra white spaces at the END of a string.
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Trim the extra white spaces at the END of a string.

const myString = "     This is my string     ";

function trimIt(string) {
  const trimmedString = string.trimRight();
  console.log(trimmedString);
}

console.log(myString); //      This is my string
trimIt(myString); //      This is my string
