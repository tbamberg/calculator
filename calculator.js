let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let display = document.querySelector('#display');

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(firstNumber, operator, secondNumber) {
    return operator(firstNumber, secondNumber);
}

function setDisplay(num) {
    display.textContent = num;
}

function turnOn() {
    if(display.textContent == '') {
        setDisplay(0);
    }
}

function clear() {
    firstNumber = 0;
    operator = 0;
    secondNumber = 0;
    setDisplay(0);
}

function setInput(button) {
    //check for non-digit buttons
    if (button.id == 'on') {
        turnOn();
    } else if (button.id == 'clear') {
        clear();
    } else {
        if (display.textContent == '0' || display.textContent == '') {
            //remove leading 0
            firstNumber = button.id;
        } else {
            //update firstNumber
            firstNumber = firstNumber + button.id;
        }
        setDisplay(firstNumber);
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        setInput(button);
    });
});
