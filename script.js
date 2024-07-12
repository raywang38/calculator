let num1;
let num2;
let operator;

const displayField = document.querySelector(".displayField");

const numButtons = document.querySelectorAll(".numpad button")

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {            
        if (!operator) {
            num1 = parseInt(numButton.textContent);
            displayField.textContent = num1;
        }
        else {
            num2 = parseInt(numButton.textContent);
            displayField.textContent = num2;
        }
    })
})

const operatorButtons = document.querySelectorAll(".operators button")

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (operatorButton.textContent === "=") {
            const total = operate(num1, num2, operator);
            displayField.textContent = total;
            num1 = total;
        }
        else {
            operator = operatorButton.textContent;
        }
    })
})

const topPadButtons = document.querySelectorAll(".toppad button")

topPadButtons.forEach((topPadButton) => {
    topPadButton.addEventListener("click", () => {
        if (topPadButton.textContent === "%") {
            operator = topPadButton.textContent;
        }
        else if (topPadButton.textContent === "+/-") {

        }
        else if (topPadButton.textContent === "AC") {
            num1 = "";
            num2 = "";
            operator = "";
            displayField.textContent = "";
        }
    })
})

function add(array) {
    return array.reduce((total, current) => {
        total += current;
        return total;
    })
}

function divide(array) {
    return array.reduce((total, current) => {
        total /= current;
        return total;
    })
}

function modulo(array) {
    return array.reduce((total, current) => {
        total = total % current;
        return total;
    })
}

function multiply(array) {
    return array.reduce((total, current) => {
        total *= current;
        return total;
    })
}

function subtract(array) {``
    return array.reduce((total, current) => {
        total -= current;
        return total;
    })
}

function operate(num1, num2, operator) {
    const array = [];
    array.push(num1, num2)

    switch(operator) {
        case "+":``
            return add(array);
        case "-":
            return subtract(array);
        case "*":
            return multiply(array);
        case "/":
            if (num2 === 0) {
                alert("You can't divide by 0! You should know better.")
                break;
            }
            return divide(array);
        case "%":
            return modulo(array);
    }
}