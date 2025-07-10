let a = 5;
let b = 10;
// arithmetic operator
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a%b =",a%b);
console.log("a**b =",a**b);
a+=4;
a=a+4;
// assignment operator
console.log(a);
console.log("a+b =",a+=b);
console.log("a-b =",a=a+b);
console.log("a*b =",a*=b);
console.log("a/b =",a/=b);
console.log("a%b =",a%=b);
console.log("a**b =",a**=b);
a = 5;
a++;
// post increment oprator
console.log("increment operator",a)
b = 3;
++b;
// pre increment oprator
console.log("increment operator",b)
a = 5;
a--;
// post decrement
console.log("decrement operator",a)
b = 3;
--b;
// pre decrement
console.log("decrement operator",b)
a = 's';b ='n';
// comparison operator
console.log("equal to",a == b);
a = '5';b ='5';
console.log("equal to",a === b);
console.log("equal to",a != b);
console.log("equal to",a !== b);
console.log("equal to",a > b);
console.log("equal to",a < b);
console.log("equal to",a >= b);
console.log("equal to",a <= b);
// logical oprator
console.log(0 || "Hello");/*and*/
console.log("hi" && 42);/*or*/
console.log(! "");/*not*/
// ternary operator
let age = 25;
let result = age >= 18 ?"adult" : "not adult" ;
console.log(result);
// another method
let results = age >= 18 ? console.log("adult") : console.log("not adult") ;
// switch statement explore on MDN documents