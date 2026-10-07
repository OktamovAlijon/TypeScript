// #33. Generic function
function log<T>(value: T): T {
  console.log(value);
  return value;
}

const user = log({ name: 'Ali', age: 20 });
const id = log<number>(77);
const word = log<string>('Hello');

console.log(user.name, id, word.toUpperCase());
