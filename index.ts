#! /usr/bin/env node

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {message: "enter first number" , type: "number", name: "firstnumber"},
    {message: "enter secand number" , type: "number", name: "secandnumber"},
    {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"],},
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secandnumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secandnumber );
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secandnumber);
}
  else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secandnumber );
}  else {
    console.log("please select valid operator")
}
