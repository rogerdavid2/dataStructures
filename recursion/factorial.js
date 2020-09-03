function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

// Should return 24
console.log(factorial(4));

// Should return 6
console.log(factorial(3));

// Should return 0;
console.log(factorial(0));