// #47. Method decorator
// Method decorator metod chaqirilishidan oldin qo'shimcha amal bajarishi mumkin.

export {};

function LogCall(
  target: object,
  methodName: string | symbol,
  descriptor: PropertyDescriptor,
): void {
  const originalMethod = descriptor.value;
  if (typeof originalMethod !== 'function') {
    throw new TypeError(`${String(methodName)} metod bo'lishi kerak`);
  }

  descriptor.value = function (this: object, ...args: unknown[]) {
    console.log(`${String(methodName)} metodi chaqirildi`, args);
    return originalMethod.apply(this, args);
  };
}

class Lesson47Calculator {
  @LogCall
  add(a: number, b: number): number {
    return a + b;
  }
}

console.log(new Lesson47Calculator().add(2, 3));
