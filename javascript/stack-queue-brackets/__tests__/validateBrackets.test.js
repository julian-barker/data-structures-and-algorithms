'use strict';

// Require our linked list implementation
// const { Stack, Node } = require('../stack');
const validate = require('..');

const passing = '{{[]}}()';
const tooManyOpen = '{{[]}}()(';
const tooManyClosed = '{{[]}}())';
const mismatch = '{{[}]}()';

describe('Stack', () => {

  test('handles empty', () => {
    let bool = validate('');
    expect(bool).toEqual(true);
  });

  test('handles passing', () => {
    let bool = validate(passing);
    expect(bool).toEqual(true);
  });

  test('handles too many open', () => {
    let bool = validate(tooManyOpen);
    expect(bool).toEqual(false);
  });

  test('handles too many closed', () => {
    let bool = validate(tooManyClosed);
    expect(bool).toEqual(false);
  });

  test('handles mismatch', () => {
    let bool = validate(mismatch);
    expect(bool).toEqual(false);
  });

});
