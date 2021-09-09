// #1
new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

// #2
[...new Set('referee')].join(''); // 'ref'

//#3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // {Array(3) => true, Array(3) => false} OR {[1, 2, 3]: true, [1, 2, 3]: false}

//
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//
function isVowel(char) {
  return 'aeiou'.includes(char);
}

function vowelCount(string) {
  const newMap = new Map();
  let strLower = string.toLowerCase();
  for (x of strLower) {
    if (isVowel(x)) {
      if (newMap.has(x)) {
        newMap.set(x, newMap.get(x) + 1);
      } else {
        newMap.set(x, 1);
      }
    }
  }
  return newMap;
}
