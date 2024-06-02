// //prefix increment - postfix increment
// let x = 10;
// x--; // x = x - 1;
// --x // x = x - 1;
// x++; // x = x + 1;
// ++x; // x = x + 1;
// x/=2; // x = x / 2;
// x*=2; // x = x * 2;
// x+=2; // x = x + 2;
// x-=2; // x = x - 2;

// for (let index = 100; index >= 0; index--) {
//     console.log(index);
// }

// let index = 100;
// while(index>=0){
//     console.log(index);
//     index--;
// }





// async - await => No-Async-in-Loops

// async function getUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1,2,3])
//         }, 1000)
//     })
// }
// async function main() {
//     let dbActions = []
//     for (let index = 0; index < 5; index++) {
//         dbActions.push(getUserData()); // 1 => 150 second
//     }
//     const result = await Promise.all(dbActions);
//     console.log(result);
//     console.log("Coffee"); // 60 sec
// }
// main();


//Reference - primitive Types
let num = 5;
let str = "some string";
let bool = false;
// stack memory;

let originalObject = {
    apple: 3,
    pinapple: 5,
    isEatable: true
}

//memory[116] -> originalObject
//copyObject <- originObject 
//copyObject -> memory[116]

let copyObject = originalObject;
copyObject.isEatable = false;
console.log(originalObject.isEatable); // true

//heap memory
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
// copyObject = cloneObject(originalObject);
copyObject = {...originalObject}
originalObject.isEatable = false;
copyObject.isEatable = true;

console.log(originalObject);
console.log(copyObject);


//MVC => Model, View, Controller

//PUG, EJS, HBS

//db init, page (user list), controller -> getUserList

//Closure
let counter = 0
function initClicker() {
    let counter = 0;
    return function() {
        return ++counter;
    }
}
counter = 50
const clicker = initClicker();
console.log(clicker())
console.log(clicker())
console.log(clicker())
console.log(clicker())
console.log(clicker())