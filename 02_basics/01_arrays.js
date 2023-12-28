//ARRAY enables storing a collection of multiple items under a single variable name
// JS arrays are resizable and can contain a mix of different data types
//JS arrays are not associative arrays and so, array elemnts cannot be accessed using arbitary strings as indexes
//JS arrays are zero-indexed
//JS array-copy-operations create shallow copies.(A shallow copy of an obj is a copy whose properties share the same references as those of the source obj from which the copy was made)

//declaration
const myArray= [0,1,2,3,4,5,true, "tanya"]
const myArr =[0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4) 

//ARRAY METHODS
/*
myArr.push(6);
myArr.push(7);
myArr.pop()
*/

myArr.unshift(9) //inserts ele at start of array
console.log(myArr);/*[
    9, 0, 1, 2,
    3, 4, 5
  ]*/

myArr.shift()//deletes start ele of array
console.log(myArr)//[ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1 (not present in array)
console.log(myArr.indexOf(3))//3

const newArr= myArr.join()//converts array into string
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);//0,1,2,3,4,5  (type is cahnged)
console.log(typeof(newArr));//string

//slice, splice

console.log("A", myArr) //A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3)//start,end-1
console.log(myn1); //[ 1, 2 ]
console.log("B", myArr)//B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)//start,end
console.log("C", myArr)//C [ 0, 4, 5 ] //changes in org array
console.log(myn2);//[ 1, 2, 3 ]



























