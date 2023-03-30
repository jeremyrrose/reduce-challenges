# .REDUCE CHALLENGES!

For both of these challenges, a solution using `.reduce()` would be pretty slick!

## 1. Sum numbers

Given an array of numbers, return the sum.

Example input:

```js
[ 3, 4, 7, 4, 13, 3, 3 ]
```

Desired return value: `37`

## 2. Count numbers

Given an array of numbers, return an object that counts how many times each number appears.

Example input:

```js
[ 3, 4, 7, 4, 13, 3, 3 ]
```

Desired return value:

```js
{
  '3': 3,
  '4': 2,
  '7': 1,
  '13': 1
}
```

## Instructions

Run `npm i` to install the testing package.

Edit the two functions in `reduceNumbers.js` to return the desired output.

Run `npm test` to test.

NOTE: If you try any `console.log`s, you'll see them _above_ the test information.

## Hints

The tests should pass as long as the correct values are returned, so you may find it easier to create the solution logic with another type of loop or higher-order function, then refactor to use reduce.

- `.reduce()` ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)): Executes a callback function on each element of an array, passing in the return value of the previous loop for each element, then returns the value from the final loop.
- Object property accesors ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)): Remember that `myObject.coolProp = 2` and `myObject["coolProp"] = 2` are synonymous!