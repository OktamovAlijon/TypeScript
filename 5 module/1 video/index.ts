// #44. Decorator pattern
// Decorator pattern - mavjud class yoki metodga qo'shimcha xususiyat qo'shish usuli.
// Decorator @ belgisi bilan yoziladi va class yaratilganda ishga tushadi.

export {};

function Sealed<T extends new (...args: any[]) => object>(Constructor: T): T {
  Object.seal(Constructor);
  Object.seal(Constructor.prototype);
  return Constructor;
}

@Sealed
class Lesson44User {
  constructor(public name: string) {}
}

const user = new Lesson44User('Ali');
console.log(user.name);
