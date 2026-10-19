"use strict";
// #48. Amaliyot: vazifa boshqaruvi
// @Entity - classga nom va CreatedAt propertylari haqida metadata qo'shadi.
// @Sealed - classga yangi property qo'shilishini taqiqlaydi.
// @CreatedAt - qaysi property yaratilgan vaqtni saqlashini qayd qiladi.
// @LogCall - metod chaqirilganda metod nomi va argumentlarini chiqaradi.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const createdAtProperties = new WeakMap();
function Entity(name) {
    return (constructor) => {
        constructor.entityName = name;
        constructor.createdAtFields = createdAtProperties.get(constructor.prototype) ?? [];
    };
}
function Sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    return constructor;
}
function CreatedAt(target, propertyKey) {
    const properties = createdAtProperties.get(target) ?? [];
    properties.push(String(propertyKey));
    createdAtProperties.set(target, properties);
}
function LogCall(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    if (typeof originalMethod !== 'function') {
        throw new TypeError(`${String(methodName)} metod bo'lishi kerak`);
    }
    descriptor.value = function (...args) {
        console.log(`${String(methodName)} metodi chaqirildi`, args);
        return originalMethod.apply(this, args);
    };
}
let Task = class Task {
    title;
    static entityName = '';
    static createdAtFields = [];
    createdAt = new Date();
    status = 'bajarilmoqda';
    constructor(title) {
        this.title = title;
    }
    complete() {
        this.status = 'bajarildi';
    }
};
__decorate([
    CreatedAt
], Task.prototype, "createdAt", void 0);
__decorate([
    LogCall
], Task.prototype, "complete", null);
Task = __decorate([
    Entity('task'),
    Sealed
], Task);
const task = new Task('TypeScript decoratorlarni o‘rganish');
console.log('Class nomi:', Task.entityName);
console.log('CreatedAt propertylari:', Task.createdAtFields);
console.log('Vazifa yaratildi:', task.title, task.createdAt);
task.complete();
console.log('Vazifa holati:', task.status);
//# sourceMappingURL=index.js.map