/*
//call stack funnction
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();*/

/*
//single thread function
let h1 = document.querySelector("h1");
setTimeout(function () {
    console.log("Apna College");
}, 20000);
console.log("Hello");
*/

/*
//callback hell using multiple nested functions and properties of color properties
let h1 = document.querySelector("h1");

function changeColor(color,delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1000,() => {
    changeColor("green", 1000, () => {
        changeColor("violet", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000); 
            });
        });
    });
});

//method 1 calling separately with giving a gap of time intervals
// setTimeout(function () {
//     h1.style.color = "red";
// }, 1000);
// setTimeout(function () {
//   h1.style.color = "green";
// }, 2000);
// setTimeout(function () {
//   h1.style.color = "blue";
// }, 3000);
*/

/*
//callback hell explaining with the hellp of an example of internet speed and data storage
function saveToDB(data,success,failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
saveToDB("apna college", ()=> {
    console.log("your data1 was saved : ");
    saveToDB("hello", () => {
        console.log("success data2 saved");
        saveToDB("hey", () => {
            console.log("success data3 saved");
        }, () => {
            console.log("failure data3 not saved")
        });
    }, () => {
        console.log("failure data2 not saved");
    });
}, () => {
    console.log("weak connection, data1 not saved");
});
*/

/*
//promise  to tackle callback hell using resolve and reject
function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: data not saved");
        }
    });
}
//promise using then and catch method

//way 1 of writing promise
let request = saveToDB("apna college");
request
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });

//way 2 of writing promise
saveToDB("apna college")
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  })

//promise chaining when we have to proocess multiple data
//way 1 of wirting promise chaining
saveToDB("apna college")
  .then(() => {
      console.log("data1 saved");
      saveToDB("hello")
          .then(() => {
              console.log("data2 saved");
      })
  })
  .catch(() => {
    console.log("promise was rejected");
  });

//way 2 of writing promise chaining
saveToDB("apna college")
  .then(() => {
    console.log("data1 saved");
    return saveToDB("hello");
  })
  .then(() => {
    console.log("data2 saved");
    return saveToDB("Apurv here");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

//promise with results and errors
saveToDB("apna college")
  .then((result) => {
      console.log("data1 saved");
      console.log("result: ", result);
    return saveToDB("hello");
  })
  .then((result) => {
      console.log("data2 saved");
      console.log("result: ", result);
    return saveToDB("Apurv here");
  })
  .then((result) => {
      console.log("data3 saved");
      console.log("result: ", result);
  })
  .catch((error) => {
      console.log("promise was rejected");
      console.log("error: ", error);
  });
*/

/*
//async function 
async function greet() {
    throw "404 page not found";
    return "hello";
}
greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result : ", result);
    })
    .catch((err)=>{
        console.log("promise was rejected with error : ", err)
    });*/

/*
//await function
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}*/