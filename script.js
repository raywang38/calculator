let num1;
let num2;
let operator;

const displayField = document.querySelector(".displayField");

const numButtons = document.querySelectorAll(".numpad button")

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {
        if (displayField.textContent.length >= 8) {
            return;
        }
        else if (numButton.textContent === "." && !(displayField.textContent.includes("."))) {
            displayField.textContent += numButton.textContent;
            return;
        }
        else if (numButton.textContent === "." && displayField.textContent.includes(".")) {
            return;
        }
        else if (numButton.textContent === "Back") {
            displayField.textContent = displayField.textContent.slice(0, -1);
            return;
        }
        else if (num1 === parseInt(displayField.textContent)) {
            displayField.textContent = numButton.textContent;
            return;
        }

        displayField.textContent += numButton.textContent;          
    })
})

const operatorButtons = document.querySelectorAll(".operators button")

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (operatorButton.textContent === "=") {
            num2 = parseFloat(displayField.textContent)
            const total = operate(num1, num2, operator).toFixed(4) * 1;
            displayField.textContent = total;
            num1 = total;
            operator = "";
        }
        else {
            num1 = parseFloat(displayField.textContent);
            operator = operatorButton.textContent;
            displayField.textContent = "";
        }
    })
})

const topPadButtons = document.querySelectorAll(".toppad button")

topPadButtons.forEach((topPadButton) => {
    topPadButton.addEventListener("click", () => {
        if (topPadButton.textContent === "+/-") {
            if (displayField.textContent.includes("-")) {
                displayField.textContent = displayField.textContent.replace("-", "");
            }
            else {
                displayField.textContent = "-" + displayField.textContent;
            }
        }
        else if (topPadButton.textContent === "%") {
            num1 = parseFloat(displayField.textContent);
            operator = topPadButton.textContent;
            displayField.textContent = "";
        }
        else if (topPadButton.textContent === "AC") {
            num1 = "";
            num2 = "";
            operator = "";
            displayField.textContent = "";
        }
    })
})

function handleKey(key) {
    if (displayField.textContent.length >= 8) {
        return;
    }
    else if (num1 === parseInt(displayField.textContent)) {
        displayField.textContent = key;
    }
    else if (!(isNaN(key))) {
        displayField.textContent += key;
    }
    else if (key === "Backspace") {
        displayField.textContent = displayField.textContent.slice(0, -1);
    }
    else if (key === "Enter") {
        num2 = parseFloat(displayField.textContent)
        const total = operate(num1, num2, operator).toFixed(4) * 1;
        displayField.textContent = total;
        num1 = total;
        operator = "";
    }
    else if (key === "c") {
        num1 = "";
        num2 = "";
        operator = "";
        displayField.textContent = "";
    }
    else if (key === "." && !(displayField.textContent.includes("."))) {
        displayField.textContent += key;
    }
    else if (["-", "+", "*", "/", "%"].includes(key)) {
        num1 = parseFloat(displayField.textContent);
        operator = key;
        displayField.textContent = "";        
    }
}

document.documentElement.addEventListener("keydown", (event) => {
    handleKey(event.key);
    event.preventDefault();
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