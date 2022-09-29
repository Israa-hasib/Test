function greeting (name) {
    console.log('Hello' + name);

}
let greetName = greeting('Israa')
greeting();




function colors (num) {
    if (num < 13) {
        console.log('white');
    }
    else if (num > 12 && num < 19) {
        console.log('green');
    }
    else if (num > 18 && num < 26) {
        console.log('red')
    }
    else if (num > 25 && num < 26){
        console.log('blue')
    }
    else {
        console.log('black')
    }
}
let input = 20;
colors(input);




const hello = () => {console.log('Hello World!'); }
hello();




const calc = (numberOne, numberTwo) => {return numberOne + numberTwo;}

let result = calc(1, 2);
console.log(result);

let result2 = calc(5, 10);
console.log(result2);




const tip = (sum, percent) => {let total = sum + sum * percent; return total;}

let tipResult = tip(1, 100);
console.log(tipResult);