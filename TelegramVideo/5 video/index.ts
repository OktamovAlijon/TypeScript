// 5. Funksiyalar va interfeyslar
// Funksiya parametrlari va qaytaradigan qiymatiga tur beriladi.
function add(a: number, b: number): number {
  return a + b;
}
// Funksiya qiymat qaytarmasa, qaytish turi void bo'ladi.
function printGreeting(firstName: string): void {
  console.log(`Hello, ${firstName}!`);
}
function greetPerson(name: string): string; // Bitta nom uchun overload signature'lar berish mumkin.
function greetPerson(name: string, age: number): string;
function greetPerson(name: string, age?: number): string {
  return age === undefined ? `Hello, ${name}!` : `Hello, ${name}, ${age}!`;
}
// Interface obyekt xususiyatlari va ularning turlarini belgilaydi.
interface LessonPerson {
  firstname: string;
  age: number;
  telegramUsername?: string;
  readonly id: number;
}
function greetLessonPerson(person: LessonPerson): string {
  return `Hello, ${person.firstname}!`;
}
console.log(add(2, 3)); printGreeting('Ulugbek');
console.log(greetPerson('Ulugbek', 25), greetLessonPerson({ firstname: 'Ali', age: 20, id: 1 }));
