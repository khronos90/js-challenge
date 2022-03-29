const testCaseCoins = { coins: [5, 7, 1, 1, 2, 3, 22] };
const testCaseCoins1 = { coins: [1, 1, 1, 1, 1] };
const testCaseCoins2 = { coins: [1, 5, 1, 1, 1, 10, 15, 20, 100] };
const testCaseCoins3 = { coins: [3, 2, 4, 12, 11] };

// Minimum that we CANNOT create.

const minimumChange = ({ coins }) => {
  let ordered = coins.sort((a, b) => a - b);
  let currentMinimum = 1;

  ordered.forEach(coin => {
    if (coin > currentMinimum + 1) {
      return currentMinimum + 1;
    } else {
      currentMinimum += coin;
    }
  })
  return ++currentMinimum;
}

console.log(`Minimum we CANNOT create ${minimumChange(testCaseCoins)}`);
console.log(`Minimum we CANNOT create ${minimumChange(testCaseCoins1)}`);
console.log(`Minimum we CANNOT create ${minimumChange(testCaseCoins2)}`);
console.log(`Minimum we CANNOT create ${minimumChange(testCaseCoins3)}`);


const testCaseArray1 = { "array": [1, 2, 3, 5, 6, 8, 9] };
const testCaseArray2 = { "array": [-2, -1] };
const testCaseArray3 = { "array": [-10, -5, 0, 5, 10] };

const sortedSquaredArray = (arr) => {
  return arr['array']
    .map(el => Math.abs(el))
    .sort((a, b) => a - b)
    .map(el => Math.pow(el, 2));
}

console.log(sortedSquaredArray(testCaseArray1));
console.log(sortedSquaredArray(testCaseArray2));
console.log(sortedSquaredArray(testCaseArray3));