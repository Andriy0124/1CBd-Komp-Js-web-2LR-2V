function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var n = parseInt(prompt("Введіть номер n-го числа Фібоначчі:"));

if (!isNaN(n) && n >= 0) {
    console.log(" число Фібоначчі: " + fibonacci(n));
} else {
    console.log("Введено некоректне значення.");
}
