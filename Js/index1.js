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
let age = 20;
let fullName = 'KongJen';
let student = true;

document.getElementById("variable1").textContent = fullName;
document.getElementById("variable2").textContent = `I'm ${age} years old`;
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