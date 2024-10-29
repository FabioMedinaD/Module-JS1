/*
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
ERRORS:
1).slice only used in strings or arrays, cardNumber is a number, we need that cardNumber to be a string
2)The structure of "slice" is as follows: array.slice(from,to)
*/

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

var cardNumber = 4533787178994213;
cardNumber = cardNumber.toString();
const last4Digits = cardNumber.slice(0,4);
console.log(last4Digits);


