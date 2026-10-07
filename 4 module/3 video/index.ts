// #34. Promise
const wait = (ms: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Tayyor!'), ms);
  });

(async () => {
  const result = await wait(1000);
  console.log(result);
})();

// Promise - kelajakdagi qiymatni kutib oladi.
