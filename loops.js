//  for loop
let a =1;
for (let i = 0; i < 100; i++) {
    console.log(a+i); 
}

let obj = {
    name : "waseema",
    std : "II BCA",
    sub : "wep development"
}
// for in loop(object)[key and objrct display]
for (const key in obj) {
        const element = obj[key];
        console.log(key)
        console.log(element)
        console.log(key,element)
}
// for of loop[used for iteration](iteration = array)
// while loop
let i = 0;
while (i<10){
    console.log(i)
    i++;
}
// do while loop
let p = 0;
do {
    console.log(p)
    p++;
} while (p<6);
// wrong iteration of while loop
let x = 100;
do {
    console.log(x)
    x++;
} while (x<6);