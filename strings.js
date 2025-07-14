// strings in js(it stores and manipulate text)
// strings are immutable(unchangable)
console.log("This is strings")
let a = "waseema";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[7])
// length of string
console.log(a.length)

let Name = "Waseema";
let friend = "Ayesha";
console.log("His name is " + Name + " and his friend name is " + friend)
// it is a template literals using backtick(``)
// it inserting variables directly in template is called string interpolation
console.log(`his name is ${Name} and his friends name is ${friend}`)
// escape sequence characters(rarely used)
let s = "sabahath";
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.length)
// slice a string
console.log(s.slice(2, 5))
console.log(s.slice(1))
// replace
console.log(s.replace("saba", "ss00"))
// concatenation of strings
// plus operator are also used for concatenate
console.log(s.concat("hai", a, friend, Name, "lubna"))
// removing white space using string
let name = " Waseema ";
let a_name = name.trim();
console.log(a_name)
console.log(name[2])
// many more functions are charAt, Indexof, stack overflow replace function,ends with, starts with