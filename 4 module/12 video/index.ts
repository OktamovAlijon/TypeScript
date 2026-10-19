// #42. Mixin
// Mixin - classga qo'shimcha imkoniyatni alohida funksiya orqali qo'shadi.

type Lesson42Constructor = new (...args: any[]) => object;

function WithTimestamp<TBase extends Lesson42Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
  };
}

class Lesson42Product {
  constructor(public name: string) {}
}

const TimestampedProduct = WithTimestamp(Lesson42Product);
const product = new TimestampedProduct('Kitob');

console.log(product.name, product.createdAt);
