function fibonacci(number) {
    if (number < 2) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

// Should return 3
console.log(fibonacci(4));

// Should return 0
console.log(fibonacci(0));

// Should return 8
console.log(fibonacci(6));