// javascript loop

function loopSyntax() {
    // for loop syntax
    for (initialExpression; condition; updateExpression) {
        // for loop body
    }

    // while loop syntax
    while (condition) {
        // body of loop
    }

    // do while loop syntax
    do {
        // body of loop
    } while (condition);

    // switch case syntax
    switch (expression) {
        case value01:
            // code block to be executed
            // if expression matches value01
            break;
        case value02:
            // code block to be executed
            // if expression matches value02
            break;
        default:
            // code block to be executed
            // if expression doesn't match any case
    }
}

function forLoopConditional() {
    // print numbers from 1 to 5
    for (let i = 1; i < 6; i++) {
        console.log(i);
    }

    // program to display the sum of natural numbers
    let sum = 0;
    let n = 100;

    // loop for i = 1 to i = n
    // in each interation, i is increased by 1
    for (let i = 1; i <= n; i++) {
        sum += i; // sum = sum + 1
    }
    console.log(`sum: ${sum}`);

    // program to iterate through an array
    const fruits = ["apple", "banana", "cherry"];

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

function whileLoopConditional() {
    // display numbers from 1 to 3
    // initialize variable i
    let i = 1;

    // loop runs until i is less than 4
    while (i < 4) {
        console.log(i);
        i += 1;
    }
}

function doWhileLoopConditional() {
    // display numbers from 3 to 1
    let i = 3;

    // do while loop
    do {
        console.log(i);
        i--;
    } while(i > 0);
}

function breakStatement() {
    // break with for loop

    // program to print the value of i
    for (let i = 1; i <= 5; i++) {

        // break condition
        if (i == 3) {
            break;
        }

        console.log(i);
    }
}

function continueStatement() {
    // continue with for loop
    for (let i = 1; i <= 10; i++) {
        // skip interation if value of
        // i is between 4 and 9
        if (i > 4 && i < 9) {
            continue;
        }

        console.log(i);
    }

    // continue with while loop
    var num = 1;

    while (num <= 10) {
        // skip iteration if num is even
        if (num % 2 === 0) {
            ++num;
            continue;
        }

        console.log(num);
        ++num;
    }
}

function switchCaseStatement() {
    // program to traffic light with switch case
    let trafficeLight = "green";
    let message = "";

    switch (trafficeLight) {
        case "red":
            message = "Stop immediately.";
            break;
        case "yellow":
            message = "Prepare to stop.";
            break;
        case "green":
            message = "Proceed or continue driving.";
            break;
        default:
            message = "Invalid traffice light color.";
    }

    console.log(message);

    // program day of the week with switch case
    let day = 3;

    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
    }
}

export function loop() {
    // for loop function
    forLoopConditional();

    // while loop conditional
    whileLoopConditional();

    // do while loop conditional
    doWhileLoopConditional();

    // break statement with loop
    breakStatement();

    // continue statement with loop
    continueStatement();

    // switch case statement
    switchCaseStatement();
}
