const user = {
    username : "tanya",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}

/*
user.welcomeMessage()//tanya , welcome to website   //welcomeMessage is a method so add()
user.username = "Sam"
user.welcomeMessage()//Sam , welcome to website
*/


console.log(this) //{}  empty obj  but when run in browser, you will see WINDOW OBJ(global obj)
/*
in before years, there was only one way to execute JS in browser only that JS engine was only in browser
now we have taken that engine out and have given them name such as node, deno etc
*/


/////*****ARROW FUNCTION */
/*
function chai(){
    let username ="hitesh"
    console.log(this.username); //undefined// if we console.log(this) then output-> various things 
}
chai()
*/

const chai = function(){
    let username ="hitesh"
    console.log(username);
}
chai()

//arrow funcn
const chai2  = () => {
    let username ="hitesh"
    console.log(username);
}

//() => {}

//Explicit return
const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(3,4))//7

//NOTE: if we wrap in curly braces then return keyword is req!

//Implicit return
const addtwo = (num1, num2) =>  (num1 + num2)
console.log(addtwo(3,4))//7

const addtwoo = (num1, num2) =>  ({username:"hitesh"})  //to return obj,paranthesis is req!
console.log(addtwoo(3,4))//{ username: 'hitesh' }





