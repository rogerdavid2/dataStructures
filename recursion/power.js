function power(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n % 2 == 0) {
        return power(x * x, n / 2);
    }
    return x * power(x, n - 1)
}

// Should return 8
console.log(power(2, 3));

// Should retun 1
console.log(power(2, 0))

// Should return 3
console.log(power(3, 1))