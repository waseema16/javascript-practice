console.log("waseema");let a=1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}
let obj = {
    mame:"waseema",
    role:"programmer",
    class:"BCA",
}
for (const key in obj) {

        const element = obj[key];
        console.log(key,element)
}
for (const char of "waseema") {
    console.log(char)
}
let i=0;
while (i<5) {
    console.log(i)
    i++;
}
let s=10;
do {
    console.log(s)
    s++;
} while (s<6);
function yes(my) {
    console.log("Hey" + my + "I am good.")
    console.log("Hey" + my + "I am not good.")
    console.log("Hey" + my + "I am is good.")
    console.log("Hey" + my + "I am was good.")
}
yes("saba")
yes("waseema")
yes("lubna")
function sum(a,b) {
    return a+b
}
result =sum(a+b)
console.log("this is my result",result)