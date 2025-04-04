// Exercise: Find the elements in common between 2 different arrays
function findElementsInCommon<T>(array1: T[], array2: T[]): T[] {
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  return Array.from(set1).filter((item) => set2.has(item));
}

const array1 = [2, 4, 5, 6363, 6, 47, 325, 62];
const array2 = [4, 325, 8, 3, 22, 5, 36, 67];

const commonElements = findElementsInCommon(array1, array2);

console.log(`The elements in common between ${array1} and ${array2} are:`);
console.log(commonElements);
