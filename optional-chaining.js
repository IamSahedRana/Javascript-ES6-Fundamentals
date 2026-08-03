// Dot Chaining 

const student = {
    name: "Sahed",
    age: 22,

    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(student);
console.log(student.address.city); 

// Optional Chaining

const user = {
    id: 101,

    profile: {
        name: "Sahed"
    }
};

console.log(user.profile.contact?.email); 


// Object Looping 

for (let key in student){
     console.log(student[key]);
}

// Real World Examples 

const employee = {
    id: 101,
    name: "Sahed",

    department: {
        name: "Engineering",
        location: "Dhaka"
    },

    salary: 50000
};

for (let [key, value] of Object.entries(employee)) {
    console.log(key, value);
}
