// 7. Generics
// Generic function, class yoki component turli turlar bilan ishlaydi.
// any ishlatilsa, qaytariladigan qiymatning aniq turi yo'qoladi.
function identity<Type>(value: Type): Type {
  return value;
}
// Generic chaqirilganda tur argumentdan aniqlanishi mumkin.
const lessonAge = identity<number>(26);
const lessonName = identity('Ulugbek');
console.log(lessonAge, lessonName);
interface Product {
  readonly id: number;
  title: string;
  price: number;
}
// extends generic turga cheklov qo'yadi.
class ShoppingCart<T extends Product> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
// Generic function va class kodni qayta ishlatishga yordam beradi.
