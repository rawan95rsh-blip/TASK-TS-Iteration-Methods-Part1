
/**
 * Use this array of numbers if you want to manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// 3) Create a new array that contains each number squared.
export function squaredNumbers(nums: number[] = numbers): number[] {
  return nums.map((num) => num * num);
}

// 4) Create a new array that contains each number multiplied by 2.
export function doubledNumbers(nums: number[] = numbers): number[] {
  return nums.map((num) => num * 2);
}
