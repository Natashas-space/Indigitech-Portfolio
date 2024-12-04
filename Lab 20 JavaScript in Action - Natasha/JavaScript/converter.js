// Natasha Holloran, Lab 20, 2024-12-04

let USD = Number(prompt(" Please enter the dollar amount in USD "));
let exchangeRate = 1.41;
let prevExchangeRate = 1.35;
// defining exchange Rates
let CAD = USD * exchangeRate;
let prevCAD = USD * prevExchangeRate;

// Comparisons

let comparison1 = CAD > prevCAD;
let comparison2 = exchangeRate === prevExchangeRate;

console.log(comparison1);
console.log(comparison2);

// Concatenation Results

alert(" Today's CAD amount is: $" + CAD);
alert(" Yesterday's CAD amount is: $" + prevCAD);
alert(" The exchange rate has increased. ");

console.log(USD);
console.log(CAD);
console.log(prevCAD);
