let num1;
let num2;
let operation;

let keypad = document.getElementById('keypad')

for(let i = 0; i < 10; i++) {
    const newButton = document.createElement('button')
    newButton.textContent = `${i}`
    newButton.classList.add('keypad_digit')
    keypad.appendChild(newButton)
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator, num1, num2) {
    return add(num1, num2)
}
