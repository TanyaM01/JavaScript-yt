//Objects
//objs can be declared using 2 ways-> like literal, like constructor

//singleton: whenever we make obj through constructor then singleton obj is created

//object.create ...constructor method

//object literals
//->declaring symbol
const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name : "tanya",
    "full name": "maurya",
    mySym : "mykey1",  //not like this
    //to use like symbol, write in []
    [mySym2] : "mykey2",  
    age: 18,
    location : "jaipur",
    email : "tanya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//HOW TO ACCESS OBJS
console.log(JsUser.email);//tanya@google.com
console.log(JsUser["email"]);//tanya@google.com

console.log(JsUser["full name"])//maurya

console.log(JsUser.mySym); //mykey1
console.log(typeof(JsUser.mySym));//string (not symbol!)
console.log(JsUser[mySym2])//mykey2
console.log(typeof(JsUser[mySym2]))

/*
JsUser.email = "tanya@abc.com"
Object.freeze(JsUser)
JsUser.email=  "tanya@123.com"
console.log(JsUser);
{
  name: 'tanya',
  'full name': 'maurya',
  mySym: 'mykey1',
  age: 18,
  location: 'jaipur',
  email: 'tanya@abc.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key2)]: 'mykey2'
}
*/


//Adding functions in objs
JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting)//[Function (anonymous)]   (function reference has come)
console.log(JsUser.greeting())//Hello Js User  //undefined

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting2()) //Hello Js User, tanya  //undefined
