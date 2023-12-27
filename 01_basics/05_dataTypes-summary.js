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