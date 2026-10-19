// #48. Amaliyot: vazifa boshqaruvi
// @Entity - classga nom va CreatedAt propertylari haqida metadata qo'shadi.
// @Sealed - classga yangi property qo'shilishini taqiqlaydi.
// @CreatedAt - qaysi property yaratilgan vaqtni saqlashini qayd qiladi.
// @LogCall - metod chaqirilganda metod nomi va argumentlarini chiqaradi.

export {};

type EntityConstructor = {
  new (...args: any[]): object;
  entityName: string;
  createdAtFields: string[];
};

const createdAtProperties = new WeakMap<object, string[]>();

function Entity(name: string) {
  return <T extends EntityConstructor>(constructor: T): void => {
    constructor.entityName = name;
    constructor.createdAtFields = createdAtProperties.get(constructor.prototype) ?? [];
  };
}

function Sealed<T extends Function>(constructor: T): T {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  return constructor;
}

function CreatedAt(target: object, propertyKey: string | symbol): void {
  const properties = createdAtProperties.get(target) ?? [];
  properties.push(String(propertyKey));
  createdAtProperties.set(target, properties);
}

function LogCall(
  target: object,
  methodName: string | symbol,
  descriptor: PropertyDescriptor,
): void {
  const originalMethod = descriptor.value;
  if (typeof originalMethod !== 'function') {
    throw new TypeError(`${String(methodName)} metod bo'lishi kerak`);
  }

  descriptor.value = function (this: object, ...args: unknown[]) {
    console.log(`${String(methodName)} metodi chaqirildi`, args);
    return originalMethod.apply(this, args);
  };
}

@Entity('task')
@Sealed
class Task {
  static entityName = '';
  static createdAtFields: string[] = [];

  @CreatedAt
  createdAt: Date = new Date();

  status: 'bajarilmoqda' | 'bajarildi' = 'bajarilmoqda';

  constructor(public title: string) {}

  @LogCall
  complete(): void {
    this.status = 'bajarildi';
  }
}

const task = new Task('TypeScript decoratorlarni o‘rganish');

console.log('Class nomi:', Task.entityName);
console.log('CreatedAt propertylari:', Task.createdAtFields);
console.log('Vazifa yaratildi:', task.title, task.createdAt);

task.complete();
console.log('Vazifa holati:', task.status);
