// javascript comparison

function equalToOperator() {
    // same value, same type
    console.log(5 == 5); // true

    // same value, different type
    console.log(2 == "2"); // true

    // different values, same type
    console.log("hello" == "Hello"); // false
}

function notEqualToOperator() {
    // same value, same type
    console.log(2 != 2); // false

    // same value, different type
    console.log(2 != "2"); // false

    // different value, same type
    console.log(2 != 3); // true
}

function strictEqualToOperator() {
    // same value, same type
    console.log(2 === 2); // true

    // same value, different type
    console.log(2 === "2"); // false
}

function strictNotEqualToOperator() {
    // same value, same type
    console.log(2 !== 2); // false

    // same value, different type
    console.log(2 !== "2"); // true

    // different value, same type
    console.log("Hello" !== "World"); // true
}

function greaterThanOperator() {
    // left operand is greater
    console.log(3 > 2); // true

    // both operands are equal
    console.log(4 > 4); // false

    // left operand is smaller
    console.log(2 > 5); // false
}

function greaterThanOrEqualOperator() {
    // left operand is greater
    console.log(3 >= 2); // true

    // both operands are equal
    console.log(4 >= 4); // true

    // left operand is smaller
    console.log(2 >= 5); // false
}

function lessThanOperator() {
    // left operand is small
    console.log(2 < 5); // true

    // both operand are equal
    console.log(4 < 4); // false

    // left operand is greater
    console.log(3 < 2); // false
}

function lessThanOrEqualToOperator() {
    // left operand is smaller
    console.log(2 <= 5); // true

    // both operands are equal
    console.log(4 <= 4); // true

    // left operand is greater
    console.log(3 <= 2); // false
}

export function comparison() {
    // equal to operator function
    equalToOperator();

    // not equal to operator function
    notEqualToOperator();

    // strict equal to function
    strictEqualToOperator();

    // strict not equal to operator function
    strictEqualToOperator();

    // greater than operator function
    greaterThanOperator();

    // greater than or equal operator function
    greaterThanOrEqualOperator();

    // less than operator function
    lessThanOperator();

    // less than or equal operator function
    lessThanOrEqualToOperator();
}
