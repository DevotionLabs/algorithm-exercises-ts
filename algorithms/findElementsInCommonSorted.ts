// Exercise: Given 2 sorted arrays, find the number of elements in common
// The arrays are the same length
// Each array has all distinct elements
function findCommonElementsSorted<T>(
  sortedArrayX: T[],
  sortedArrayY: T[]
): T[] {
  let x = 0;
  let y = 0;
  const commonElements: T[] = [];

  while (x < sortedArrayX.length && y < sortedArrayY.length) {
    const xElem = sortedArrayX[x];
    const yElem = sortedArrayY[y];

    if (xElem === yElem) {
      commonElements.push(sortedArrayX[x]);
      x++;
      y++;
    } else if (xElem < yElem) {
      x++;
    } else {
      y++;
    }
  }

  return commonElements;
}

const sortedArray1 = [2, 5, 18, 23, 45, 67, 78, 99, 103, 104, 105];
const sortedArray2 = [1, 4, 18, 33, 50, 67, 88, 100, 120, 121, 122];

const commonElements = findCommonElementsSorted(sortedArray1, sortedArray2);
console.log(`Elements in common: ${commonElements}`);
