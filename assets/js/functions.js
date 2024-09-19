function greet(){
    console.log('Hello World!');
}
function greetTwo(){
    console.log('This is a second greeting');
}
// call a function
greet();
greetTwo();

const add = function(a,b){
    return a+b
}
const subtract = function(a,b){
    return a-b
}
console.log('Addition', add(10,4));

console.log('Subtraction', subtract(10,4));

function convertCelciusToFahrenheit(celcius){
    const result=(celcius *9)/5 +32;
    return result
}

const fahrenheit = convertCelciusToFahrenheit(30);
console.log('30 degrees celcius is',fahrenheit)

const calculateArea = (width,height) => width * height;
console.log('Area of a rectangle is',calculateArea(5,10))

function power(base,exponent =2){
    return base ** exponent;
}
console.log('5 to the power of 2 is:',power(5))

console.log('3 to the power of 3 is:',power(3,3))

