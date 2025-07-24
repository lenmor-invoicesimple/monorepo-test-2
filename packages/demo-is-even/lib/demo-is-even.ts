import { isOdd } from "@lenmor-invoicesimple/demo-is-odd-2";

export function isEven(num: number): boolean {
  console.log("isEven called with 111:", num);
  return !isOdd(num);
}