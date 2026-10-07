// #32. Generic nima
// Generic - turga bog'liq bo'lgan qiymat yoki funksiya uchun umumiy tip yaratadi.
type Box<T> = { value: T };

const textBox: Box<string> = { value: 'Salom' };
const numBox: Box<number> = { value: 42 };

function identity<T>(x: T): T {
  return x;
}

console.log(identity('TypeScript'));
console.log(identity(2024));
console.log(textBox.value, numBox.value);
