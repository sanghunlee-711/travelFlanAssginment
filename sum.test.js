const sum = require("./sum");

test("1더하기 2는 3", () => {
  expect(sum(1, 2)).toEqual(3);
});
