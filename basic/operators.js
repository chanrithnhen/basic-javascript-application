// javascript operators

function arithmeticOperator() {
    // arithmetic operator
    let x = 5;
    console.log("x = ", x);

    // addition operator
    console.log("Addition: x + 3 = ", x + 3);

    // substraction operator
    console.log("Substraction: x - 3 = ", x - 3);

    // multiplication operator
    console.log("Multiplication: x * 3 = ", x * 3);

    // division operator
    console.log("Division: x / 3 = ", x / 3);

    // remainder operator
    console.log("Remainder: x % 3 = ", x % 3);

    // increment operator
    console.log("Increment: ++x = ", ++x);

    // decrement operator
    console.log("Decrement: --x = ", --x);

    // exponentation operator
    console.log("Exponentation: x ** 3 = ", x ** 3);
}

function assignmentOperator() {
    // assignment operator
    let y = 5;
    console.log("Assignment: y = 7, y = ", y);
    // addition assignment operator
    y += 5; // a = a + 5
    console.log("Addition Assignment: y += 5, y = ", y);
    // substraction assignment operator
    y -= 5; // a = a - 5
    console.log("Substraction Assignment: y -= 5, y = ", y);
    // multiplication assignment operator
    y *= 2; // y = y * 2
    console.log("Multiplication Assignment: y *= 2, y = ", y);
    // division assignment operator
    y /= 2; // y = y / 2
    console.log("Division Assignment: y /= 2, y = ", y);
    // remainder assignment operator
    y %= 2; // y = y % 2
    console.log("Remainder Assignment: y %= 2, y = ", y);
    // exponentiation assignment operator
    y **= 2;
    console.log("Exponentiation Assignment: y **= 2, y = ", y);
}

function comparisonOperator() {
    // comparison operator
    const a = 3, b = 2;
    console.log(a > b);

    // equal to operator
    console.log("Equal to: 2 == 2 is", 2 == 2);

    // not equal to operator
    console.log("Not equal to: 3 != 3 is", 3 != 3);

    // strictly equal to operator
    console.log("Strictly equal to: 2 === '2' is", 2 === '2');

    // strictly not equal to operator
    console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

    // greater than operator
    console.log("Greater than: 3 > 3 is", 3 > 3);

    // less than operator
    console.log("Less than: 2 > 2 is", 2 > 2);

    // greater than or equal to operator
    console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

    // less than or equal to operator
    console.log("Less than or equal to: 2 >= 2 is", 2 >= 2);
}

function logicalOperator() {
    // logical operator
    let x = 3;

    // logical and
    console.log((x < 5) && (x > 0));
    console.log((x < 5) && (x > 6));

    // logical or
    console.log((x > 2) || (x > 5));
    console.log((x > 3) || (x < 0));

    // logical not
    console.log(!(x === 3));
    console.log(!(x < 2));
}

function bitwiseOperator() {
    // bitwise operator
}

function stringOperator() {
    // string operator
    let str01 = "Hel", str02 = "lo";
    console.log(str01 + str02);
}

function miscellaneousOperator() {
    // miscellaneous operator
}

export function operators() {
    // arithmetic operator function
    arithmeticOperator();

    // assignment operator function
    assignmentOperator();

    // comparison operator function
    comparisonOperator();

    // logical operator function
    logicalOperator();

    // bitwise operator function
    bitwiseOperator();

    // string operator function
    stringOperator();

    // miscellaneous operator function
    miscellaneousOperator();
}
