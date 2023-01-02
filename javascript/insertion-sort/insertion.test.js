const sort = require('.');

describe('Insertion Sort works as expected', () => {
  test('handles unsorted array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    sort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('handles normal unsorted array with duplicates', () => {
    const arr = [8, 4, 23, 8, 8, 42, 16, 15];
    sort(arr);
    expect(arr).toEqual([4, 8, 8, 8, 15, 16, 23, 42]);
  });

  test('handles empty array', () => {
    const arr = [];
    sort(arr);
    expect(arr).toEqual([]);
  });

  test('handles array with one value', () => {
    const arr = [8];
    sort(arr);
    expect(arr).toEqual([8]);
  });
});
