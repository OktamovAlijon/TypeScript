"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 6. Classes va Objects
// OOP class va objectlar asosida dastur tuzish paradigmasidir.
class LessonPerson {
    firstname;
    age;
    nationality;
    constructor(firstname, age, nationality) {
        this.firstname = firstname;
        this.age = age;
        this.nationality = nationality;
    }
    getAge() {
        return this.age;
    }
    greet() {
        return `Hello, ${this.firstname}!`;
    }
}
// public tashqaridan, private class ichidan, protected meros olgan classlarda ko'rinadi.
class Engineer extends LessonPerson {
    technologies = ['JavaScript', 'TypeScript'];
}
const engineer = new Engineer('Ulugbek', 26, 'Uzbek');
console.log(engineer.greet(), engineer.getAge(), engineer.technologies);
// Inheritance extends orqali class'dan meros olishdir.
// Polymorphism meros olingan metodni boshqacha amalga oshiradi.
//# sourceMappingURL=index.js.map