function daysOfAYear(year) {
  // Check if the year is a leap year
  // Leap years are divisible by 4, except for years divisible by 100, unless they are divisible by 400
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Return the number of days based on whether it's a leap year or not
  return isLeapYear ? 366 : 365;
}

// Prompt the user for input and call the function
const inputYear = parseInt(prompt("Enter a year (between 1 and 9999):"), 10);

if (!isNaN(inputYear) && inputYear >= 1 && inputYear <= 9999) {
  const result = daysOfAYear(inputYear);
  alert(`The number of days in ${inputYear} is ${result}.`);
} else {
  alert("Invalid input. Please enter a valid year between 1 and 9999.");
}
