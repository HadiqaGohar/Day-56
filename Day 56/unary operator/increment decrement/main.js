////Increment ++ increases a variable by 1:

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
//Decrement -- decreases a variable by 1:

let count = 2;
count--;        // works the same as counter = counter - 1, but is shorter
alert( count ); // 1

let counter1 = 1;
let aa = ++counter1; // (*)

alert(aa); // 2
//In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

//Now, let’s use the postfix form:

let counter2 = 1;
let a = counter2++; // (*) changed ++counter to counter++

alert(a); // 1


let counter3 = 0;
counter3++;
++counter3;
alert( counter3 ); // 2, the lines above did the same
//If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let counter4 = 0;
alert( ++counter4 ); // 1
//If we’d like to increment a value but use its previous value, we need the postfix form:

let counter5 = 0;
alert( counter5++ ); // 0


//The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.



let counter6 = 1;
alert( 2 * ++counter6 ); // 4


let counter7 = 1;
alert( 2 * counte7r++ ); // 2, because counter++ returns the "old" value
//Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

//While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

//We advise a style of “one line – one action”:

let counter8 = 1;
alert( 2 * counter );
counter8++;