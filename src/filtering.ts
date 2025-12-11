/**
 * Use this array of numbers if you want to manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// 1) Create a new array containing numbers that are >= 25
export function greaterThanTwentyFive(nums: number[] = numbers): number[] {
  return nums.filter((num) => num >= 25);
}

// 2) Create a new array containing numbers divisible by 5
export function divisibleByFive(nums: number[] = numbers): number[] {
  return nums.filter((num) => num % 5 === 0);
}
