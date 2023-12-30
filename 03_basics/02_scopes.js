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
