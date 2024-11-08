const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
      7
// b) How many function calls are there?

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
      "%" is a operator that returns the remainder left over when one operand is divided by a second operand.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
     // Of the total seconds it only gives us the seconds that when converted into minutes (dividing them by 60) give us an exact number of minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
      //Duration of a movie in Hours Minutes Secons
// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
        n
