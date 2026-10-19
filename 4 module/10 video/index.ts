// #40. Pick, Omit, Extract, Exclude
// Pick - type ichidan kerakli propertylarni tanlaydi.
// Omit - type ichidan ko'rsatilgan propertylarni olib tashlaydi.
// Extract - union ichidan mos turlarni tanlaydi.
// Exclude - union ichidan ko'rsatilgan turlarni olib tashlaydi.

type Lesson40User = {
  name: string;
  age: number;
  email: string;
};

type UserName = Pick<Lesson40User, 'name'>;
type UserWithoutEmail = Omit<Lesson40User, 'email'>;
type TextValue = Extract<string | number | boolean, string>;
type NumberOrBoolean = Exclude<string | number | boolean, string>;

const userName: UserName = { name: 'Ali' };
const userWithoutEmail: UserWithoutEmail = { name: 'Vali', age: 22 };
const text: TextValue = 'Salom';
const value: NumberOrBoolean = 42;

console.log(userName, userWithoutEmail, text, value);
