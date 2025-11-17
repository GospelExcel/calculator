let num1 = 0;
let num2 = 0;
let operator;
let num2Listener = false;

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
    num2Listener = false;
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (num2Listener) {
            operate(operator, num1, num2);
        } else {
            num1 = Number(display.textContent);
            operator = button.textContent; 
            appendToDisplay(button.textContent);
            num2Listener = true;
        }
    });
});

let equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => operate(operator, num1, num2));

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

function operate (operator) {
    let ans;
    switch(operator) {        
        case '+':
             ans = add(num1, num2);
             break;
        case '-':
             ans = subtract(num1, num2);
             break;
        case 'x':
             ans = multiply(num1, num2);
             break;
        case '/':
             ans = divide(num1, num2);
             break;
    }

    num2Listener = false;
    num1 = ans;
    num2 = 0;

    display.textContent = ans;
}


function appendToDisplay (toAppend) {
    currDisplay = display.textContent;
    currDisplay += toAppend;
    display.textContent = currDisplay

    if (num2Listener) {
        num2 = Number(String(num2) + toAppend)
    }
}
