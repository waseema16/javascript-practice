// variables
// case sensitive
// variable name should be only letters digits and underscore $ is allowed.it can be first character of variable
// not even space
// reserved words cannot be variable name(if,else,console,etc,.)
var mother = "ayesha";/*global scope not supported by ecmascript.var was not used widely redeclare and update*/
let father = "jameel" ;/*block scope redeclare and update. change= yes*/
const child = "waseema";/*block scope cannot redeclare and update.change= no*/
// data types
// primitive data types.number,string,boolean,undefined,null,bigint,symbl.
// non primitive data types.objects and arrays.
console.log(mother);
console.log(father);
console.log(child);
console.log(father + mother);
console.log(father + father);
console.log(mother + mother);
console.log(father + mother + child);
mother = "jameel";
father = "ayesha";
console.log(mother);
console.log(father);
letter = 'a','b','c','d';/*strings*/
console.log(letter);
console.log(typeof letter);
num = 123;/*number*/
console.log(num);
console.log(typeof num);
isnum = true;/*boolean*/
console.log(isnum);
console.log(typeof isnum);
can = null;/*null*/
console.log(can);
console.log(typeof can);
sam = 13235674859050553456789;
console.log(sam);
console.log(typeof sam);
const student = /*object*/
    _name : "waseema",
    age : 20 ,
    cgpa : 65.5,
    ispass : true,
};
console.log (student);
console.log(student.age);/*object value*/
console.log(student._name);
// constant value is unchangable. but it can change in const->object->key.
// constant of object means its key  can change 
// objects is a psir of key and value;
// in student object _name can changable;
