const HashMap = require('.');
const treeIntersection = require('./treeIntersection');
const repeatedWord = require('./repeatedWord');

describe('Hashmap', () => {
  it('can set and get a value', () => {
    const map = new HashMap();
    map.set('foo', 'bar');
    expect(map.get('foo')).toEqual('bar');
  });

  it('can set and get a value with a collision', () => {
    const map = new HashMap();
    map.set('foo', 'bar');
    map.set('notFoo', 'notBar');
    expect(map.get('foo')).toEqual('bar');
    expect(map.get('notFoo')).toEqual('notBar');
  });

  it('can check if a key exists', () => {
    const map = new HashMap();
    map.set('foo', 'bar');
    expect(map.has('foo')).toEqual(true);
    expect(map.has('notFoo')).toEqual(false);
  });

  it('can return a list of keys', () => {
    const map = new HashMap();
    map.set('foo', 'bar');
    map.set('notFoo', 'notBar');
    expect(map.keys()).toEqual(['foo', 'notFoo']);
  });

});

describe('repeatedWord()', () => {
  it('returns the first repeated word', () => {
    const str = 'She sells sea shells by the sea shore...shells';
    expect(repeatedWord(str)).toEqual('sea');
  });

  it('returns null if there are no repeated words', () => {
    const str = 'She sells sea shells by the shore.';
    expect(repeatedWord(str)).toEqual(null);
  });
});

describe('treeIntersection', () => {
  // used copilot to generate the two trees, and they are the same as the ones in the input....
  it('returns an array of values that are in both trees', () => {
    const tree1 = {
      root: {
        value: 150,
        left: {
          value: 100,
          left: {
            value: 75,
            left: {
              value: 50,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 160,
            left: null,
            right: null,
          },
        },
        right: {
          value: 250,
          left: {
            value: 200,
            left: null,
            right: null,
          },
          right: {
            value: 350,
            left: null,
            right: null,
          },
        },
      },
    };
    const tree2 = {
      root: {
        value: 42,
        left: {
          value: 100,
          left: {
            value: 15,
            left: {
              value: 150,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 160,
            left: null,
            right: null,
          },
        },
        right: {
          value: 600,
          left: {
            value: 200,
            left: null,
            right: null,
          },
          right: {
            value: 350,
            left: null,
            right: null,
          },
        },
      },
    };
    expect(treeIntersection(tree1, tree2)).toEqual([100, 160, 200, 350]);
  });

  it('returns an empty array if there are no matching values', () => {
    const tree1 = {
      root: {
        value: 150,
        left: {
          value: 100,
          left: {
            value: 75,
            left: {
              value: 50,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 160,
            left: null,
            right: null,
          },
        },
        right: {
          value: 250,
          left: {
            value: 200,
            left: null,
            right: null,
          },
          right: {
            value: 350,
            left: null,
            right: null,
          },
        },
      },
    };
    const tree2 = {
      root: {
        value: 42,
        left: {
          value: 99,
          left: {
            value: 15,
            left: {
              value: 151,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 161,
            left: null,
            right: null,
          },
        },
        right: {
          value: 600,
          left: {
            value: 201,
            left: null,
            right: null,
          },
          right: {
            value: 351,
            left: null,
            right: null,
          },
        },
      },
    };
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('returns an empty array if one of the trees is empty', () => {
    const tree1 = {
      root: {
        value: 150,
        left: {
          value: 100,
          left: {
            value: 75,
            left: {
              value: 50,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 160,
            left: null,
            right: null,
          },
        },
        right: {
          value: 250,
          left: {
            value: 200,
            left: null,
            right: null,
          },
          right: {
            value: 350,
            left: null,
            right: null,
          },
        },
      },
    };
    const tree2 = {
      root: null,
    };
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
