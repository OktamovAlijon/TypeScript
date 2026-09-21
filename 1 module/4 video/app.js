"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    firstName: 'alijon',
    lastName: 'uktamov',
    city: 'Tashkent',
    skills: {
        programming: 'JavaScript',
        design: 'Figma',
    },
};
function getName(data) {
    return `${data.firstName} ${data.lastName}`;
}
const person1 = getName(person);
console.log(person1);
//# sourceMappingURL=app.js.map