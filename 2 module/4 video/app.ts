// Contact page
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// // Home page
// interface Person {
//     age: number;
// }

// let persons: Person[] = [
// { firstName: 'John', lastName: 'Doe', age: 20 },
// { firstName: 'Jane', lastName: 'Doe', age: 30 },
// ];

// console.log(persons)

// interface WorkerPerson extends Person, Employee {
//     age: number;
// }

interface Person {
[key: string]: string
}
const person: Person = {
name: 'John',
}