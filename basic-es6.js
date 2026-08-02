// Default Values in ES6

function totalPrice(price = 0, tax = price * 0.3){
     return price + tax;
}

console.log(totalPrice(100)); 
console.log(totalPrice(100, 20));
console.log(totalPrice());

// Another example of default values in ES6

function greet(name = 'Guest') {
     return 'Hello, '+ name;
}

console.log(greet('Sahed'));
console.log(greet());