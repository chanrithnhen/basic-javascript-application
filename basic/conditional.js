// javascript conditional statement

function conditionalSyntax() {
    // if statement
    if (condition) {
        // block of code
        // execute this if condition is true
    } else {
        // block of code
        // execute this if condition is false
    }

    // else if statement
    // check for first condition
    if (condition01) {
        // if body
    }

    // check for second condition
    else if (condition02) {
        // else if body
    }

    // if no condition matches
    else {
        // else body
    }
}

function conditionalExample01() {
    // if conditional statement
    let age = 17;

    // if age is 18 or above, you are an adult
    // otherwise, you are a minor
    if (age >= 18) {
        console.log("You are an adult");
    } else {
        console.log("You are a minor");
    }
}

function conditionalExample02() {
    // if else if conditional statement
    let rating = 4;
    
    // rating of 2 or below is bad
    // rating of 4 or above is good
    // else, the rating is average
    if (rating < 2) {
        console.log("Bad rating");
    }
    else if (rating >= 4) {
        console.log("Good rating!");
    }
    else {
        console.log("Average rating");
    }
}

function conditionalExample03() {
    // nested if else conditional statement
    let marks = 60;

    // outer if else statement
    // student passed if marks 40 or above
    // otherwise, student failed

    if (marks >= 40) {
        // inner if else statement
        // distinction if marks is 80 or above

        if (marks >= 80) {
            console.log("Distinction");
        }
        else {
            console.log("Passed");
        }
    }
    else {
        console.log("Failed");
    }
}

export function conditional() {
    // if conditional statement function
    conditionalExample01();

    // if elseif conditional statement function
    conditionalExample02();

    // nested if else conditional statement function
    conditionalExample03();
}
