// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((res, elem) => (res += elem), 0) / array.length;
};

console.log(find_average([]));
