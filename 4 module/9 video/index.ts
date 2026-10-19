// #39. Readonly, Partial, Required
// Readonly - propertylarni o'zgarmas qiladi.
// Partial - barcha propertylarni ixtiyoriy qiladi.
// Required - barcha propertylarni majburiy qiladi.

type Lesson39User = {
  name: string;
  age?: number;
};

const userInfo: Readonly<Lesson39User> = { name: 'Ali', age: 20 };
const userUpdate: Partial<Lesson39User> = { age: 21 };
const completeUser: Required<Lesson39User> = { name: 'Vali', age: 25 };

console.log(userInfo, userUpdate, completeUser);
