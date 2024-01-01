//Reduce Method

const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);
/*
acc: 0 and currval : 1
acc: 1 and currval : 2
acc: 3 and currval : 3
6
*/


//now same in arrow func
const total = myNums.reduce( (acc, currval) => acc+currval,0)
console.log(total)//6



const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(priceTotal)//22996




