// let msg = "   hello  ";

// // let password = prompt("Set Your Password");
// // let newPass = password.trim();
// // console.log(newPass);

// let str = "ILoveCoding";
// console.log(str.slice(1, 5));

// // console.log(str.replace("love", "do"));

// let mes = "hello";
// console.log(msg.trim().toUpperCase());

// let mesg = "ApnaCollege";
// console.log(mesg.slice(4, 9));
// console.log(mesg.indexOf("na"));
// console.log(mesg.replace("Apna", 'Our'));

// //     ARRAY
// let students = ["Ap", "B", "C", "D"];

// const favt = "avatar";
// let guess=prompt("guess my favorite movie");

// while ((guess != favt) && (guess != 'quit')) {
//     console.log("wrong answer");
//     guess = prompt("please try again");
// }
// if (guess == favt) {
//     console.log("congrats");
// }

let todo = [];

let req = prompt("Please enter your request");
while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }
    if (req == "list") {
        console.log("-----------");
        for (let i = 0; i < todo.length;i++) {
            console.log(i,todo[i]);
        }
        console.log("--------");
    }
    else if (req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if (req == "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }
     req = prompt("please enter your request");
}