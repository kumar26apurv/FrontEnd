// const student = {
//     name: "Apurv",
//     age: 21,
//     marks: 94,
//     city:"Delhi",
// };

// const post = {
//     username: "@apurvkumar",
//     content: "This is my 1st post",
//     likes: 150,
//     reposts: 5,
//     tags:["@adjnf","@jnbfjd"],
// }
const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if (guess == random) {
        console.log("you guessed the right number");
        break;
    }
    else {
        guess=prompt("guess  number");
    }
}