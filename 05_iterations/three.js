//for of loop

["","",""]
[{},{},{}]

//for of (arrays)
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

//for of (strings)
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//MAPS (uniq vals only!)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

/*
for (const key of map) {
    console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key,value] of map) {
    console.log(key, ':-', value);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/


//For of Loop on OBJECTS
const myObject = {
    "game1": 'NFS',
    "game2": 'spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);  //error ->myObject is not iterable!
} 







