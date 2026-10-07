// #37. Keyof & typeof
const user = {
  name: 'Ali',
  age: 21,
};

type User = typeof user;
type Key = keyof User;

const key: Key = 'name';
console.log(user[key]);
// keyof - objectdagi kalitlarni olib beradi.
// typeof - qiymat turini qaytaradi.
