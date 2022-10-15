let n = Math.random();
Math.floor(n) + 1;
console.log(n);

//develop a love calculator
/*
prompt("What is your name");

let lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
console.log(lovescore); // this is just a console display.

//normal concatenation
// alert("your love score is" + " " + +lovescore + "%" + +" " + "thank you");

//template literal
// alert(
//   "your love score is" +
//     `${" "}` +
//     `${lovescore}` +
//     "%" +
//     `${" "}` +
//     "thank you"
// );

//it would be fine if the number comes with a costom message
//this would be done using
//control flows(conditional statements(IF $ ELSE IF))


if (lovescore > 70) {
  alert(
    "your love score is" +
      `${" "}` +
      `${lovescore}` +
      "%" +
      `${" "}` +
      "thanks, you make a good match "
  );
}
if (lovescore > 30 && lovescore <= 70) {
  alert(
    "your love score is" +
      `${" "}` +
      `${lovescore}` +
      "%" +
      `${" "}` +
      "bad market "
  );
}
if (lovescore <= 30) {
  alert(
    "your love score is" +
      `${" "}` +
      `${lovescore}` +
      "%" +
      `${" "}` +
      "run for your life"
  );
}
*/
//we can add comparators to the costom masseges above by using
//combo moves /comparators
//(===, ==, => , <=, && , ||, !)

// check for a leap year
// note it must be divisible by 4 100 and 400 to be a leap year else is not a leap year.
// learn how to use flow chat through draw.io
/*
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Is a Leap Year";
      } else {
        return "Is Not a Leap Year";
      }
    } else {
      return "Is Not a Leap Year";
    }
  } else {
    return "Is Not a Leap Year";
  }
}
*/
//solving fixbuz issue
/*
for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buz");
  } else {
    console.log(i);
  }
}
*/

/*
const output = [];
let count = 1;

function fizzbuz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzbuz");
    } else if (count % 3 === 0) {
      output.push("fiz");
    } else if (count % 5 === 0) {
      output.push("buz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
fizzbuz();
*/

//write a program which will select a random name from a list of names.
//the person selected will have to pay for everybodys food bill

//Note: the output should e returned from the function and you do not need
// ALERT, PROMPR OR CONSOLE.LOG.
const names = ["angela", "samson", "haruna", "samuel", "chuks", "silas"];
function whoIsPaying() {
  const numberOfPeople = names.length;
  const randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  const randomPerson = names[randomPersonPosition];
  return `${randomPerson}` + " is the one paying";
}
console.log(whoIsPaying());

// NOTE THAT
// WHILE LOOP CHECKS A STATE OF SOMETHING; IE IF SOMETHING IS TRUE THE DO SOMETHING OTHERWISE DO THE OTHER
//FOR LOOP BASICALLY ITERATE IN AN OBJECT OR ARRAY.

function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
output = fibonacciGenerator(5);
console.log(output);

//
