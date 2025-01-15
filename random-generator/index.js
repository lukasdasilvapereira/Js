// RANDOM NUMBER GENERATOR

const button = document.getElementById('myButton');
const label1 = document.getElementById('myLabel1');
const label2 = document.getElementById('myLabel2');
const label3 = document.getElementById('myLabel3');
let randomnum1
let randomnum2
let randomnum3

button.onclick = function () {
    randomnum1 = Math.floor(Math.random() * 100)
    randomnum2 = Math.floor(Math.random() * 100)
    randomnum3 = Math.floor(Math.random() * 100)
    label1.textContent = randomnum1
    label2.textContent = randomnum2
    label3.textContent = randomnum3
}