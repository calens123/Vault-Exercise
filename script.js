/*
    Use js to calculate the numbers for a combination lock (10 - 40 -39) and display alert pop-up to user.
*/

//Setting variable for the first pop up

const firstMsg =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//First alert, contains previous variable
alert(firstMsg);

//Setting variables for vault code within 2nd pop up
const secondMsg = "Here is your secret combination:";
const num1 = 5 * 2;
const num2 = 80 / 2;
const num3 = 50 - 11;
const fullMsg = `${secondMsg} ${num1} - ${num2} - ${num3}`;

//Display 2nd pop up with string of previous variables
alert(fullMsg);
