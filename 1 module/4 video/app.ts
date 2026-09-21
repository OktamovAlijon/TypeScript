const person = {
    firstName: 'alijon',
    lastName: 'uktamov',
    city: 'Tashkent',
    skills: {
        programming: 'JavaScript',
        design: 'Figma',
    },
};

function getName(data: { firstName: string; lastName: string }): string {
    return `${data.firstName} ${data.lastName}`;
}

const person1 = getName(person);
console.log(person1);