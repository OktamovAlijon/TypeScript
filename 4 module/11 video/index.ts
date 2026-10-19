// #41. ReturnType, Parameters, Awaited
// ReturnType - funksiya qaytaradigan qiymat turini oladi.
// Parameters - funksiya parametrlarining turlarini tuple qilib oladi.
// Awaited - Promise ichidagi qiymat turini oladi.

function lesson41User(name: string, age: number) {
  return { name, age };
}

type UserResult = ReturnType<typeof lesson41User>;
type UserArguments = Parameters<typeof lesson41User>;
type LoadedUser = Awaited<Promise<UserResult>>;

const userArguments: UserArguments = ['Ali', 20];
const userResult: LoadedUser = lesson41User(...userArguments);

console.log(userResult);
