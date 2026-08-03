const person = {
  name: "Sahed",
  age: 22,
  country: "Bangladesh"
};

// console.log(Object.keys(person));
// console.log(Object.values(person));

console.log(Object.entries(person));

// delete Property

/* delete person.age;
console.log(person); */

// Seal An Object

Object.seal(person);

person.age = 25;          // Works , I only can edit and update values 
person.country = "BD";    // Doesn't work
delete person.name;       // Doesn't work

console.log(person);

// Freeze an Object Completely

Object.freeze(person);

person.age = 30;
person.country = "Bangladesh";
delete person.name;

console.log(person);