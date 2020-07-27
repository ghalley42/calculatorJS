let dataSet = {
    firstNumber: null,
    secondNumber: null,
    operator: null,
    result: null,
    currentNumber: 0,
    operatorEntered: false,
};

const displayScreen = document.getElementById('display-screen');
const calcBody = document.getElementById('main-body');


function error(){
    alert('There has been an error. Please try again.');
    clearCalc();
};

function clearCalc(){
    dataSet.firstNumber = null;
    dataSet.secondNumber = null;
    dataSet.operator = null;
    dataSet.result = null;
    dataSet.currentNumber = 0;
    updateDisplay();
};

function add (a, b){
    return a + b;
};

function subtract (a, b){
    return a - b;
};

function divide (a, b){
    return a / b;
};

function multiply (a, b){
    return a * b;
};

function negPos(a){
    if (a == 0 || isNaN(a)) return a;
    if (a<0) return Math.abs(a);
    if (a>0) return -Math.abs(a);
};

function operate (a, b, c){
    let sum = null;
    if (a == null || b == null || c == null){ 
        error();
        return;
    }

        switch (c){
            case '+':
                sum = add(dataSet.firstNumber, dataSet.secondNumber);
                break;

            case '-':
                sum = subtract(dataSet.firstNumber, dataSet.secondNumber);
                break;

            case '/':
                sum = divide(dataSet.firstNumber, dataSet.secondNumber);
                break;

            case '*':
                sum = multiply(dataSet.firstNumber, dataSet.secondNumber);
                break;
            
            default:
                error();
                return;
            }
    dataSet.firstNumber = sum;
    dataSet.secondNumber = null;
    dataSet.operator = null;
    return dataSet.result = sum;
        };

function operatorPress(a){
    dataSet.firstNumber = dataSet.currentNumber;
    dataSet.operator = a;
    dataSet.operatorEntered = true;
};

function updateDisplay(){
        displayScreen.innerHTML = dataSet.currentNumber;
};

function updateCurrentNumber(num){
    if (dataSet.currentNumber == 0){
        dataSet.currentNumber = document.getElementById(dataSet.buttonPressed).innerHTML;
    }

    else {
        dataSet.currentNumber += document.getElementById(dataSet.buttonPressed).innerHTML;
    }

    updateDisplay();
};


function buttonClick(event) {
    dataSet.buttonPressed = event.target.id;

    switch (dataSet.buttonPressed){
        case '+':
        case '-':
        case '/':
        case '*':
            operatorPress(dataSet.buttonPressed);
            break;

        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
        case 'zero':
        case 'decimal':
            updateCurrentNumber(dataSet.buttonPressed);
            break;

        case 'clear':
            clearCalc();
            break;

    }
  }

  calcBody.addEventListener("click", buttonClick);