/**
 * Exercise: Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or a phrase that is the same forwards and backwards. A permutation is
 * a rearragement of letters. The palindrome does not need to be limited to just dictionary words.
 */

function isPalindromPermutation(str: string) {
  const noSpacesStr = str.replaceAll(" ", "");

  const charsCount = countChars(noSpacesStr);

  if (noSpacesStr.length % 2 === 0) {
    return isEvenPalindrome(charsCount);
  } else {
    return isOddPalindrome(charsCount);
  }
}

function countChars(str: string) {
  const charsMap = new Map<string, number>();

  for (const char of Array.from(str)) {
    const prevCount = charsMap.get(char);

    const newCount = prevCount === undefined ? 1 : prevCount + 1;

    charsMap.set(char, newCount);
  }

  return charsMap;
}

function isEvenPalindrome(charsCount: Map<string, number>) {
  for (const count of charsCount.values()) {
    if (count % 2 !== 0) return false;
  }

  return true;
}

function isOddPalindrome(charsCount: Map<string, number>) {
  let oddNumbers = 0;
  for (const count of charsCount.values()) {
    if (count % 2 === 0) continue;

    if (oddNumbers > 0) return false;

    oddNumbers++;
  }

  if (oddNumbers === 1) return true;
  else false;
}

const str = "taco cat";
console.log(`Is ${str} palindrome?: ${isPalindromPermutation(str)}`);
