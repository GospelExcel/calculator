let num1;
let num2;
let operation;

let keypad = document.getElementById('keypad');
let display = document.getElementById('display');

for(let i = 0; i < 10; i++) {
    const newButton = document.createElement('button');
    newButton.textContent = `${i}`;
    newButton.classList.add('calc_button');
    newButton.addEventListener('click', (e) => appendToDisplay(newButton.textContent));
    keypad.appendChild(newButton);
}

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', (e) => {
    display.textContent = '';
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hit")
        appendToDisplay(button.textContent);
    });
});

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

function appendToDisplay (toAppend) {
    currDisplay = display.textContent;
    currDisplay += toAppend;
    display.textContent = currDisplay
}
