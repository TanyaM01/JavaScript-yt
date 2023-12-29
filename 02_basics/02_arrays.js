const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros =[ "superman","flash", "batman"]

//push
/*
marvel_heros.push(dc_heros)
                        //arrays inside an array
console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]) //flash
*/

//concat
const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread opertaor
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//FLAT
const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
//flattens the array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Tanya"))//false
//convert into array
console.log(Array.from("Tanya"))//[ 'T', 'a', 'n', 'y', 'a' ]
console.log(Array.from({name: "tanya"}))//[] (empty array) therefore mention specifically whether key's array you want or values's array?
console.log(Array.from({name: "tanya"}))

let score1 =100
let score2 =200
let score3 = 300
//convert into array
console.log((Array.of(score1, score2, score3)));//[ 100, 200, 300 ]





