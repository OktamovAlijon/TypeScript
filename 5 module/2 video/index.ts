// #45. Class decorator
// Class decorator class yaratilayotganda unga qo'shimcha xususiyat qo'shadi.

export {};

function WithVersion<T extends new (...args: any[]) => object>(Constructor: T): void {
  Object.defineProperty(Constructor, 'version', { value: 1 });
}

@WithVersion
class Lesson45Service {
  static version = 0;

  getMessage(): string {
    return 'Xizmat tayyor';
  }
}

console.log(Lesson45Service.version);
console.log(new Lesson45Service().getMessage());
