// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//The difference between console.log and return it`s that "console.log" only shows the operations but does not save the result instead "return" yes, is does.
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
