import { list } from './users.js';

const userName = 'Pista';
console.log(list[0].name);

// Primitive types
const active = true; // boolean
const age = 33; // number
const message = 'Hello'; // string
const nothing = null; // object
let start; // undefined

console.log(typeof active);
console.log(typeof age);
console.log(typeof message);
console.log(typeof nothing);
console.log(typeof start);

Number.prototype.hello = function() {
    console.log(this);
    console.log('Hello from number');
};

age.hello();
const streetNumber = 55;
streetNumber.hello();

// Collections
const numbers = [1, 2, 3, 4, 5, 6, 7];
const settings = [1, true, [44, 55], 'my sweet heart'];
console.log(settings[2][1]);
console.log(settings.length);

// Object
console.log( list[0].age );
const key = 'name';
console.log(list[0][key]);

