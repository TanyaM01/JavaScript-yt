//DATA TYPES - 2 types

//PRIMITIVE AND NON_PRIMITIVE  

//PRIMITIVE (call by val type)
//7 types: String, Number, Boolean, Null, Undefined, Symbol, 

//NON-PRIMITIVE (reference type)
//3 types: Array, Objects, Functions

//is js dynamically typed lang or statically typed lang?
//JavaScript is a dynamically typed language.
//In dynamically typed languages all type checks are performed in a runtime, only when your program is executing.
//So this means you can just assign anything you want to the variable and it will work.

const score =100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false

const bigNumber = 3456778098003987337333333222n  //bigint if represented by n

//Non-primitive
const heroes = ["shaktiman" , "naagraj", "doga"]
let myObj = {
    name: "tanya",
    age:22,   
}
const myFunction = function() {
    console.log("Hello")
}
console.log(typeof myFunction)//function obj
console.log(typeof heroes)// obj
console.log(typeof bigNumber) //bigint
/*
Type	Result
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function "function"
Any other object	"object"
*/



//*************//MEMORY */
/*
 STACK MEMORY AND HEAP MEMORY


 all primitive data types use STACK memory
 all non-primitive data types use heap memory

Stack(Primitive), Heap(Non-primitive)
whenever stack memory is used, it means we get copy of the variable
whenever object is defined in heap memory then there we get a reference of the original value so whatever is changed is changed in org value

*/

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
console.log(anothername); //hiteshchoudharydotcom
anothername= "chaiaurcode"

console.log(myYoutubename);//hiteshchoudharydotcom
console.log(anothername);//chaiaurcode


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);//hitesh@google.com
console.log(userTwo.email);//hitesh@google.com

