new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

[...new Set("referee")].join("") // 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // {Array(3) => true, Array(3) => false}