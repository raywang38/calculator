let num1;
let num2;
let operator;

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

console.log(operate(4, 6, "*"))