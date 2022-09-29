namesArray.sort();
console-log(namesArray)
const lastNameInArray = namesArray.pop()
console.log(lastNameInArray, namesArray)
lastNameInArray == 'Tommy'
namesArray.unshift(lastNameInArray);

console.log(namesArray)

// Loopar

console.log(namesArray)
namesArray.push('Uffe')
let numberOfPersons = 0;

for(let i = 0; i < namesArray.length; i++) {

numerOfPersons++
console.log(i)
window.document.body.innerHTML += `<p>${namesArray[i]}</p>`;

}
console.log('Det finns' + numerOfPersons + 'personer i din familj')

// const greetings

const greetings = namesArray.map( familyMember => {
    return 'Hejsan' + familyMember;
})

console.log(greetings);
console.log(namesArray);

greetings.array.forEach(greetings => {
    console.log(greeting)
}); 