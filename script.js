const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createSubarrays(arr, n) {
    const result = [];
    let currentSubarray = [];

    for (const num of arr) {
        if (currentSubarray.reduce((acc, val) => acc + val, 0) + num <= n) {
            currentSubarray.push(num);
        } else {
            result.push([...currentSubarray]);
            currentSubarray = [num];
        }
    }

    // Add the last subarray
    result.push([...currentSubarray]);

    return result;
}

// Get input from the user
rl.question("Enter space-separated numbers for the input array: ", function (input) {
    const inputArray = input.split(" ").map(Number);

    rl.question("Enter the maximum sum: ", function (maxSum) {
        // Check if the input is valid
        if (!isNaN(maxSum) && Array.isArray(inputArray) && inputArray.every(num => !isNaN(num))) {
            const result = createSubarrays(inputArray, parseFloat(maxSum));
            console.log("Result:", result);
        } else {
            console.error("Invalid input. Please enter valid numbers.");
        }

        rl.close();
    });
});
