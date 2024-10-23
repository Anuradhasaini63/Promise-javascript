let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("I'm P1")
        resolve(50)
    })
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise(function (resolve, reject)
    // return p2 = new Promise(function(resolve, reject) - ( we can also do like this means return here)
    {
        setTimeout(() => {
            console.log("I'm P2")
            resolve(100)
        }, 2000);
    }).then((value) => {
        console.log(value)
        let p3 = new Promise(function (resolve, reject) {
            console.log("End of promise chaining")
        })
    })
})



// 2nd example of promise chaining 

let prom = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(100)
    }, 1000);
}).then(function (val) {
    console.log(val);
    return 2 * 5
}).then(function (val) {
    console.log(val)
    return 2 * 6
}).then(function (val) {
    console.log(val)
    return "Final value"
}).then(function (val) {
    console.log(val)
})


// Example of Multiple .then() Handlers: 

let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(123)
    }, 1000);
})
prom1.then(function(val){
    console.log("Handler 1:", val)
})

prom1.then(function(val)
{
    console.log("handler 2:", val)
})

// Example with .catch() Handlers:

let prom2 = new Promise(function(resolve, reject)
{
    reject(new Error("something wrong"))
},4000)

prom2.catch((error) => {
    console.log("Handler 1:", error.message);  // Logs "Handler 1: Something went wrong"
})

prom2.catch((error) => {
    console.log("Handler 2", error.message)
})