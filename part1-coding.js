// 1.
function q1() {
  return Number("123") + 7;
}
console.log("Q1:", q1()); // 130

// 2.
function q2(value) {
  if (!value) {
    return "Invalid";
  }
  return value;
}
console.log("Q2:", q2(0)); // "Invalid"

// 3
function q3() {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    result.push(i);
  }
  console.log("Q3:", result.join(", ")); // 1, 3, 5, 7, 9
}
q3();

// 4.
function q4(arr) {
  return arr.filter((n) => n % 2 === 0);
}
console.log("Q4:", q4([1, 2, 3, 4, 5])); // [2, 4]

// 5.
function q5(a, b) {
  return [...a, ...b];
}
console.log("Q5:", q5([1, 2, 3], [4, 5, 6])); // [1,2,3,4,5,6]

// 6
function q6(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}
console.log("Q6:", q6(2)); // "Monday"

// 7.
function q7(arr) {
  return arr.map((str) => str.length);
}
console.log("Q7:", q7(["a", "ab", "abc"])); // [1,2,3]

// 8.
function q8(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log("Q8:", q8(15)); // "Divisible by both"

// 9.
const q9 = (num) => num * num;
console.log("Q9:", q9(5)); // 25

// 10.
function q10(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}
console.log("Q10:", q10({ name: "John", age: 25 })); // John is 25 years old

// 11.
function q11(...numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}
console.log("Q11:", q11(1, 2, 3, 4, 5)); // 15

// 12.
function q12() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
q12().then((msg) => console.log("Q12:", msg)); // "Success" (after 3s)

// 13.
function q13(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log("Q13:", q13([1, 3, 7, 2, 4])); // 7

// 14.
function q14(obj) {
  return Object.keys(obj);
}
console.log("Q14:", q14({ name: "John", age: 30 })); // ["name", "age"]

// 15.
function q15(str) {
  return str.split(" ");
}
console.log("Q15:", q15("The quick brown fox")); // ["The","quick","brown","fox"]
