// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
//Error
//"decimalNumber" has already been declared that`s why the variable "decimalNumber"  can`t declared again.
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
