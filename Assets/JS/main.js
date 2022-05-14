// Variables
const displayHistoryEl = document.querySelector(".display-history");

const displayCurrentEl = document.querySelector(".display-current");

const displayResultEl = document.querySelector(".display-result");

const numberEl = document.querySelectorAll(".number");

const operationEl = document.querySelectorAll(".operation");

const equalEl = document.querySelector(".equal");

const clearAllEl = document.querySelector(".clear-all");

const clearLastEl = document.querySelector(".clear-last-entity");


let histDisplay = '';
let currDisplay = '';
let resultDisplay = '';
let result = null;

let hasDecimal = false;

numberEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !hasDecimal) {
            hasDecimal = true;
        } else if (e.target.innerText === "." && hasDecimal) {
            return;
        }
        currDisplay += e.target.innerText;
        displayCurrentEl.innerText = currDisplay;
    })
});


operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!currDisplay) result;
        hasDecimal = false;
        const operationType = e.target.innerText;
        if (histDisplay && currDisplay && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(currDisplay);
        }
        clearVar(operationType);
        lastOperation = operationType;
        console.log(result);
    })
});

function clearVar(name = '') {
    histDisplay += currDisplay + ' ' + name + ' ';
    displayHistoryEl.innerText = histDisplay;
    displayCurrentEl.innerText = '';
    currDisplay = '';
    displayResultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(currDisplay);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(currDisplay);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(currDisplay);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(currDisplay);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(currDisplay);
    }
}

equalEl.addEventListener('click', (e) => {
    if (!histDisplay || !currDisplay) return;
    hasDecimal = false;
    mathOperation();
    clearVar();
    displayCurrentEl.innerText = result;
    displayResultEl.innerText = '';
    currDisplay = result;
    histDisplay = '';
});

clearAllEl.addEventListener('click', (e) => {
    displayHistoryEl.innerText = '0';
    displayCurrentEl.innerHTML = '0';
    currDisplay = '';
    displayResultEl.innerText = '0';
    result = '';
    hasDecimal = false;
});

clearLastEl.addEventListener('click', (e) => {
    displayCurrentEl.innerText = '';
    currDisplay = '';
})

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickBtnEl(e.key);
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%') {
        clickOperationBtn(e.key);
    } else if (e.key === '*') {
        clickOperationBtn('X');
    } else if (e.key === 'Enter' || e.key === '=') {
        clickEqualEl();
    }
});

function clickBtnEl(key) {
    numberEl.forEach(btn => {
        if (btn.innerText === key) {
            btn.click();
        }
    })
};

function clickOperationBtn(key) {
    operationEl.forEach(btn => {
        if (btn.innerText === key) {
            btn.click();
        }
    })
};

function clickEqualEl() {
    equalEl.click();
};
