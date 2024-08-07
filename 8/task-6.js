function add(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const result=add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
console.log(result);

