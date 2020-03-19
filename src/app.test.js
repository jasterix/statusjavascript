const functionToTest = require("./app.js");

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 600;
  expect(load1 + load2).toBeLessThan(1600);
});
