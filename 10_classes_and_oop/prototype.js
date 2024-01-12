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
heroPower.heytanya()//ERROR




//INHERITANCE
const user={
    name: "chai",
    email: "chai@google.com"
}
const teacher ={
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: 'Js assignment',
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User