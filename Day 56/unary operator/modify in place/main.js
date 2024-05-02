let n = 2;
n = n + 5;
n = n * 2;
//This notation can be shortened using the operators += and *=:

let number = 2;
number += 5; // now n = 7 (same as n = n + 5)
number *= 2; // now n = 14 (same as n = n * 2)

alert( number ); // 14
//Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

//Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let num = 2;

num *= 3 + 5; // right part evaluated first, same as n *= 8

alert( num ); // 16