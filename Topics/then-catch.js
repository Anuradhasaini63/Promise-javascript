let p1 = new Promise(function(resolve, reject)
{
    console.log("Promise p1 is pending")
    setTimeout(()=>
    {
        console.log("I am fullfild promise")
        resolve(true)

    },3000)
})

// This is rejected promise and throw an Error 

let p2 = new Promise(function(resolve, reject)
{
    console.log("Promise p2 is pending")
    setTimeout(()=>
    {
        console.log("I am rejected promise")
        reject(new Error("I am an error"))

    },4000)
})

// below line will show that promise is pending and after 3s it will give you output
console.log(p1, p2)

// then() is used to handle the resolved value of the promise.

p1.then((value)=>{
    console.log(value)
})

// catch() is used to handle any errors or rejections and after using this error will not display in console 

p2.catch((Error)=>{
    console.log("Error is occurred")
})

// we can also use like below 

// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })