// function printPoem() {
//     console.log("Twinkle twinkle little star");
//     console.log("how i wonder what you are");
// }
// printPoem();

// function rollDice() {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }
// rollDice(); rollDice(); rollDice(); rollDice(); rollDice(); rollDice(); rollDice();

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("Apurv", 20);

// function average(a, b, c) {
//     console.log((a + b + c) / 3);
// }
// average(1, 2, 3);

// function mul(a) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(a * i);
//     }
// }
// mul(2);

// function sum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// let result = sum(5);
// console.log(result);


// let arr = [" hey", ",", " how", " are", " you"];

// function con(arr) {
//     let result="";

//     for (let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }
// let result1 = con(arr);
// console.log(result1);

// const student = {
//     name:"Apurv",
//     age:20,
//     eng: 97,
//     phy: 89,
//     math: 99,
//     getavg() {
//         let avg = (this.eng + this.phy + this.math) / 3;
//         console.log(avg);
//     }
// };

// const sum = (a, b) => (
//   a+b
// );

// //set timeout function
// console.log("Hi There!");

// setTimeout(() => {
//     console.log("Apna College");
// }, 4000);
// console.log("Welome to");

//// set interval function
// let id=setInterval(() => {
//     console.log("Apna College");
// }, 2000);

// console.log(id);

//this keyword with  arrrow function
const student = {
    name: "Apurv",
    marks: 99,
    prop: this, //global  scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    }
};

const sq = (n) => (
    n * n
)