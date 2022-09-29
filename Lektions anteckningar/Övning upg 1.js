
let myName = 'Israa Hasib Ismail'
let firstName = 'Israa'
let lastName = 'Hasib Ismail'

console.log(" Jag heter " + firstName + " i förnamn och " + lastName + " i efternamn ")

const user = {
    firstName: 'Israa',
    lastName: 'Hasib Ismail',
    age: '18',
    height: '170',
    weight: '70',
};

user.haircolour = 'Brown';

console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.height);
console.log(user.weight);

let userJson = JSON.stringify(user);
console.log(userJson);
console.log(`${firstName} är ${age} år gammal, ${height} meter lång, har hårfärgen ${haircolour} och väger ${weight} kg.`)
