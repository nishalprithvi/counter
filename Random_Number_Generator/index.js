// Random number generator

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6;

let randomNumber;

myButton.onclick = function(){
    randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNumber;
}