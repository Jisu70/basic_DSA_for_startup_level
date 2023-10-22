function calculateSum(arr, index) {
  if (index < 0) {
    return 0;
  }
  return arr[index] + calculateSum(arr, index - 1);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = calculateSum(arr, arr.length - 1);

console.log("The sum of the array is: " + sum);
