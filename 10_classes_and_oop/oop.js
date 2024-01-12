//object literal
const user = {
    //properties
    username : "tanya",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from db");
        console.log(`Username: ${this.username}`)
        console.log(this) //curr context  in function context
    }
}
console.log(user.username);//tanya
console.log(user.getUserDetails());//tanya
/*
tanya
Got user details from db
Username: tanya
{
  username: 'tanya',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
*/
console.log(this); //{} global context

console.log(this); //{} when done in browser, you will get window object which is a global object



//obj2->user2
//constructor function (new)
//from where did you get this "new"

const date = new Date()
/*
this NEW keyword is a constructor function that allows you to create multiple instance withh a single obj literal
*/


function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
  }

  //return this (by default gets returned)
}
/*
const userOne  = User("tanya", 12, true)
const userTwo = User("ChaiAurCode",11,false)
console.log(userOne);
console.log(userTwo); //overrides userOne PROBLEM that's why write NEW

*/
const userOne  = new User("tanya", 12, true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne);//User { username: 'tanya', loginCount: 12, isLoggedIn: true, greetings: [Function (anonymous)] }
console.log(userTwo);//User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false , greetings: [Function (anonymous)]}
console.log(userOne.constructor); //[function:User]
//constructor property
/*
NEW
the moment we write new,
empty obj gets created which is called instance
constructor function call happens cz of new keyword
*/







