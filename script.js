const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSum + num > n) {
      // Start a new subarray
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    } else {
      // Add the current number to the current subarray
      currentSubarray.push(num);
      currentSum += num;
    }
  }

  // Add the last subarray to the result
  result.push(currentSubarray);

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n, 10))));
