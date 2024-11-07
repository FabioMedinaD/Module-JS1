
// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

function square(3) {
    return num * num;
}
//Error:
// in this case "3" isn`t a variable, in the function square  "num" has not  yet 
been declared .
function square(num) {
    return num * num;
}
console.log(square(3));
    
