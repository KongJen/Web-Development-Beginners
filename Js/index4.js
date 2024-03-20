//----------------------------------------------------------------------------------------------//
// REST PARAMETERS //

function openFridge(...foods) {
    console.log(...foods);
}
function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamberger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);

function sum(...numbers) {
    
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

function getAverage(...numbers) {
    
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result/numbers.length;
}

const total = getAverage(1, 2, 3)

console.log(total);

//----------------------------------------------------------------------------------------------//
// DICE ROLLER PROGRAM //

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="/asset/dice/Dice-${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}

//----------------------------------------------------------------------------------------------//
// RANDOM PASSWORD GENERATOR //

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercaseChars = "adcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
        
    }
    
    return '';
}

const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols);

console.log(`Generated password: ${password}`);

