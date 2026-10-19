// #49. Decorator cache & Parameter
// Cache decorator metod natijasini bir xil argumentlar uchun qayta ishlatadi.
// Parameter decorator parametr e'lon qilinganda uning tartib raqamini ko'rsatadi.

export {};

function Cache(
  target: object,
  methodName: string | symbol,
  descriptor: PropertyDescriptor,
): void {
  const originalMethod = descriptor.value;
  if (typeof originalMethod !== 'function') {
    throw new TypeError(`${String(methodName)} metod bo'lishi kerak`);
  }

  const results = new Map<string, unknown>();
  descriptor.value = function (this: object, ...args: unknown[]) {
    const key = args.join('|');
    if (results.has(key)) {
      console.log('Cache natijasi olindi');
      return results.get(key);
    }

    const result = originalMethod.apply(this, args);
    results.set(key, result);
    return result;
  };
}

function LogParam(
  target: object,
  methodName: string | symbol,
  parameterIndex: number,
): void {
  console.log(`${String(methodName)} metodidagi ${parameterIndex}-parametr`);
}

class Lesson49Calculator {
  @Cache
  multiply(@LogParam a: number, b: number): number {
    console.log('Hisoblayapman...');
    return a * b;
  }
}

const calculator = new Lesson49Calculator();
console.log(calculator.multiply(4, 5));
console.log(calculator.multiply(4, 5));
