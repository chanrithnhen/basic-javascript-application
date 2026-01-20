// javascript logical operator

function logicalAndOperator() {
    let x = 2

    // both expressions are true
    console.log((x < 4) && (4 >= x)); // true

    // only one expression is true
    console.log((x <= 4) && (2 == 4)); // false

    // both expressions are false
    console.log((x > 4) && (x == 4)); // false
}

function logicalOrOperator() {
    let x = 2;

    // both expressions are true
    console.log((x < 4) || (4 >= x)); // true

    // only one expression is true
    console.log((x <= 4) || (2 == 4)); // true

    // both expressions are false
    console.log((x > 4) || (x == 4)); // false
}

function logicalNotOperator() {
    // not on true
    console.log(!true); // false

    // not on false
    console.log(!false); // true

    // comparison example
    console.log(!(2 < 3)); // false
}

export function logical() {
    // logical and operator
    logicalAndOperator();

    // logical or operator
    logicalOrOperator();

    // logical not operator
    logicalNotOperator();
}
