// #1
new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

// #2
[...new Set('referee')].join(''); // 'ref'

//#3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // {Array(3) => true, Array(3) => false} OR {[1,2,3]: true, [1,2,3]:false}

//
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//
