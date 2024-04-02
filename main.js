#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 125200;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
else if (pinAnswer.pin !== myPin) {
    console.log("your pin is wrong please try again!!!");
}
let operationAnser = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fastCash"]
    }
]);
if (operationAnser.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    // = , -= , += 
    myBalance -= amountAnswer.amount;
    console.log("your remaining balance is:" + myBalance);
}
if (operationAnser.operation === "fastCash") {
    let fast = await inquirer.prompt([
        {
            name: "Cash",
            message: "choose that one option",
            type: "list",
            choices: ["1000", "5000", "10000"]
        }
    ]);
    myBalance -= fast.Cash;
    console.log("your remaining balalnce is :" + myBalance);
}
else if (operationAnser.operation === "check balance") {
    console.log(" your balance is: " + myBalance);
}
else {
    console.log("incorrect pin code");
}
