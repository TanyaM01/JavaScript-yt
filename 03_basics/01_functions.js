//FUNCTIONS

function sayMyName(){
 console.log("tanya")
}
sayMyName();//tanya

function addTwoNumbers(number1, number2){  //parameters
    console.log(number1+number2)
}
addTwoNumbers(3,4) //7 //passing arguments
addTwoNumbers(3,"4")//34
addTwoNumbers(3,"a")//3a
addTwoNumbers(3,null)//3
const result = addTwoNumbers(3,5)
console.log("Result:",result);//Result: undefined  ?


function addNumbers(number1, number2){  //parameters
    /*let result2 = number1+number2;
    return result2
    OR
    */
    return number1+number2
}
const result2 = addNumbers(3,5)
console.log("Result:",result2);//Result: 8


function loginUserMessage(username = "sam"){  //default
    if(username === undefined){ //if(!username)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in!`
}
//loginUserMessage("tanya")
console.log(loginUserMessage("tanya"));//tanya just logged in!
console.log(loginUserMessage(""))//passing empty string//just logged in!
console.log(loginUserMessage())//please enter a username
                               // undefined