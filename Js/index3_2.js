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

console.log(isValidEmail("Konggmail.com"));

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