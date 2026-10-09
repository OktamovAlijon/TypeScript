// 8. Modules
// Modullar kodni kichikroq va boshqarish oson qismlarga ajratadi.
// Ular komponentlarni qayta ishlatishga yordam beradi.
// TypeScript ichki va tashqi modullarni qo'llab-quvvatlaydi.
// Namespace bitta fayldagi kodni tartiblaydi.
namespace MathOperations {
  export function add(a: number, b: number): number {
    return a + b;
  }
}
console.log(MathOperations.add(2, 3));
// ES6 modullari kodni bir nechta fayl bo'ylab ajratadi.
// math.ts faylida funksiyani eksport qiling:
// export function add(a: number, b: number): number { return a + b; }
// main.ts faylida shu funksiyani import qiling:
// import { add } from './math';
// add(5, 3);
// export qiymatni boshqa fayllarda ishlatish imkonini beradi.
// import boshqa fayldagi eksportni olib kiradi.
// Kompilyatsiyada tsconfig.json ichida module belgilanadi.
// Masalan: "module": "ES6"
// Zamonaviy JavaScript uchun ESNext ham tanlanishi mumkin.
// CommonJS kabi boshqa module tizimlari ham mavjud.
// Module tizimini loyiha ishlaydigan muhitga moslang.
