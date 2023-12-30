//Immediately Invoked Function Expression (IIFE)
/*
An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.
Having a function that behaves that way can be useful in certain situations.
IIFEs prevent pollution of the global JS scope. 
*/

(function chai(){
    //named iife
    console.log(`DB CONNECTED`)        //(wrapping funcn definition)(calling)
})(); //DB CONNECTED                   //; (imp)


//arrow funcn
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ("tanya");
//DB CONNECTED TWO tanya








