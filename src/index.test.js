const Hello = require('./index');

describe("Hello function", () => {
  test('It should display "Hello"', () => {
    const hello = "Hello";
    expect(Hello()).toEqual(hello);
  })
});