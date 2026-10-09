// 6. Classes va Objects
// OOP class va objectlar asosida dastur tuzish paradigmasidir.
class LessonPerson {
  public firstname: string;
  private age: number;
  protected nationality: string;
  constructor(firstname: string, age: number, nationality: string) {
    this.firstname = firstname;
    this.age = age;
    this.nationality = nationality;
  }
  public getAge(): number {
    return this.age;
  }
  public greet(): string {
    return `Hello, ${this.firstname}!`;
  }
}
// public tashqaridan, private class ichidan, protected meros olgan classlarda ko'rinadi.
class Engineer extends LessonPerson {
  public technologies: string[] = ['JavaScript', 'TypeScript'];
}
const engineer = new Engineer('Ulugbek', 26, 'Uzbek');
console.log(engineer.greet(), engineer.getAge(), engineer.technologies);
// Inheritance extends orqali class'dan meros olishdir.
// Polymorphism meros olingan metodni boshqacha amalga oshiradi.
