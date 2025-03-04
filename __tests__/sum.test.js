const sum = require('/sum'); // Sesuaikan dengan path fungsi yang diuji

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

