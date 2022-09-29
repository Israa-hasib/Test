const names = ['Israa', 'Shekila', 'Pita', 'Ala'];
console.log(names);
names.unshift('Eskander');
console.log(names);
names.pop();
console.log(names)

const greetings = names.map((name) => {
    return `Hejsan ${name}`
});

console.log(greetings);

greetings.forEach(greet => {

    console.log(greet)
});