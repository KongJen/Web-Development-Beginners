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
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(max);

//----------------------------------------------------------------------------------------------//
// RANDOM NUMBER GENERATOR //

// const min = 50;
// const max =100;
// let randomNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum);

const myButton1 = document.getElementById("myButton1");
const lable1 = document.getElementById("lable1");
const lable2 = document.getElementById("lable2");
const lable3 = document.getElementById("lable3");
const resetBtn1 = document.getElementById("resetBtn1");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton1.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    lable1.textContent = randomNum1;
    lable2.textContent = randomNum2;
    lable3.textContent = randomNum3;
}
resetBtn1.onclick = function(){
    lable1.textContent = 0;
    lable2.textContent = 0;
    lable3.textContent = 0;
}

//----------------------------------------------------------------------------------------------//
// IF STATEMENTs //

const myText1 = document.getElementById("myText1");
const mySubmit1 = document.getElementById("mySubmit1");
const resultElement1 = document.getElementById("resultElement1");
let age = 0;

mySubmit1.onclick = function(){

    age = myText1.value;
    age = Number(age);
    if(age >= 100){
        resultElement1.textContent = `You are TOO OLD to enter this site.`;
    }
    else if(age >= 18){
        resultElement1.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0){
        resultElement1.textContent = `Your age can't be below 0.`;
    }
    else{
        resultElement1.textContent = `You must be 18+ to enter this site.`;
    }
}

//----------------------------------------------------------------------------------------------//
// Checked property //

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit2 = document.getElementById("mySubmit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit2.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscride!`;
    }
    else{
        subResult.textContent = `You are not subscride!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }

}