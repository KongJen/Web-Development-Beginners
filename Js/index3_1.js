// TERNARY OPERATION //


// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

//----------------------------------------------------------------------------------------------//
// SWITCHES //

let day = "pizza";

switch(day){
    case 1:
        // console.log("It is Monday");
        break;
    case 2:
        // console.log("It is Tuesday");
        break;
    case 3:
        // console.log("It is Wednesday");
        break;
    case 4:
        // console.log("It is Thursday");
        break;
    case 5:
        // console.log("It is Friday");
        break;
    case 6:
        // console.log("It is Saturday");
        break;
    case 7:
        // console.log("It is Sunday");
        break;
    default:
        // console.log(`${day} is not a day`);
}

//----------------------------------------------------------------------------------------------//
// STRING METHODS //

let userName1 = "KongJen";

userName1.charAt(1); // it's "o"
// console.log(userName.charAt(1));
userName1.indexOf("n"); // it's 2
// console.log(userName.indexOf("n"));
userName1.lastIndexOf("n"); // it's 6
// console.log(userName.lastIndexOf("n"));
userName1.length; // it's 7
// console.log(userName.length);
userName1.trim(); // "KongJen"
// console.log(userName.trim());
userName1.toUpperCase(); // "KONGJEN"
// console.log(userName.toLocaleUpperCase());
userName1.toLowerCase(); // "kongjen"
// console.log(userName.toLowerCase());
userName1.repeat(3); // "KongJenKongJenKongJen"
// console.log(userName.repeat(3));

let result1 = userName1.startsWith(" "); // Check first word
let result2 = userName1.endsWith(" "); // Check end word
let result3 = userName1.includes(" "); // Check include word

let phoneNumber = "123-456-7890";

let phoneNumber1 = phoneNumber.replaceAll("-", ""); //replace output is 1234567890
let phoneNumber2 = phoneNumber.padStart(15, "0"); // fill before text 000123-456-7890
let phoneNumber3 = phoneNumber.padEnd(15, "0"); // fill after text 123-456-7890000
// console.log(phoneNumber2)

//----------------------------------------------------------------------------------------------//
// STRING SLICING //

const fullName = "Kong Jen";

//let firstName = fullName.slice(0, 4);
//let lastName = fullName.slice(5, 8);

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);

let firstName1 = fullName.slice(0, fullName.indexOf(" ")); // real firstname
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1); // real lastname

// console.log(firstName);
// console.log(lastName);

const email = "supakorn.12.06.2003@gmail.com"

let username1 = email.slice(0, email.indexOf("@"));
let extension1 = email.slice(email.indexOf("@"));

// console.log(username);
// console.log(extension);

//----------------------------------------------------------------------------------------------//
// METHOD CHAINING //

let username2 = " ";
// let username2 = window.prompt("Enter your username") // delete comment to use this section.

// ------ NO METHOD CHAINING -------

username2 = username2.trim();
let letter1 = username2.charAt(0);
letter1 = letter1.toUpperCase();

let extraChars = username2.slice(1);
extraChars = extraChars.toLowerCase();
username2 = letter1 + extraChars;

// console.log(username2);

// ------ METHOD CHAINING -------

username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

// console.log(username2);

//----------------------------------------------------------------------------------------------//
// LOGICAL OPERATIONS //

// it have AND = &&, OR = ||, NOT = !

const temp = 250;

if(temp <= 0 || temp > 30){
    // console.log("The weather is BAD");
}
else{
    // console.log("The weather is GOOD");
}

//----------------------------------------------------------------------------------------------//
// STRICT EQUALITY //

// == compare values equal
// === compare values & datatype equal
// != compare values inequal
// !== compare values & datatype inequal

const PI = 3.14;

if (PI === "3.14") {
    // console.log("That is PI");
}
else{
    // console.log("That is not PI");
}

//----------------------------------------------------------------------------------------------//
// WHILE LOOP //

let username3;

// while(username3 === "" || username3 === null) {
//     username3 = window.prompt(`Enter your name`);
// }

// do {
//     username3 = window.prompt(`Enter your name`);
// } while(username3 === "" || username3 === null)

// console.log(`Hello ${username3}`);

let loggedIn = false;
let password;

// while (!loggedIn) {
//     username3 = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if (username3 === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid credentials! Please try again");
//     }
// } // if use do while. You can set loggedIn = True

//----------------------------------------------------------------------------------------------//
// FOR LOOP //

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        break;
    }
    else{
        // console.log(i);
    }
}

//----------------------------------------------------------------------------------------------//
// NUMBER GUESSING GAME //

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

// while (running) {
    
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess);
    
//     if (isNaN(guess)) {
//         window.alert("Please enter a valid number");
//     }
//     else if (guess < minNum || guess > maxNum) {
//         window.alert("Please enter a valid number");
//     }
//     else {
//         attemps++;
//         if (guess < answer) {
//             window.alert("TOO LOW! TRY AGAIN!");
//         }
//         else if (guess > answer) {
//             window.alert("TOO HIGH! TRY AGAIN!");
//         }
//         else {
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attemps} attemps`);
//             running = false;
//         }
//     }

// }