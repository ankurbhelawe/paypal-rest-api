//let vs var vs 

// i=30
// j=40
// k=50

//Loops

// if(i>j){console.log(i+"is greater than"+j)} 
//   else if (j>i){console.log(j+"is greater than"+i)}
//     else {console.log("third part")}


// for (i=0;i<10; i++){
//   console.log(i)
// }



//Arrays

// var arr=[]
// arr.push(1)
// console.log(arr)


// var ar=[]
// ar.push(1)
// ar.push("two")

// console.log(ar)



//Objects

// var arr=[]
// arr.push(1)
// var obj = {}
// console.log(obj)
// obj.name="Hello"

// var obj1 = { name: "hello"}

// var obj2 = { in: 1, st: "String", ar:arr}
// console.log(obj2)

// console.log(obj['name'])

// var nestedObj = { a: obj, b:obj1, c:{ name: "hello"}}
// console.log(nestedObj)
// console.log(nestedObj.c.name)



//Functions

function add(a,b){
  return(a+b)
}

// add(2,3)


// var add =function(a,b){
//   console.log(a+b)
// }

// add(2,3)
// console.log(typeof(add))

// var arrayOfObjects=[]
// arrayOfObjects.push(obj2)
// arrayOfObjects.push(obj1)
// console.log(arrayOfObjects)



//function for pwd validation
// var users=[]
// users.push({un:"abc", pwd:"def"})
// users.push({un:"123", pwd:"456"})

// function validate(u,p){
//   flag=0
//   for (i=0;i<users.length;i++){
//     if (u==users[i].un && p==users[i].pwd){
//       console.log("Valid username and password")
//       flag=1
//       break
//     }
//   }
//   if(flag==0){
//     console.log("Invalid username and password")
//   }
// }

// validate("abc","daef")
// validate("123","456")




//passing fn to fn (can replace w any fn)
function calculate(num1, num2,fn){
  console.log(fn(num1,num2))
}

calculate(2,5,add)




//fn to print page
//setInterval(print)

//fn for delay and repeat