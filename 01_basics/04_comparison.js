/*
console.log(2 > 1); //true;
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
*/

//Prob arrives when you don't compare same data types!
console.log("2" > 1) //true  js converts "2" into number automatically
console.log("02" > 1) //true

console.log(null > 0) //false cz null is an empty value
console.log(null == 0)//false
console.log(null >= 0)//true 
//An equality check == and comparisons >< >= <= work differently.
//Comparisons convert null to a number, treating it as 0.
//that's why null>=0 is true and null>0 is false.

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false

//=== checks val as well as its data type
console.log("2" === 2) //false 
console.log("2" == 2) //true cz conversion is happening here