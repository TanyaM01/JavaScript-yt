//DATEs
// DAte obj is defined from 1st jan 1970
//calc in milliseconds

let myDate = new Date() //we created here an obj of date, its instance
console.log(myDate); //2023-12-28T18:09:39.947Z

console.log(myDate.toString());//Thu Dec 28 2023 18:10:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Thu Dec 28 2023
console.log(myDate.toLocaleString())//12/28/2023, 6:12:02 PM

console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23) //month starts from 0 in JS
console.log(myCreatedDate);//2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3,26)
console.log(myCreatedDate2.toDateString());//Mon Jan 23 2023
console.log(myCreatedDate2.toLocaleString());//1/23/2023, 5:03:26 AM

let myCreatedDate3 = new Date("2023-01-14") //yyyy-mm-dd
console.log(myCreatedDate3);//2023-01-14T00:00:00.000Z

/*
let newDate = new Date("01-14-2023")//mm-dd-yyyy
console.log(newDate);
ERROR!
*/

//**************TIMESTAMPS

let myTimeStamp = Date.now()
console.log((myTimeStamp));//1703788174505  (val comes in millisecs from 1st jan 1970)
//can compare vals of above and below
console.log(myCreatedDate3.getTime());//1673654400000

//to convert millisecs into secs
let myTimeStamp2 = Date.now()
console.log(myTimeStamp2) //1703789432528
console.log(Math.floor(Date.now()/1000))//1703789432

let newDate = new Date()
console.log(newDate);//2023-12-28T18:52:38.844Z
//extract info
console.log(newDate.getMonth());//11 (dec as starting frm 0)
console.log(newDate.getMonth() + 1)//12
console.log(newDate.getDay())//4 (thursday)


//the date which you want to define on your own
newDate.toLocaleString('default', {
    weekday:"long",
    timeZone: ''
})

