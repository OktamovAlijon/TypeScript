// #36. Class
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const strBox = new Box('TypeScript');
const numBox = new Box(12);

console.log(strBox.getValue().toUpperCase());
console.log(numBox.getValue() + 5);
