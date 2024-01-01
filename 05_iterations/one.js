//For Loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5)
    {
        console.log("5 is best");
    }
    console.log(element);
}


for(let i =0; i<10 ;i++){
    console.log(`Outr loop value : ${i}`);
    console.log("\n")
    for(let j =0 ;j<10;j++){
        //console.log(`Inner Loop value ${j} and inner loop ${i}`);
        console.log((i + '*' + j + ' = ' + i*j ));
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//KEYWORDS
//break and continue

for (let index = 1; index <=20 ; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`); 
}  //jumped here after break 

/*
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
*/


for (let index = 1; index <=20 ; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;  //goto line 48
    }
    console.log(`value of i is ${index}`); 
}  

/*
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
value of i is 6
value of i is 7
value of i is 8
value of i is 9
value of i is 10
value of i is 11
value of i is 12
value of i is 13
value of i is 14
value of i is 15
value of i is 16
value of i is 17
value of i is 18
value of i is 19
value of i is 20
*/