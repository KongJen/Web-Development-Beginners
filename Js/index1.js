//---------------------------------------------------------------------------------------------//
//--Test Variable--//

// let age = 20;
// let price = 10.99;
// let gpa = 3.02;

// console.log(age);

// let fullName = 'KongJen';
// let favoriteFood = "tomyumkung";
// let email = 'supakorn.12.06.2003@gmai.com';

// when use console.log use %d when '' and use ${} when `` // 
// console.log(`My name is ${fullname}`);
// console.log('My favorite food: %s', favoriteFood);

let online = true;
let Age = 20;
let fullName = 'KongJen';
let student = true;

document.getElementById("variable1").textContent = fullName;
document.getElementById("variable2").textContent = `I'm ${Age} years old`;
document.getElementById("variable3").textContent = `I'm student: ${student}`;

//----------------------------------------------------------------------------------------------//
//--Operators--//

// let students = 30;

// Same python operators //
// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 2;
// students = students ** 2;
// students = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

// console.log(students);

// let result = 12 % 5 + 8 / 2;
let result = 12 % 5 + 8 / 2;

// console.log(result);
document.getElementById("operators1").textContent = `12 % 5 + 8 / 2: ${result}`;

//----------------------------------------------------------------------------------------------//
//--User input--//

// This is alert input //
// let username = window.prompt("What's your username");

// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    alert(`Hello ${username}.`);
    document.getElementById("myh2").textContent = `Hello ${username}.`;
}

//----------------------------------------------------------------------------------------------//
//--Type Conversion--//

// let age = window.prompt("How old are you");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
document.getElementById("conversion1").textContent = `Value x is ${x} ,Type of x is ${typeof x}.`;
document.getElementById("conversion2").textContent = `Value y is ${y} ,Type of y is ${typeof y}.`;
document.getElementById("conversion3").textContent = `Value z is ${z} ,Type of z is ${typeof z}.`;

//----------------------------------------------------------------------------------------------//
//--Constants--//

// const isn't let because it variable can't be change//
