// #38. Indexed access & Conditional type
type User = {
  name: string;
  age: number;
  active: boolean;
};

type NameType = User['name'];
type IsString<T> = T extends string ? 'ha' : 'yoq';

const name: NameType = 'Ali';
const result: IsString<string> = 'ha';

console.log(name, result);
// T['key'] - indeks orqali tur olish.
// T extends string ? ... : ... - shartli tur.
