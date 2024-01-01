const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    swift: "swift by apple"
}
//for in loop (objects)

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for Javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/


//for in loop (array)
const programming = ["js", "ruby", "python", "cpp"]
for (const key in programming) {
    console.log(key);//prints key of array
    console.log(programming[key]);//prints val of array

}
/*
0
js
1
ruby
2
python
3
cpp
*/
 //loops lagana ho toh:
 //objs-> for in
 //arrays -> for of


