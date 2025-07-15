// arrays are mutable (changable)
let arr = [1,2,3,4,5,6]
// index =  0,1,2,3,4,5.
arr[0]=5666;
console.log(arr);
console.log(arr.length);
console.log(arr[0])
console.log(arr[3])
console.log(arr[5])
console.log(arr[2])
// javascript arrays are considered as objects
console.log(arr,typeof arr)
// arrays are converted into strings
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop(5))
console.log(arr);
console.log(arr.push("waseema"))
console.log(arr);
console.log(arr.shift())
console.log(arr);
console.log(arr.unshift("bca"))
console.log(arr);
b = [2,3,4]
c = [4,5,6]
delete arr[5];
console.log(arr);
console.log(arr.concat(b,c))
console.log(arr);
let numbers = [1,2,3,4,5]
console.log(numbers.splice(1,2))
console.log(numbers.splice(1,3,222,333))
console.log(numbers)
let num = [2,3,4,5,6,7]
console.log(num.slice(2,5))
console.log(num)
// array in loops
let a = [1,93,5,6,88]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});
let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}
for (const iterator of a) {
    console.log(iterator)
}
// map()[map filter reduce]
// creating square root of ar in newarr
let ar=[13,5,7,11]
let newarr = []
for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    newarr.push(element**2)
}
console.log(newarr)
// easy method of map()
let Newarr = ar.map((e,index,array)=>{
    return e**2;
})
console.log(Newarr)
// filter() function
const greaterThanSeven = (e) => {
    if(e>7){
        return true
    }
    return false
}
console.log(Newarr.filter(greaterThanSeven))
// reduce function
let arr2 = [1,2,3,4,5,6]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))