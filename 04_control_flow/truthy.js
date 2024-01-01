const userEmail = "h@hitesh.ai"   //truthy
if(userEmail){
    console.log("Got user email") //Got user email
}else{
    console.log("don't have user email")
}

const userEmail2 = ""   //truthy
if(userEmail2){
    console.log("Got user email")
}else{
    console.log("don't have user email") //don't have user email
}

const userEmail3 = []   //truthy
if(userEmail3){
    console.log("Got user email") //Got user email
}else{
    console.log("don't have user email")
}

/*
falsy values
false, 0,-0,BigInt 0n, "", null, undefined, Nan

truthy values
"0", "false", " ", [], {}(empty obj), function(){} (empty func)
*/

/*
if(userEmail.length === 0){
    console.log("array is empty");
}
*/

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){  //checking keys ..passing empty obj
    console.log("object is empty");
}


//**************Nullish Coalescing Operator (??): null undefined */

let val1;
//val1 = 5 ?? 10
//console.log(val1); //5
val1 = null ?? 10
console.log(val1); //10
//checks safety of null val

let var1
var1 = undefined ?? 15
console.log(var1); //15

let val3;
val3 = null ?? 10 ??20
console.log(val3); //10 (first val)


////***********TERNARY OPERATOR */
//condition? true: false;

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80"): console.log("more than 80")
//more than 80