const score = 400
console.log(score);

//explicitally telling that data type is number thru objs
const balance = new Number(100)
console.log(balance);//[Number: 100]    prototype in browser

console.log(balance.toString());//100
console.log(typeof (balance.toString()));//string
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00

//PRECISION
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));//23.9

const otherNumber2 = 123.8966
console.log(otherNumber2.toPrecision(3));//124

const otherNumber3 = 1123.8966
console.log(otherNumber3.toPrecision(3));//1.12e+3  (in exponents)
console.log(otherNumber3.toPrecision(4));//1124

//ToLocaleString()
const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000  //commas will come acc to US standards
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 (in indian standard)



//***********MATHS***********library*/
console.log(Math);//Object [Math] {}  (obj that has a lot of properties see in browser)

//ABS
console.log(Math.abs(-4));//4  //only - -> +
console.log(Math.abs(4)); //4

//ROUND
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5

//FLOOR AND CEIL
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.floor(4.9));//4


console.log(Math.min(4,3,2,9,1));//1

//RANDOM (vals comes in bw 0 and 1 always and everytime you run, new val comes)
console.log(Math.random());//0.5883471639883551
console.log(Math.random());//0.07748462352813612

console.log(Math.random()*10);//2.658193445516226
console.log((Math.random()*10) + 1) //min val will come 1 for sure

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)