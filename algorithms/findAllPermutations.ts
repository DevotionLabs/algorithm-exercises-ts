// Exercise: Find all possible permutations of a string
// Such string does not include duplicate characters

function findAllPerms(str: string): string[] {
  if (str.length <= 1) return [str];

  const strArr = [...str];

  return strArr
    .map((char) => {
      const remainingStr = str.replace(char, "");

      return findAllPerms(remainingStr).map((perm) => `${char}${perm}`);
    })
    .flat(); // One-dimesion array
}

const baseStr = "abe";
const permutations = findAllPerms(baseStr);

console.log(`These are the available permutations for '${baseStr}':`);
console.log(permutations);

// Note: If you want to remove duplicates, you can create a Set
