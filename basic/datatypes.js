// javascript data types

function stringType() {
    // string type
    let fruit = 'apple';
    let country = 'Cambodia';
    let result = `fail`;

    console.log(fruit);
    console.log(country);
    console.log(result);
}

function numberType() {
    // number type

    // integer value
    let integer_number = -3;
    console.log(integer_number);

    // floating-point value
    let float_number = 3.5;
    console.log(float_number);
}

function bigIntType() {
    // bigint type
    let value01 = 900719925124740998n;

    let result01 = value01 + 1n;
    console.log(result01);
}

function booleanType() {
    // boolean type
    let dataChecked = true;
    console.log(dataChecked);

    let valueCounted = false;
    console.log(valueCounted);
}

function undefinedType() {
    // underfined type
    let name;
    console.log(name);
}

function nullType() {
    // null type
    let number = null;
    console.log(number);
}

function symbolType() {
    // symbol type
    // two symbols with the same description
    let value02 = Symbol("drxtech");
    let value03 = Symbol("drxtech");

    console.log(value02 === value03);
}

function objectType() {
    // object type
    let student = {
        firstname: "Nhen",
        lastname: null,
        class: 10
    };

    console.log(student);
}

export function datatypes() {
    // string type function
    stringType();

    // number type function
    numberType();

    // bigint type function
    bigIntType();

    // boolean type function
    booleanType();

    // underfined type function
    undefinedType();

    // null type function
    nullType();

    // symbol type function
    symbolType();

    // object type function
    objectType();
}
