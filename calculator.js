let firstNumber = '';
let secondNumber = '';
let operator = '';
let display = document.querySelector('#display');

let operations = { //put in object so I can invoke with a variable
    add: (a, b) => Number(a) + Number(b),
    subtract: (a, b) => Number(a) - Number(b),
    multiply: (a, b) => Number(a) * Number(b),
    divide: (a, b) => Number(a) / Number(b)
};

function setDisplay(num) {
    if (num.length > 10) {
        display.textContent = "OVERFLOW"
    } else {
        display.textContent = num;
    }
}

function turnOn() {
    if(display.textContent == '') {
        setDisplay(0);
    }
}

function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    setDisplay(0);
}

function operate() {
    let result = operations[operator](firstNumber, secondNumber);
    firstNumber = result;
    secondNumber = '';
    operator = '';
    setDisplay(result);
}

function handleInput(button) {
    //check for non-digit buttons first
    if (button.id == 'on') {
        turnOn();
    } else if (button.id == 'clear') {
        clear();
    } else if (button.id == 'equals') {
        operate();
    } else if (button.parentElement.id == 'operators') {
        operator = button.id;
    } else if (button.parentElement.id == 'digits' && operator == '') {
        setFirstNumber(button.id);
    } else {
        setSecondNumber(button.id);
    }
}

function setFirstNumber(num) {
    if (display.textContent == '0' || display.textContent == '') {
        //remove leading 0
        firstNumber = num;
    } else {
        firstNumber = firstNumber + num;
    }
    setDisplay(firstNumber);
}

function setSecondNumber(num) {
    secondNumber = secondNumber + num;
    setDisplay(secondNumber);
}

let buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        handleInput(button);
    });
});
