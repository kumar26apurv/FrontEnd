// console.log("Hello World!");
// console.log("Apna College");

// let a = 10;
// let b = 5;

// //method 1
// console.log("sum is: ", a + b);

// //method 2
// console.log(`you pay ${a+b} rupees`);

// //method 3
// let output = "The total price is: " + (a + b) + " Rupees.";
// console.log(output);

// //method-4
// console.log("Price is:",a+b,"Rupees.")

//conditional statements
console.log("Before my if statement");
let age = 23;
if (age >= 18) {
    console.log("you can vote.")
    let a = 5;
    console.log(5 * a);
}
console.log("After my if statement");

//trafic light 
let color = "yellow";
if (color === "red") {
    console.log("stop");
}
if (color === "yellow") {
    console.log("get ready to go");
}
if (color === "Green") {
    console.log("Go")
}

//practice question
let size = "A";

if (size === "XL") {
    console.log("250");
}
else if (size === "L") {
    console.log("200");
}
else if (size === "M") {
    console.log("100");
}
else if (size === "S") {
    console.log("50");
}
else {
    console.log("size not available");
}

//practice question
let goodString = "av";

if (goodString[0] === "a" && goodString.length > 3) {
    console.log("String is good");
}
else {
    console.log("Not a good string");
}

//truthly and falsy
if ("") {
    console.log("true values");
}
else {
    console.log("flase values");
}

if (" ") {
  console.log("true values");
} else {
  console.log("flase values");
}

//practice question switch

let day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
        break;
    default:
        console.log("not a day");
}

// alert("someyhing is wrong")

// let first = prompt("enter first name: ");
// prompt("first");