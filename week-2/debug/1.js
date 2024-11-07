// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// The error is in the syntax of "return" the expression "a+b" never is evaluated.

function sum(a, b) {
  return a + b;
}

console.log(sum(2,3));


