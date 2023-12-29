//how to declare objs thru constructor?

//const tinderUser = new Object() //singleton obj
const tinderUser = {} //non -singleton obj
 tinderUser.id ="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn =false
console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "tanya",
            lastname: "maurya"
        }
    }
}
console.log(regularUser.fullname)//{ userfullname: { firstname: 'tanya', lastname: 'maurya' } }
console.log(regularUser.fullname.userfullname.firstname)//tanya


//combining objs
const obj1 = {
    1:"a",
    2: "b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj5 = {
    5:"a",
    6: "b"
}
const obj3 = {obj1, obj2}
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 =Object.assign({},obj1,obj2,obj5)
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//using spread operator
const object1 ={...obj1,...obj2}
console.log(object1);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"t@gmail.com"
    }
]
console.log(users[1].email)//t@gmail.com

console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true


////////////////////////////////
// object DESTRUCTURING
const course = {
    coursename: "Js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}
const {courseinstructor} = course//DESTRUCTURING   course->obj
const {coursename: name} = course;

console.log(courseinstructor);//hitesh
console.log(name);//Js in hindi


//APIS









