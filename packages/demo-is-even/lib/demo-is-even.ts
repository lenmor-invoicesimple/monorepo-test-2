import { isOdd } from "demo-is-odd";

export function isEven(num: number): boolean {
  console.log("isEven called with:", num);
  return !isOdd(num);
}