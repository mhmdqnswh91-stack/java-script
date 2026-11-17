## 1. Difference between forEach and for...of. When would you use each?

`forEach` is a method that only works on arrays (and a few other things like Maps and Sets). You give it a callback function and it runs that function once for every element. The problem is that you can't stop it in the middle. `break` and `continue` don't work inside it, and `return` just exits the current callback, not the whole loop. Also it doesn't wait for `await` inside the callback.

`for...of` is a normal loop that works on any iterable: arrays, strings, Maps, Sets. Since it's a real loop, I can use `break`, `continue`, and `await` inside it.

```js
const nums = [1, 2, 3, 4];

nums.forEach((n) => console.log(n));

for (const n of nums) {
  if (n === 3) break;
  console.log(n); // 1, 2
}
```

I would use `forEach` when I just want to do something simple with every item. I would use `for...of` when I need to stop early, skip items, loop over a string, or use `await` inside the loop.

## 2. What is hoisting and what is the Temporal Dead Zone (TDZ)?

Hoisting means JavaScript moves the declarations to the top of their scope before running the code. So I can sometimes use something before the line where I wrote it.

With `var`, the variable is hoisted and given the value `undefined`, so it doesn't crash:

```js
console.log(a); // undefined
var a = 5;
```

Function declarations are hoisted completely, so I can call them before they are written:

```js
sayHi(); // works
function sayHi() {
  console.log("Hi");
}
```

`let` and `const` are also hoisted, but they are not given a value at the start. The time between the start of the scope and the line where they are declared is called the Temporal Dead Zone. If I try to use the variable during this time, I get a ReferenceError.

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

TDZ is useful because it catches mistakes where a variable is used before it has a value.

## 3. Main differences between == and ===

`==` is loose equality. It compares only the values, and if the types are different it first converts one of them to match the other. `===` is strict equality. It compares both the value and the type, with no conversion.

````js
5 == "5";
5 === "5";

0 == false;   // true
0 === false;  // false

null == undefined;
null === undefined;

Because `==` can give unexpected results, it's better to use `===` most of the time.

## 4. How does try-catch work and why is it important in async operations?

`try-catch` is used to handle errors. The code that might fail goes inside `try`. If an error happens, JavaScript stops running the `try` block and jumps to `catch`, where I can handle the error, so the program doesn't crash. There is also an optional `finally` block that runs at the end whether there was an error or not.

```js
try {
  const result = JSON.parse("not valid json");
} catch (error) {
  console.log("Something went wrong:", error.message);
} finally {
  console.log("Done");
}
````

In async code it matters because errors don't happen right away, so a normal `try-catch` around a promise without `await` will not catch them. When I use `async/await`, the `await` makes a rejected promise throw an error, and then `try-catch` can catch it. This is very useful for things like API requests that can fail because of network problems or a wrong URL.

```js
async function getData() {
  try {
    const res = await fetch("https://example.com/api");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Request failed:", error.message);
  }
}
```

Without it, one failed request could stop the app or cause an unhandled promise rejection.

## 5. Difference between type conversion and coercion

Type conversion (also called explicit conversion) is when I change the type of a value myself on purpose, using things like `Number()`, `String()`, `Boolean()` or `parseInt()`.

````js
Number("42");
String(100);
Boolean(0);

Type coercion (implicit conversion) is when JavaScript changes the type automatically, without me asking, usually when I mix different types in an operation.

```js
"5" + 2;    // "52"  (the number becomes a string)
"5" - 2;    // 3     (the string becomes a number)
true + 1;   // 2
if ("hello") { } // the string is coerced to true
````

So the main difference is who does the change: in conversion I do it on purpose, in coercion JavaScript does it automatically. Conversion is safer because the code is clearer and there are fewer surprises.
