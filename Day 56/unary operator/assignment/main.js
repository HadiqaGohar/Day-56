let x = 2 * 2 + 1;

alert( x ); // 5


// assignment = return value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

//channing assignment
let d, e, f;

d = e = f = 2 + 2;

alert( d ); // 4
alert( e ); // 4
alert( f ); // 4

cc = 2 + 2;
bb = cc;
aa = cc;