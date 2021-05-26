// # Review - Conditionals

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Save a random whole number between - 10 and 10 to a variable.

const number = Math.floor(Math.random() * 20) - 10;
console.log(number);

// 2. If that variable is greater than 0, print "Ye" and otherwise print "No"



if (number > 0) {
    console.log("Ye");
} else {
    console.log(2, "No");
}
// console.log("");
// console.log(age > 0) ? "Ye" : "No";




// 3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"



if (number > 5) {
    console.log("============", "Winner");
} else if (number > 0) {
    console.log("============", "OK");
} else {
    console.log("============", "Try again!");
}


// 4. Save another random number between - 10 and 10 to a variable.

const number2 = Math.floor(Math.random() * 20) - 10;

// 5. If both variables are more than 5, print "Good scores!"

if (number > 5 && number2 > 5) {
    console.log("Good Scores!");
} else {
    console.log("Bad Score");
}

// 6. If either variable is below - 9, print "Minus nine!"

if (number2 < -9 || Number < -9) {
    console.log("Minus nine");
} else {
    console.log("More then nine");
}

// 7. Create a variable to store a message.If your random numbers added together is smaller than zero, save the message "We have gone sub zero!".Otherwise, set the message to null.

let x;
const y = number + number2;
if (y < 0) {
    x = "We have gone sub zero!";
} else {
    x = null;
}
console.log(x);