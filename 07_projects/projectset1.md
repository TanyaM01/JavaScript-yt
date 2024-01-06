# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1
```javascript
console.log("tanya")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")//tagname-body
            //call-back funcn
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id;
    }
  
  })
})
```

## project 2 solution
```javascript
//take out vals from input
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //extract vals from input
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
   //show result
   results.innerHTML = `<span>${bmi}</span>`
  }
});

```

## project 3 solution code

```javascript

const clock = document.getElementById('clock')

//you want to keep updating the date all the time
//setinterval method 
setInterval(function(){
  let date = new Date()
  clock.innerHTML= date.toLocaleString()
}, 1000)


```

## project 5 solution code

```javascript
console.log('Project 5');
const insert =  document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML= `
  <div class= 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

  </div>
  `
})

```


## project 6 solution code
```javacript

//how to generate random colors in bg?

//generate a random color using hex value (6 characters)

const randomColor = function(){
  const hex =  "0123456789ABCDEF"
  //hex code  val
  let color = '#'
  for(let i =0 ;i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};

console.log(randomColor()) //0-16 val

/*
const str ="tanya"
console.log(str[3])//y
*/
let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }
   
  
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
};

stopChangingColor= function(){
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)




```