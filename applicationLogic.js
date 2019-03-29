"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Application Logic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What are logical assertions?
//     2. What are operators?
//       3. What is an arithmatic operator?
//       4. What are increment and decrement operators?
//       4. What is an assignment operator?
//       5. What is a comparison operator?
//       6. What is a logical operator?
//       7. What is a bitwise operator?
//     8. What are the 3 logical assertions?
//     9. What is the difference between strict and loose equality?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful information about application logic from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What are logical assertions?
//////////////////////////////
    - ASSERTIONS are statements that evaluates to either TRUE or FALSE.
    - LOGICAL ASSERTIONS allow us to write conditional logic in JavaScript
*/

/*
2. What are operators?
/////////////////////
     - OPERATORS are used along with variables and constants to create EXPRESSIONS.
     - EXPRESSIONS can implement logic and algorithms.
     - There are 5 important operators in JavaScript:
        -- Arithmatic       
        -- Assignment 
        -- Comparison 
        -- Logical 
        -- Bitwise 
*/

/*
3. What is an Arithmatic operator?
//////////////////////////////
        -- Arithmatic operators are used for performing calculations.
        -- Arithmatic operators are just like mathmatical calculations.
        -- There are 6 important arithmatic operators to know:

                Addition         +       -- adds numbers together.
                Subtraction      -       -- subracts numbers.
                Multiplication   *       -- multiplies numbers.
                Division         /       -- divides numbers
                Exponentation    **      -- to the nth power.
                Remainder        %       -- dividing something and there is no decimal point.

        -- The arithmatic operators are demonstrated below:
*/
                let x = 10;
                let y = 5;

                console.log(x + y);       //-> 15    
                console.log(x - y);       //-> 5
                console.log(x * y);       //-> 50
                console.log(x ** y);      //-> 100000
                console.log(x % y === 0); //-> true (i.e. 0)



/*
4. What are increment and decrement operators?
///////////////////////////////////////////
        -- There are also INCREMENT and DECREMENT operators that add or subtract from the a current count.

                -- INCREMENT uses a double-plus (i.e. ++) to add to a current count.
                        -- remember, x++ is equivalent to x = x + 1.
                        -- in other words, we read the value of x, then add 1, then assign it to the variable x.

                -- DECREMENT uses a double-minus (i.e. --) to subract from a current count.
                        -- remember, x-- is equivalent to x = x - 1.
                        -- in other words, we read the value of x, then subtract 1, then assign it to the variable x.

 */
                let a = 10;
                let b = 10;

                console.log(a);    //-> 10     This will show the value of x, which we have set to 10.
                console.log(++a);  //-> 11     This will add an increment of 1 to the value of x for a sum of 11.
                console.log(b++);  //-> 10     Because the increment is AFTER x, you will print the value of X first, but then...
                console.log(b);    //-> 11     ... when you log the value of x again, it will show 11.

                let c = 10;
                let d = 10;

                console.log(c);    //-> 10     The value of C is 10.
                console.log(--c);  //-> 9      Using decrement, the value of c is subtracted by 1 for a value of 9.
                console.log(d--);  //-> 10     Same as with the increment, putting the decrement symbols after will return 10...
                console.log(d);    //-> 9      ... but when you call d again, it will show it was decremented by 1 for a total of 9.



/*
5. What is an assignment operator?
/////////////////////////////////
        - With increment and decrement operators, you are able to add and subtract by 1.
        - However, if you wish to add or subtract more, you need an ASSIGNMENT OPERATOR.
*/
                let e = 10;
                let f = 10;
                let g = 10;

                console.log(e += 5);  //-> 15     10 + 5 = 15
                console.log(f -= 5);  //-> 5      10 - 5 = 5
                console.log(g *= 5);  //-> 50     10 * 5 = 50
                

/*
6. What is a comparison operator?
/////////////////////////////////
        - a comparison operator is used to compare the value of a variable with something else.
        - a comparison operator will evaluate either TRUE or FALSE.
        - a RELATIONAL operator uses >, <. >=, <+.
*/
                let h = 1;

                console.log(h > 1);   //-> false     If h=1 and we ask if h is greater than 1, this is FALSE.
                console.log(h < 1);   //-> false     If h=1 and we ask if h is less than 1, this is FALSE.
                console.log(h >= 1);  //-> true      If h=1 and we ask if h is greater than or equal to 1, this is TRUE.
                console.log(h <= 1);  //-> ture      If h=1 and we ask if h is less than or equal to 1, this is TRUE.



