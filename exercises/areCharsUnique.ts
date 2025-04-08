/**
 * Exercise: Implement an algorithm to determine if a string
 * has all unique characters. What if you cannot use additional
 * data structures?
 */

function areCharsUnique(str: string): boolean {
  const charsSet = new Set([...str]);

  return charsSet.size === str.length ? true : false;
}

function areCharsUniqueBruteForce(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }

  return true;
}

const str = "asdfg";
const areUnique = areCharsUnique(str);
const areUniqueBruteForce = areCharsUniqueBruteForce(str);

console.log(`Are characters in '${str}' unique?: ${areUnique ? "Yes" : "No"}`);

console.log(
  `Are characters in '${str}' unique (no data structures)?: ${
    areUniqueBruteForce ? "Yes" : "No"
  }`
);
