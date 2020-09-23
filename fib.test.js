const { TestScheduler } = require('jest');
const Fibonacci = require('./Fibonacci');

test("Test uno", () =>{
    let fib = new Fibonacci();
    let expected = fib.getFibonacciValue(6);
    let actual = 8;
    expect(expected).toEqual(actual);
});

test("Test dos", () =>{
    let fib = new Fibonacci();
    let expected = fib.getFibonacciValue(15);
    let actual = 610;
    expect(expected).toEqual(actual);
});

test("Test tres", () =>{
    let fib = new Fibonacci();
    let expected = fib.getFibonacciValue(0);
    let actual = 0;
    expect(expected).toEqual(actual);
});

test("Test quatro", () =>{
    let fib = new Fibonacci();
    let expected = fib.getFibonacciValue(1);
    let actual = 1;
    expect(expected).toEqual(actual);
});