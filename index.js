// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findIndex(arr, target) {
  let index = -1;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      index = i;
    }
  }
  console.log(`Index of ${target}: ${index}`);
}

const input = [34, 5, 0, -2, 12, -60, 1, 18, 3, 39, 27, -1, 1000, 32, 4, 9];
const targetElement = 39;

findIndex(input, targetElement);