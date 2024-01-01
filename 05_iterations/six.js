const coding = ["js", "ruby", "java", "python", "cpp"]

/*
const values = coding.forEach((item) => {
    console.log(item);
})
console.log(values)
//ForEach doesn't return vals
*/

//FILTER
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]
/* or 
const newNums = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]
*/


const NewNumbers = []
myNums.forEach( (Number) => {
    if(Number>4){
        NewNumbers.push(Number)
    }
})
console.log(NewNumbers);//[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014}
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

 userBooks = books.filter( (bk) => {
    return bk.publish>= 1995 && bk.genre=== "History"
 })
console.log(userBooks)





