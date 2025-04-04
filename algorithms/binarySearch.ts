// Exercise: Develop a binary search algorithm
// (For an ordered array)
function binarySearch<T>({
  array,
  target,
  left = 0,
  right = array.length - 1,
}: {
  array: T[];
  target: T;
  left?: number;
  right?: number;
}): boolean {
  if (left > right) return false;

  const mid = Math.floor(right - left / 2);

  if (array[mid] === target) return true;

  if (array[mid] < target) {
    return binarySearch({ array, target, left: mid + 1, right });
  } else {
    return binarySearch({ array, target, left, right: mid - 1 });
  }
}

const array = [1, 2, 35, 5, 6, 7, 2, 2, 4, 6, 7, 8, 3, 2, 4, 7, 8, 834, 56];
const target = 56;

const found = binarySearch({ array, target });

console.log(`Is ${target} inside ${array}? ${found ? "Yes" : "No"}`);
