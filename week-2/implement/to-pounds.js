// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs
function toPounds (penceString){
let penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
let pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");  
return `£${pounds}.${pence}`
}

console.log(toPounds("4990P"));
console.log(toPounds("499P"));
console.log(toPounds("99P"));
console.log(toPounds("9P"));

