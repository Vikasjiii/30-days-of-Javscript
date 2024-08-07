function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return `${num} is an even number`;
  } else {
    return `${num} is an odd number`;
  }
}

const result = checkEvenOrOdd(450);
console.log(result);

function square(n) {
  return n * n;
}
const result2 = square(9);
console.log(result2);

const greaterNumber = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
const r = greaterNumber(45, 985);

const concatStr = function (str1, str2) {
  return str1 + str2;
};

let r1 = concatStr("Vi", "kas");

const sum = (a, b) => a + b;

const r2 = sum(4, 50);
console.log(r2);

const checkCharacterInStr = (str, char) => str.includes(char);
const r3 = checkCharacterInStr("vikas", "s ");

const prd = (a, b = 1) => a * b;
const r4 = prd(78, 2);

const random = (name, age = 21) =>
  `Wlcome ${name} to our House.You are ${age} years old`;
const r5 = random("vikas");

const hof = (fn, n) => {
  for (let i = 1; i <= n; i++) {
    const r = fn();
    console.log(r);
  }
};

function greet() {
  return "NAMASTE";
}

hof(greet, 5);

const val = "sixty one";
function one(str) {
  str.toUpperCase();
}
function two(str) {
  return str.length;
}
const hof2 = (fn1, fn2, val) => {
  const r = fn1(val);
  const r1 = fn2(r);
  console.log(r1);
};

const rrr = hof(one, two, val);

// write a hof that takes two function and a CSSMathValue,applies the first function to the CSSMathValue, and the applies the second function to the result
