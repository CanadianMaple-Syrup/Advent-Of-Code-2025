export default function sumJoltages(inputString) {
  const banks = inputString.split("\r\n");
  let sum = 0;
  for (let bank of banks) {
    let nums = bank.split("");
    let max = 0;
    let oldMax = 0;
    let second = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
        if (i != nums.length - 1) {
          oldMax = nums[i];
          second = 0;
        } else {
          second = nums[i];
        }
      } else if (nums[i] > second) {
        second = nums[i];
      }
    }
    let result = oldMax + second;
    console.log(result);
    sum += parseInt(result);
  }
  return sum;
}