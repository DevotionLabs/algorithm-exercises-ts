function quickSort<T>(array: T[]): T[] {
  if (array.length <= 1) return array;

  const [pivot, ...rest] = array;
  const left = rest.filter((el) => el <= pivot);
  const right = rest.filter((el) => el > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];

const sortedArray = quickSort(unsortedArray);

console.log(`Unsorted: ${unsortedArray}`);

console.log(`Sorted: ${sortedArray}`);
