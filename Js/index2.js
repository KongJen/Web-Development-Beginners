// COUNTER PROGRAM //

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLable");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

//----------------------------------------------------------------------------------------------//
// MATH //

// console.log(Math.PI);
// console.log(Math.E);

let x = 3;
let y = 2;
let z = 1;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x, y);
z = Math.sqrt(x);
z = Math.log(x);
z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);
z = Math.abs(x);
z = Math.sign(x);
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

// console.log(max);

//----------------------------------------------------------------------------------------------//
// RANDOM NUMBER GENERATOR //
