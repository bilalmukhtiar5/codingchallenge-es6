/* 1. Write a program that defines an object with 
properties name, age, and email. Use destructuring to 
assign each property to a variable with a different name.
Then, output the variables to the console. */


let ourProperties = {
    name: 'Bilal',
    age: 37,
    email: 'bilalmukhtiar.dev@gmail.com'
};

let {name, age, email} = ourProperties;
console.log(name,age,email); 