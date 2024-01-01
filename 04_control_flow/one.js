//if
const isUserLoggedIn = true;
if(2 == "2"){
    console.log("executed") //executed
}

if(2 === "2"){
    console.log("executed") //no output as type is different (number and string)
}

// <, >, <=, >=, ==, !=, ===, !==

const temp = 41
if(temp<50){
    console.log("less than 50");
}
else{
    console.log("temp is greater than 50");
}

const score =200
if(score>100){
    const power = "fly"   //if var here then line 27 will show output bz var's scope is completely global
    console.log(`User power: ${power}`) //User power: fly
}
//console.log(`User power: ${power}`) //error (scope error)

const balance = 1000
//if(balance >500 ) console.log("test") //implicit scope  (not recommended)
if(balance < 500){
    console.log(("less than"));
}
else if(balance< 750){
    log("less than 750")
}
else if(balance< 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

const loggedInFromEmail = true
if (userLoggedIn && debitCard & 2==2){
    console.log("allow to buy courses")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In!")
}












