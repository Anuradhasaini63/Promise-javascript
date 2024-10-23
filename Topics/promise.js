
/* example of promise  */

console.log("Hello I am promise 1")
let promise1 = new Promise(function(resolve, reject)
{
    console.log("I am first promise")
    resolve(50)
})
let promise2 = new Promise(function(resolve, reject)
{
    setTimeout(()=>
    {
        console.log("Hello I am promise 3")
    },2000)
})

console.log("Hello I am promise 2")
console.log(promise1)