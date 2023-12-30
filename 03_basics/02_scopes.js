//global scope
var c = 100

if(true){ //block scope
    let a =10;
    const b =20;
    var c =30;
}

//console.log(a);//a is not defined
//console.log(b);//b is not defined
console.log(c);//30  var 


let p = 300
if(true){
    let p =10;
    const q =20
    console.log("INNER", p)
}
console.log(p);
/*
INNER 10
300
*/

/////**NESTED SCOPES////////////// */ small kids can ask icecream from elders but not vice-versa
//CLOSURE/child func can access parent variable but parent function can't access child variable
function one(){
    const username="hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)   -> (error scope closed so comment this line)
    two()
}
one() //hitesh

if(true){
    const username = "tanya"
    if(username === "tanya"){
        const website=" youtube"
        console.log(username + website);
    }
    //console.log(website) ->error scope closed in if loop
}
//console.log(username) -> error

//output-> tanya youtube


//////////////+++++++++++++++++++++interesting+++++++++++++///////////

console.log(addone(5))  //6
function addone(num){   //function declaration only
    return num+1
}


// addTwo(5)  -> ERROR(Cannot access 'addTwo' before initialization)
const addTwo = function(num){  //function declaration plus holding in a variable
    return num +2
}









