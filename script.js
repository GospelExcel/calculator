let num1;
let num2;
let operation;

let buttons = document.getElementById('buttons')

for(let i = 1; i < 10; i++) {
    const newButton = document.createElement('button');
    newButton.textContent = `${i}`;
    newButton.classList.add('calc_button');
    buttons.appendChild(newButton);
}

// const zButton = document.createElement('button');
// zButton.textContent = '0';
// zButton.classList.add('keypad_digit');
// keypad.appendChild(zButton);

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
