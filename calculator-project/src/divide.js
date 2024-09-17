export function divide(a, b) {
    if (b === 0) {
        console.error('Cannot divide by zero');
        return NaN;
    }
    return a / b;
}