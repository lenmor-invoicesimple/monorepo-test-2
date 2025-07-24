export function isOdd(num: number): boolean {
   console.log("isOdd called with 111:", num);
   console.log(">> should trigger change in demo-is-even");
  return num % 2 !== 0;
}