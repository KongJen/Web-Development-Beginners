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