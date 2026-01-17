// javascript object

// creating a simple object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}

// array of objects
let cars = [
    { make: "Toyota", model: "Corolla", year: 2021},
    { make: "Honda", model: "Civic", year: 2020},
    { make: "Ford", model: "Focus", year: 2022},
];

// nested objects
let people = {
    name: "Chanrith",
    age: 23,
    address: {
        street: "Street 2011",
        city: "Phnom Penh",
        zipCode: "12345"
    }
};

// comparing objects 
function areObjectEqual(obj01, obj02) {
    const keys01 = Object.keys(obj01);
    const keys02 = Object.keys(obj02);

    if (keys01.length !== keys02.length) {
        return false;
    }

    for (let key of keys01) {
        if (obj01[key] !== obj02[key]) {
            return false;
        }
    }

    return true;
}

// object constructor function
function person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

export function object() {
    // creating a simple object
    // (Create an object named car)
    console.log(car);

    // accessing properties
    // (Access the model property of the car object)
    let carModel = car.model;
    console.log("The model of the car is:", carModel);

    // modifying properties
    // (Modify the year property of the car object)
    car.year = 2022;
    console.log("Updated Car:", car);

    // iterating over properties
    // (Use a loop to print all properties of the car object)
    for (let key in car) {
        console.log(key + ":", car[key]);
    }

    // array of objects
    // (Create an array of car objects and print the details of each one)
    cars.forEach(car => {
        console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
    });

    // nested objects
    // (Create a people object with a nested address object)
    console.log(`Address: ${people.address.street}, ${people.address.city}, ${people.address.zipCode}`);

    // deleting properties
    // (Delete a property from the car object)
    delete car.year;
    console.log("Year property deleted:", !car.hasOwnProperty('year'));
    console.log("Updated Car:", car);

    // functions inside objects
    // (Add a function to the car object to describe it)
    car.describe = function () {
        return `This is a ${this.make} ${this.model} from ${this.year}`;
    }
    console.log(car.describe());

    // comparing objects
    // (Compare two objects to check if they are identical)
    let car01 = { make: "Toyota", model: "Corolla", year: 2021};
    let car02 = { make: "Toyota", model: "Corolla", year: 2021};
    let car03 = { make: "Honda", model: "Corolla", year: 2021};

    console.log("Are car01 and car02 equal?", areObjectEqual(car01, car02));
    console.log("Are car02 and car03 equal?", areObjectEqual(car02, car03));

    // object constructor function
    // (Write a constructor function to create Person objects)
    let person01 = new person("Alice", 30, "Engineer");
    let person02 = new person("Bob", 25, "Designer");

    console.log(person01);
    console.log(person02);
}
