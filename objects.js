// objects basics

let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021
};

let cadiDev = {
    make: 'Cadillac',
    model: 'Coupe Deville',
    type: 'coupe',
    year: 1949,
    engine: '331 CID V8',
    color: 'green',
    price: 3.496,
    passengers: 4
};

// magnets

let dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'
};
let bark1;
if (dog.weight > 20) {
    bark1 = 'WOOF WOOF';
} else {
    bark1 = 'woof woof';
};
let speak = dog.name + ' says ' + bark1 + ' when he wants to ' + dog.activity;
console.log(speak);

