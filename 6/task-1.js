let numbers = ["one", "two", "three", "four", "five"];
console.log(numbers);
const firstNumber = numbers[0];
const lastNumber = numbers[numbers.length - 1];
numbers.push("six");
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift("one");
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubleNumbers);

const arr=[...numbers,...doubleNumbers]
let distinctElementsInArr=[]
arr.forEach((el)=>{
    if(!distinctElementsInArr.includes(el)){
        distinctElementsInArr.push(el)
    }

})
console.log(distinctElementsInArr);
const evenNumberinArr=distinctElementsInArr.filter((el)=>el%2===0)




const n=[45,8,18,28,5,2,28,6]
const sum=n.reduce((acc,curVal)=>{
    return acc+curVal

})
console.log(sum);


let programmingLang = ["python", "js", "ts", "rust", "c", "c++", "java"];
for (let i = 0; i < programmingLang.length; i++) {
  console.log(programmingLang[i]);
}

programmingLang.forEach((lang) => {
  console.log(lang);
});

const twoDArray = [
  [2, 5, 4],
  [5, 40, 9],
  [4, 78, 45],
];
console.log(twoDArray);
console.log(twoDArray[1][1]);
console.log(twoDArray[2][0]);

console.log(twoDArray[0][2]);
