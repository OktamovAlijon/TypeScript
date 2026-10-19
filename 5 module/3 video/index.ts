// #46. CreatedAt decorator
// Property decorator property e'lon qilinganda ishga tushadi.
// createdAt qiymati esa yangi obyekt yaratilganda Date.now() orqali olinadi.

export {};

function CreatedAt(target: object, propertyKey: string | symbol): void {
  console.log(`${String(propertyKey)} property decorator bilan belgilandi`);
}

class Lesson46Post {
  @CreatedAt
  createdAt: Date = new Date();

  constructor(public title: string) {}
}

const post = new Lesson46Post('TypeScript');
console.log(post.title, post.createdAt);
