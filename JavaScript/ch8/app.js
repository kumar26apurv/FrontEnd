//each method
let arr = [1, 2, 3, 4, 5];
//method 1
function print(el) {
    console.log(el);
}
arr.forEach(print);
//method 2
arr.forEach(function(el){
    console.log(el);
});

//map method
let double = arr.map((el) => {
    return el * 2;
});


//filter method
let nums = [2, 5, 4, 6, 7, 9, 8, 45, 34];
let even = nums.filter((num) => (num % 2 == 0));

//every method
[1, 2, 3, 4].every((el) => (el % 2 == 0));

//reduce function
[1, 2, 3, 4].reduce((res, el) => (res + el));

//finding maximum value
let arr2 = [4, 3, 5, 67, 56, 45, 78, 9, 3, 45, 9];

//method 1: using  for loop
let max = -1;
for (let i = 0; i < arr2.length; i++){
    if (max < arr2[i]) {
        max = arr2[i];
    }
}
console.log(max);

//method 2:using reduce function
let max2 = arr2.reduce((max2, el) => {
    if (max2 < el) {
        return el;
    }
    return max2;
});
console.log(max2);


//default parameter
function sum(a, b = 3) {
    return a + b;
} 

//spreadwith array literals
//example 1
let arr5 = [1, 2, 3, 4, 5];
let newArr = [...arr5];
//example 2
let chars = [..."hello"];