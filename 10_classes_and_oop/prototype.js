/*
let myName = "tanya   "
console.log(myName.length);//8
console.log(myName.trueLength)
*/

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//can you inject?
//heroPower.tanya()

Object.prototype.tanya = function(){
    console.log(`tanya is present in alll objecrts`);
}

//obj, array sabkei paas yei property chli gyi
heroPower.tanya()//tanya is present in alll objecrts
myHeros.tanya()//tanya is present in alll objects



Array.prototype.heytanya = function(){
    console.log("tanya says hello")
}
myHeros.heytanya()//tanya says hello"
//heroPower.heytanya()//ERROR




//INHERITANCE
const User={
    name: "chai",
    email: "chai@google.com"
}
const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //borrwing properties of TeachingSupport  //linking  objs
}

//linking  objs
Teacher.__proto__ = User  //now teacher can also access properties of User



//new approach-> Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//TeachingSupport accessing properties of Teacher



////
let anotherUsername = "ChaiAurCode    "
String .prototype.trueLength = function(){
    console.log(`${this}`);//ChaiAurCode
    //console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength()//True Length is: 11
"tanya".trueLength()//True Length is: 5
"iceatea".trueLength()//True Length is: 7