/*
7. What is an equality operator and what are the difference between strict and loose?
////////////////////////////////////////////////////////////////////////////////////
        - There are also EQUALITY OPERATORS.
        - There are two types of equality operators: 
                -- STRICT equality.
                -- LOOSE equalosty.
*/
/*              -- STRICT equality compares the data type of the two items being compared.
                        -- If the two data types are NOT the same, then it returns FALSE.
                        -- If the two data types ARE the same, then it checks to see if they are the same value.
                                -- If the two data types are BOTH the same AND have the same value, then TRUE.
                                -- If the two data types are BOTH the same BUT are NOT the same value, then FALSE.
*/
                                   console.log(25 === 25);   //-> true     This is true because both operands are the same data type (number) and value (25);
                                   console.log(14 === 25);   //-> false    This is false because although they are both numbers, they have different values.
                                   console.log('1' === 1);   //-> false    Theis is false because although they are the same value, they are different types.
                                   console.log('hi' === 25); //-> false    This is false because they are different data types AND different values.

                                   console.log(25 == 25);    //-> true     This is true because they are both the same value.
                                   console.log('25' == 25);  //-> true     This is true because although they have different data types, loose equality
                                                             //            coeerce (convert) the data type so that they are the same and THEN compare values.

 /*
                        -- If you want to check if something is not equal to a given value, you add an exclaimation point to the beginning of it.
*/
                                   let i = 1
                                   console.log(i !== 1);     //-> false    This is false because i is NOT equal to 




/*
What is control flow?
/////////////////////
        - control flow allows your code to take certain actions based on certain scenarios.
        - control flow allows you to dictate how your code runs under different conditions or until a certain condition is met.
        - control flow can be achieved in 2 ways:
                -- conditional (if, else-if, else),
                -- try/catch/finally
*/

/*
what is a conditional statement?
////////////////////////////////
*/

/*
What is a switch statement?
///////////////////////////
https://www.kirupa.com/html5/conditional_statements_if_else_switch_javascript.htm
*/


/*
8. What is a ternary operator?
//////////////////////////////
        - A TERNARY OPERATOR is short-cut conditional statement.
        - A ternary operator is the only JavaScript operator that takes three operands. 
        - In the example below, we want to determine whether a person can drink (or not).
        - Also note that although you dont need the parentheses fro the logical expression, it does help in visual identification.

                --    let canIDrink        -- is the keyword and variable name.
                --     (age >= 21)         -- This is the logical expression, specifically IF age is greater or equal to 21...
                --          ?              -- This is the operator that links the conditional of the value to canIDrink.
                -- 'Yes, you can drink'    -- The value of canIDrink if the condition is true.
                --          :              -- otherwise (if no previous match)...
                -- 'No, you cannot drink'  -- The value returned if the condition is false.
*/
                let age = 21;
                let canIDrink = (age >= 21) ? 'Yes, you can drink' : 'No, you cannot drink';    
                console.log(canIDrink);   //-> Yes, you can drink
/* 
        - Additionally, a ternary operator is right-associative, so conditions can be chained together.
        - note that the format can be a single line or multiple lines depending on your format preference.
*/
                let direction = 'right'
                let myDirection = (direction == 'left') ? 'wrong direction' : (direction == 'right') ? 'right!' : 'where are you going?';
                console.log(myDirection);
                
                //or//

                let myNumber = 4;
                let result = (myNumber == 1) ? "a" 
                           : (myNumber == 2) ? "b" 
                           : (myNumber == 3) ? "c" 
                           : (myNumber == 4) ? "d" 
                           : "e";
                console.log(result);
              














/*
7. What are the 3 Logical Operators?
///////////////////////////////////
    - There are three essential logical operators: &&, ||, and !.
   
            && -- "and" evaluates as true if both values are true.
                    for example: 
                                const foo = true
                                const bar = false
                                const ree = true
                                
                                foo && bar;     // false
                                foo && ree;     // true

            || -- "or" evaluates as true if one of the values evaluates as true.
                    for example:                             
                                const foo = true
                                const bar = false
                                const ree = true

                                foo || bar       // true
                                foo || ree       // false

            !  -- "exclamation" negates a boolean value.
                    for example:
                                const foo = true
            
                                foo;             // true
                                !foo;            // false
*/

/*
3. What is the difference between strict and loose equality?
///////////////////////////////////////////////////////////

*/






/*

 
ABOUT TRUTH TABLES...
 
   A  B       !A        A && B       A || B         A -> B       A === B
------------------------------------------------------------------------
   T  T        F          T            T              T             T
   T  F        F          F            T              F             F
   F  T        T          T            T              T             F
   F  F        T          F            F              T             T
 
*/