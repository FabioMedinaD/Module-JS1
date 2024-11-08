const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose/rationale behind each step
// You should use MDN to look up substring, padStart, and padded to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
/* 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
use .substring for eliminate "p" and return a new substring 399 ( without "p") start:0 until 3(4-1)
*/

/* 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
.padStart(3,0) pads this string with another string (multiple times, if needed) until the resulting string reaches the given length, in this case, pads with "0" until reaches the length 3.  
*/

/* 4. paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
 .substring(0,1(3-1)) returns 3 in a substring and assigns it to the constant pounds
*/
/*5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0")
.substring(paddedPenceNumberString.length - 2) return 99 and .padEnd(2, "0") fills it  with "0" at the end of the string until it reacheslength 2.
*/
