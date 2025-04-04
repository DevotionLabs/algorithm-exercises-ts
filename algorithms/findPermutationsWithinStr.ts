// Exercise: Find all existing permutations of a string within a bigger one
function findAllPermsWithinStrEfficiently({
  smallStr,
  bigStr,
}: {
  smallStr: string;
  bigStr: string;
}): string[] {
  const wordsWithSameChars = findWordsWithSameChars({ smallStr, bigStr });

  const bigEnoughWordsWithSameChars = filterBigEnoughWords(
    wordsWithSameChars,
    smallStr
  );

  return bigEnoughWordsWithSameChars
    .map((bigWord) => findAllPermsWithinStr({ smallStr, bigStr: bigWord }))
    .flat();
}

// Find the words inside big string that contain the characters of small string
function findWordsWithSameChars({
  smallStr,
  bigStr,
}: {
  smallStr: string;
  bigStr: string;
}): string[] {
  const smallCharsSet = new Set([...smallStr]);
  const bigChars = [...bigStr];

  const wordsWithSameChars: string[] = [""];

  bigChars.forEach((char) => {
    const lastIndex = wordsWithSameChars.length - 1;

    if (smallCharsSet.has(char)) {
      wordsWithSameChars[lastIndex] += char;
      return;
    }

    if (wordsWithSameChars[lastIndex].length > 0) {
      wordsWithSameChars.push("");
    }
  });

  console.log(
    `Words contained in big string with the characters of small string: ${wordsWithSameChars}`
  );

  return wordsWithSameChars;
}

function filterBigEnoughWords(
  wordsInBigStr: string[],
  smallStr: string
): string[] {
  // Removes words smaller than the small string
  const bigEnoughWords = wordsInBigStr.filter(
    (word) => word.length >= smallStr.length
  );

  console.log(`Big enough words: ${bigEnoughWords}`);

  return bigEnoughWords;
}

function isPermutation(word1: string, word2: string): boolean {
  if (word1.length != word2.length) return false;

  [...word1].forEach((char) => {
    word2 = word2.replace(char, "");
  });

  if (word2.length === 0) return true;

  return false;
}

function findAllPermsWithinStr({
  smallStr,
  bigStr,
}: {
  smallStr: string;
  bigStr: string;
}) {
  const permutations: string[] = [];

  for (let index = 0; index <= bigStr.length - smallStr.length; index++) {
    const word = bigStr.slice(index, index + smallStr.length);

    if (isPermutation(word, smallStr)) {
      permutations.push(word);
    }
  }

  return permutations;
}

const smallStr = "het";
const bigStr = "abtechetaxvhteta";

const permutations = findAllPermsWithinStrEfficiently({ smallStr, bigStr });

console.log(`These are the permutations of '${smallStr}' inside '${bigStr}':`);
console.log(permutations);
