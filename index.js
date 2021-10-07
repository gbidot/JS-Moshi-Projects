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

//If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.
let points = 110
//points > 100 results in a boolean (i.e. true or false) 
//? is a ternary meaning it will evaluate the first expression following (gold) and if not true will push second option (silver)
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//Logical AND (&&) 
//Logical OR (||)
//NOT (!)