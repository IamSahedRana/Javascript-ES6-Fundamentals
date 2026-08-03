// Destructuring 

// Old Way 

const x = [10,30,40,50,60]

console.log(x[0]);

// New Way 

const num = [10,30,40,50,60]

const[first, secound,,,fifth] = num 

console.log(first, secound,fifth);

// Most Used Cases 

const person = {
    name: "Sahed",
    age: 25
};

const { name: fullName, age: userAge } = person;

console.log(fullName);
console.log(userAge);


// Pratical Example 

const users = [
    {
        id: 1,
        name: "Rahim",
        address: {
            city: "Dhaka"
        }
    },
    {
        id: 2,
        name: "Karim",
        address: {
            city: "Khulna"
        }
    }
];

for (const { name, address: { city } } of users) {
    console.log(`${name} lives in ${city}`);
}