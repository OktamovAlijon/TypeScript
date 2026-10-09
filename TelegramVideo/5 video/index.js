"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 5. Funksiyalar va interfeyslar
// Funksiya parametrlari va qaytaradigan qiymatiga tur beriladi.
function add(a, b) {
    return a + b;
}
// Funksiya qiymat qaytarmasa, qaytish turi void bo'ladi.
function printGreeting(firstName) {
    console.log(`Hello, ${firstName}!`);
}
function greetPerson(name, age) {
    return age === undefined ? `Hello, ${name}!` : `Hello, ${name}, ${age}!`;
}
function greetLessonPerson(person) {
    return `Hello, ${person.firstname}!`;
}
console.log(add(2, 3));
printGreeting('Ulugbek');
console.log(greetPerson('Ulugbek', 25), greetLessonPerson({ firstname: 'Ali', age: 20, id: 1 }));
//# sourceMappingURL=index.js.map