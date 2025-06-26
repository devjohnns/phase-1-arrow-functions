const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

// Place divide here
const divide = (a, b) => a / b;

const square = x => x * x;

const logAndAdd = (a, b) => {
  console.log(a, b);
  return a + b;
};

const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);