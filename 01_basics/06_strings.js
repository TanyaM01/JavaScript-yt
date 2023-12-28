const name = "tanya"
const repoCount = 50
console.log(name + repoCount+ " Value"); //tanya50 Value

//Strng interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string using objs of js
// writing 'hiteshhc' in its constructor
const gameName = new String('hiteshhc')  //if run in browser, see multiple methods , length=8

console.log(gameName[0]); //h
console.log(gameName.__proto__); //{} empty obj

console.log(gameName.length)//8
console.log(gameName.toUpperCase()) //HITESHHC
console.log(gameName.charAt(2)) //t
console.log(gameName.indexOf('t'))//2


const gameName2 = new String('hitesh-hc')
const newString = gameName2.substring(0,4) //(start,end-1)
console.log(newString)//hite



//SLICE AND SPICE 
/*
const anotherString = gameName2.slice(-8,4)
console.log(anotherString)//hite
*/
const array = [1, 2, 3, 4, 5];
// Syntax: array.slice(startIndex, endIndex-1)
const slicedArray = array.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]
console.log(array); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
/*
splice() Method:
The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

javascript
Copy code
const array = [1, 2, 3, 4, 5];

// Syntax: array.splice(startIndex, deleteCount, element1, element2, ...)
array.splice(1, 2, 6, 7);

console.log(array); // Output: [1, 6, 7, 4, 5] (original array is modified)
In the example above, splice(1, 2, 6, 7) removes two elements starting from index 1 and inserts the elements 6 and 7 at that position, resulting in a modified array.

In summary:

Use slice() to create a new array from a portion of an existing array without modifying the original array.
Use splice() to modify the contents of an array by removing, replacing, and/or adding elements in place.
*/



//TRIM (removes space from start and end)
const newS = "   tanya   ";
console.log(newS);//    tanya
console.log(newS.trim());//tanya  (removes space)

//REPLACE
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));//https://hitesh.com/hitesh-choudhary
url.includes('hitesh')//true
url.includes('sundar')//false

//SPLIT
const word = "hitesh-hc-com"
console.log(word.split('-'));//[ 'hitesh', 'hc', 'com' ]






