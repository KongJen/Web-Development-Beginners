// FUNCTION //

function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

// happyBirthday("KongJen", 20);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function miltiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function isEven(number) {
    
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

// console.log(isValidEmail("Konggmail.com"));

//----------------------------------------------------------------------------------------------//
// VARIABLE SCOPE //

let x = 3; // GLOBAL

function1();

function function1() {
    let x = 1; // local
    // console.log(x);
}

function function2() {
    let x = 2; // local
    // console.log(x);
}

//----------------------------------------------------------------------------------------------//
// TEMPERATURE CONVERSION PROGRAM //

const textBoxTemp = document.getElementById("textBoxTemp");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("resultTemp");
let temp1;

function convert() {
    
    if (toFahrenheit.checked) {
        temp1 = Number(textBoxTemp.value);
        temp1 = temp1 * 9 /5 +32;
        resultTemp.textContent = temp1.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp1 = Number(textBoxTemp.value);
        temp1 = (temp1 - 32) * (5 / 9);
        resultTemp.textContent = temp1.toFixed(1) + "°C";
    }
    else{
        resultTemp.textContent = "Select a unit";
    }
}

//----------------------------------------------------------------------------------------------//
// ARRAY //

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
//fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("orange")

// console.log(index);

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

fruits.sort().reverse();

for (let fruit of fruits) {
    // console.log(fruit);
    
}

//----------------------------------------------------------------------------------------------//
// SPEAD OPERATOR //