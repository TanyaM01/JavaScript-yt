let score = 33
let score2 = "33"
let score3 = "33abc"
let score4 =null
let score5 = undefined
let score6 =true

console.log(typeof (score)); //number
console.log(typeof (score2)); //string
console.log(typeof (score3)); //string
console.log(typeof (score4)); //object
console.log(typeof (score5)); //undefined
console.log(typeof (score6)); //boolean




let valueInNumber2 = Number(score2) ; //guarantee that score2 is conevrted into number
console.log(typeof valueInNumber2) //number

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3) //Nan

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);//number
console.log(valueInNumber4) //0

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);//number
console.log(valueInNumber5)//Nan

let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6);//number
console.log(valueInNumber6);//1


/*
"33 => 33"
"33abc" => Nan
true =>1
false=>0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);//true


let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean (isLoggedIn2)
console.log(booleanIsLoggedIn2);//false

let isLoggedIn3 = "tanya"
let booleanIsLoggedIn3 = Boolean (isLoggedIn3)
console.log(booleanIsLoggedIn3);//true

/*
1=>true
0=>false
""=>false
"tanya"=>true
*/

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);//string


//*****************OPERATIONS */

let value = 3
let negValue = -value;
console.log(negValue); //-3

/*
console.log(2+2); 
console.log(2-2); 
console.log(2*2); 
console.log(2**3); 
console.log(2/3); 
console.log(2%3); 
*/

let str1 = "Hello"
let str2 = " Tanya"
let str3 = str1 + str2
console.log(str3);//Hello Tanya

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+ 2 + 2) //122
console.log(1+ 2 + "2") //32

console.log(+true);//1
console.log(true);//true


let num1, num2, num3 
num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);//101

let gameCounter2 = 100;
++gameCounter2;
console.log(gameCounter2);//101







