/*
Promise - a promise is an object
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

//fetch('https://something.com').then().catch().finally()


//how to create promises?
//new keyword - we get instance of an obj
const promiseOne = new Promise (function(resolve, reject) {
    //Do an async task
    //Db calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()//now connected with .then (line 27) resolve is a method
    },1000)
})
//how to consume this promise?
//connection w resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})
//NOTE:
//first always task complete (async) hoga and then jaise hi resolve hua tab yei promise consumed part run hoga


//NOW WITHOUT TAKING VARIABLE
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//how data consumption happens
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})
//idhr data lenge kaise? user obj
promiseThree.then(function(user){
    console.log(user)  
    //{ username: 'Chai', email: 'chai@example.com' }
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username: "tanya", password:"123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
//NOW HOW TO CONSUME THIS PROMISE?
promisefour.then((user) => {
    console.log(user);
    return user.username;  //where is this returning?  in line 72!
}).then((username) => {           //chaining (above se jo return hoke aayega wahi nayei chain m aayega)
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{  //by default
    console.log("The promise is either resolved or rejected")
})

//NOW OUTPUT WHEN error=true; (line 60)
//ERROR: Something went wrong

//NOW OUTPUT WHEN error=false; (line 60)
//{ username: 'tanya', password: '123' }
//tanya


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username: "Javascript", password:"123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
//now to handle promise..
//async await syntax (we don't handle catch here )

 async function consumePromiseFive(){
    try{
        const response = await promiseFive               //.then se ayegi ya .catch se ayegi val
        console.log((response));
    } catch (error){
        console.log(error);
    }
}

