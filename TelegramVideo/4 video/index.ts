// 4. TypeScript asoslari
// O'zgaruvchi var, let yoki const bilan e'lon qilinadi.
var lessonAge: number = 25;
let height: number = 172;
const firstName: string = 'Ulugbek';
// string matn qiymatlariga ishlatiladi.
// number sonlarni, boolean true/false qiymatlarni saqlaydi.
// number[] va Array<number> sonlar massivini ifodalaydi.
const numbers: number[] = [1, 2, 3];
const otherNumbers: Array<number> = [4, 5, 6];
// any qiymat turini tekshirishni chetlab o'tadi.
const person: any = { firstName: 'Ulugbek' };
// Obyekt turida xususiyat va uning turi belgilanadi.
const typedPerson: { firstName: string } = { firstName: 'Ulugbek' };
// TypeScript ko'plab JavaScript turlarini qo'llab-quvvatlaydi.
// Murakkab turlarga array, object, union, interface va type kiradi.
// null va undefined ham ishlatiladigan qiymatlardir.
// Type inference turini qiymatga qarab avtomatik aniqlaydi.
// Har bir o'zgaruvchiga turini yozish doim ham shart emas.
// Default qiymatli parametr turini compiler aniqlashi mumkin.
// Funksiyaning qaytish turini ham compiler aniqlashi mumkin.
console.log(lessonAge, height, firstName, numbers, otherNumbers, person, typedPerson);
