// functions on javascript
function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are cute")
}
nice("waseema")
nice("ayesha")
// adding 2 or 3 numbers in a function
function sum(a, b, c = 3) {
    // c= 3 is a default parameter value
    // console.log(a+b)
    return a + b + c
}
result = sum(3)
// sum = 3 will run as nan that is not a number it seems an error
result1 = sum(10, 15)
result2 = sum(5, 20)
result3 = sum(4, 6)
// replace c[3] with the value 2 in result 4 (ans=9+8+2 =19)
result4 = sum(9, 8, 2)
console.log("the sum of these numbers is: ", result)
console.log("the sum of these numbers is: ", result1)
console.log("the sum of these numbers is: ", result2)
console.log("the sum of these numbers is: ", result3)
console.log("the sum of these numbers is: ", result4)
// arrow function(complex function)
// funtion is used to interpass each other
const func = (x) => {
    console.log("I am an arroe functoin ", x )
}
// it is reused function with intermediate syntax
func(30);
func(60);
func(90);