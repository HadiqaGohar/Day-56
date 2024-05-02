
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once


let a1 = 2;

let x = 1 + (a1 *= 2);

// The answer is:

// a = 4 (multiplied by 2)
// x = 5 (calculated as 1 + 4)



let a2 = "1"; // prompt("First number?", 1);
let b2 = "2"; // prompt("Second number?", 2);

alert(a2 + b2); // 12


let a3 = +prompt("First number?", 1);
let b3 = +prompt("Second number?", 2);

alert(a3 + b3); // 3


let a4 = prompt("First number?", 1);
let b4 = prompt("Second number?", 2);

alert(+a4 + +b4); // 3