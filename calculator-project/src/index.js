import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';
import { printResult } from './printResult.js';


let a = 10;
let b = 5;

let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);

printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);