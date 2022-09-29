// Boolean true/false

let text = 'hej'; // true
let text2 = ''; // false

let email = 'israahasibismail@gmail.com';

console.log(email.includes('@')) // true
console.log(email.includes('1')) // false

console.log(true == 0) // false då 0 inte är ett true värde
console.log(false == 0) // true 

// -1 falsy värde = false
// 0 falsy värde = false

// 1 true värde = true

console.log(1 == true)
console.log(2 == true)
console.log(3 == true)
console.log(4 == true)
console.log(5 == true)
// Endast 1 blir true, resten blir false så alla true värden behöver inte vara true


// compare statements

let number = 13;
let string = '13';

// Påstå att number är 13
console.log(number == 13); // true
console.log(number == 20); // false

// Påstå att number INTE är 13
console.log(number != 13); // false
console.log(number != 20); // true

// Större än
console.log(number > 13);
//Större än eller lika med
console.log(number >= 13);

console.log(number == string); // == jämför bara värdet 
console.log(number === string); // === jämföra värdet och datatypen

console.log(string != number); // TEXTEN 13 och NUMMER 13 är INTE samma
console.log(string !== number); // Jämför värdena och INTE datatypen
console.log(string !=== number); // Jämför värdena OCH datatypen


// IF satser
// Om det är true kommer den forsätta men om det är false kommer den hoppas över det

if(false) {

}

if(true) {

}

let isLoggedIN = false
isLoggedIN = true

if(isLoggedIN === true) {
    console.log('användaren är inloggad')
}


// Array

const names = [];

names.push ('Israa')
console.log(names)

if(names.length > 0) {
    console.log('arrayen names är längre än 0')
}

if(typeof number === typeof string) {
    console.log('yay')
}

if('text' === 'text') {
    console.log('texten är lika')
}
// Allt handlar om påståenderna (är allt sant eller falskt )

let name = 'Israa'

if (name === 'Joakim') {
    console.log('namnet är Israa')
}


// Switch bättre och snabbar än IF sats
// IF sats inte många jämförelser, Switch många jämförelser

let color = 'red';
  
switch(color) {
    
    case 'red':
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;

    case 'white':
        console.log('color is white');
        break;

    default:
        console.log('color unknown!');

}

let nr = 2

// jobbar som att det är 3st =
switch(nr) {
    case '2':
        console.log('Det är "2"');
        break;
        case 2:

    }


// Loopar

const namesArray = ['Israa', 'Ala', 'Shekila'];

const userArray = [
    {name: 'Israa', email: 'israahasibismail@gmail.com', age: 19, status: true},
    {name: 'Ala', email: 'ala@gmail.com', age: 40, status: false},
    {name: 'Shekila', email: 'shekila@gmail.com', age: 19, status: false},
]
 
 // FOR loopar - loopar ett givet antal gånger

for(let i = 0; i < 3; i++) { // array.length loopar igenom en hel array
    console.log(i)
    console.log(names[i])
} 


 // FOR OF - loopar igenom en hel array

 for(let name of namesArray) {
    console.log(name)
 }

for(let user of usersArray) {
    console.log(user.name, user.age)
}


// Samma som ovan fast FOR EACH
userArray.forEach(user => {
    console.log(user.name, user.age)
})


// WHILE

let i = 0;

while( i < 5) {
    console.log('while:' + i);
    i++;
}
console.log(i)


// DO WHILE - kommer alltid att köras minst 1 gång

do {
    console.log('do while:' + i);
    i++;
} while(i < 10)
console.log(i)


// SCOPE

let age = 34; // global scope

if(true) {
    let fName = 'Israa'; // Local scope (scope = område du har tillgång till)
    console.log('inne i 1a kodblocket', age, fName);

    if(true) {
        age = 100;
        console.log('inne i kodblock 1.2', age, fName)
    }
}

if(true) {
    console.log('kodblock 2')
}

console.log('utanför något block', age);


// Funktioner
// är till för att underlätta, så vi slipper repetera vår kod

// Deklarera en funktion

function hej () {
    console.log('hej på dig');
}

const greet = function() {
    console.log('hur är läget?')
}

// köra en funktion
hej ();
greet();

let firstName = 'Israa';

const greet = function(name) {
    console.log(`Hej ${name} hur är läget?`)
}

greet('Israa')
greet('Shekila')
greet(firstName)


// Funktion som tar in ett förnamn och efternamn och spottar ut

const getFulName = function(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    
    return fullName
    return `${firstName} ${lastName}`
}

const fulName = getFulName('Israa', 'Hasib Ismail');
let test = getFulName('I', 'H.I')
console.log(fullName)
console.log(getFulName('Ala', 'Osman Sofi'))

// return har samma funktion som en break i en switch 

const calc = function(num1, num2) {
    let sum = +num1 + +num2 // Ett + framför konverterar ett nummer till en siffra
    return num1 + num2
}

console.log(calc(5, 10)) // Svar: 15
console.log(calc('5', '10')) // Svar: 510


// ARROW FUNCTIONS
const calc2 = (num1, num2) => {
    return +num1 + +num2
}

const calc2 = (num1, num2) => +num1 + +num2

console.log(calc2(10, 10))

// När man bara har EN parameter så behövs inte parateserna
const greet2 = name => `Hejsn ${name}`;

console.loh(greet2('Nisse'));

// En arrow function har som syfte att INTE binda nyckelordet "this"


// METODER - funktioner som hör ihop med ett objekt

const user = {
    firstName: 'Israa',
    lastName: 'Hasib Ismail',
    fullName: function() {
        return this.firstName + '' + this.lastName
    },
    arrow: () => {
        console.log('regular function', this)
    },
    regularFunction: function() {
        console.log('regular function', this)
    }
}

console.log(this)
user.arrow()
user.regularFunction()



// Förgående grejer
.sort((a, b) => {
    return a - b
    // 10 - 11 = -1
    // 11 - 10 = 1
})
