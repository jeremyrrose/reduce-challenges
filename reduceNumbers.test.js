const { test, expect } = require("@jest/globals")
const {sumNumbers, countNumbers} = require("./reduceNumbers.js")

const input = [
    1,4,5,4,6,3,6,7,8,9,3,4,4,5,4,3,7,4,6,8,9,6,4,4,3,4,5,6,7,9,6,4,6,2,5,1
]

const expectedCount = {
    '1': 2,
    '2': 1,
    '3': 4,
    '4': 10,
    '5': 4,
    '6': 7,
    '7': 3,
    '8': 2,
    '9': 3
}

const sumResult = sumNumbers(input)
const countResult = countNumbers(input)

test("The return value of sumNumbers is a number", () => {
    expect(sumResult === Number(sumResult))
        .toBe(true)
})

test("The return value of sumNumbers is correct", () => {
    expect(sumResult)
        .toBe(182)
})

test("The return value of countNumbers is an object", () => {
    expect(Object.prototype.toString.call(countResult))
        .toBe("[object Object]")
})

test("countNumbers counts 10 of the number '4'", () => {
    expect(countResult[4])
        .toBe(10)
})

test("countNumbers counts 1 of the number '2'", () => {
    expect(countResult[2])
        .toBe(1)
})

test("The object returned from countNumbers matches the expected value", () => {
    expect(countResult).toMatchObject(expectedCount)
})