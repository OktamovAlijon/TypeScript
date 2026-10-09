"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 4. TypeScript asoslari
// O'zgaruvchi var, let yoki const bilan e'lon qilinadi.
var lessonAge = 25;
let height = 172;
const firstName = 'Ulugbek';
// string matn qiymatlariga ishlatiladi.
// number sonlarni, boolean true/false qiymatlarni saqlaydi.
// number[] va Array<number> sonlar massivini ifodalaydi.
const numbers = [1, 2, 3];
const otherNumbers = [4, 5, 6];
// any qiymat turini tekshirishni chetlab o'tadi.
const person = { firstName: 'Ulugbek' };
// Obyekt turida xususiyat va uning turi belgilanadi.
const typedPerson = { firstName: 'Ulugbek' };
// TypeScript ko'plab JavaScript turlarini qo'llab-quvvatlaydi.
// Murakkab turlarga array, object, union, interface va type kiradi.
// null va undefined ham ishlatiladigan qiymatlardir.
// Type inference turini qiymatga qarab avtomatik aniqlaydi.
// Har bir o'zgaruvchiga turini yozish doim ham shart emas.
// Default qiymatli parametr turini compiler aniqlashi mumkin.
// Funksiyaning qaytish turini ham compiler aniqlashi mumkin.
console.log(lessonAge, height, firstName, numbers, otherNumbers, person, typedPerson);
//# sourceMappingURL=index.js.map