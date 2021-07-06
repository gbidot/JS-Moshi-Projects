// First JS code!
console.log('Hello World');

let name = 'Mosh'; //string literal
console.log(name);

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive

let firstName = 'Gabe'
console.log(firstName);

const interestRate = 0.3;
console.log(interestRate);

let age = 30; //number literal
let isApproved = true; //Boolean literal. Can also be false
let lastName;
let selectedColor = null;

let person = {
    name: 'Mosh',
    age: 30
};
//Dot Notation
person.name = 'John';

//Bracket Notation
person['name'] = 'Mary';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors [2] = 'green';
console.log(selectedColors.length);
