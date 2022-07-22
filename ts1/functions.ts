const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(5, 12));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
