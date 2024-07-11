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

console.log(divide([4, 3, 2, 1]));