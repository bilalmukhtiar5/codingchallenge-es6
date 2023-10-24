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


/*2. Write a function that takes an object with 
properties firstName and lastName as an argument 
and returns the full name by using destructuring. */

const fullName = ({firstName, lastName}) =>
`${firstName} ${lastName}`;
const personName = {firstName:'Bilal',lastName:"Mukhtiar"};
const giveFullName = fullName(personName);
console.log(giveFullName);


//SPREAD OPERATORS 
/*Write a program that defines two arrays arr1 and arr2,
each with three numbers. Use the spread operator to create 
a new array arr3 that contains all the numbers from both arrays.
Then, output arr3 to the console.*/

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3)


/*Write a function called getLargest that takes an array of numbers as an
argument and returns the largest number in the array. Use the spread
operator to pass the array to the Math.max() function.*/

function getLargest(numbers) {
    return Math.max(...numbers);
  }
  const numberArray = [5, 12, 8, 3, 15, 7,100];
  const largestNumber = getLargest(numberArray);
  console.log(largestNumber);


/*  Write a function called sum that takes any number of arguments and
returns their sum. Use the rest operator to allow the function to take
any number of arguments.*/

let sum(...numbers) => {

}