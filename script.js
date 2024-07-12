let num1;
let num2;
let operator;

const numButtons = document.querySelectorAll(".numpad button")

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {
        num1 = parseInt(numButton.textContent);
        num2 = parseInt(numButton.textContent);
    })
})

const operatorButtons = document.querySelectorAll(".operators button")

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (operatorButton.textContent === "=") {
            const displayField = document.querySelector(".displayField");
            displayField.textContent = operate(num1, num2, operator);
        }
        else {
            operator = operatorButton.textContent;
        }
    })
})

function add(array) {
    return array.reduce((total, current) => {
        total += current;
        return total;
    })
}

function subtract(array) {
    return array.reduce((total, current) => {
        total -= current;
        return total;
    })
}

function multiply(array) {
    return array.reduce((total, current) => {
        total *= current;
        return total;
    })
}

function divide(array) {
    return array.reduce((total, current) => {
        total /= current;
        return total;
    })
}

function operate(num1, num2, operator) {
    const array = [];
    array.push(num1, num2)

    switch(operator) {
        case "+":
            return add(array)
        case "-":
            return subtract(array)
        case "*":
            return multiply(array)
        case "/":
            return divide(array)
    }
}