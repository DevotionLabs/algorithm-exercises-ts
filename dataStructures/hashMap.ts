// Exercise: Create a simple hash map using modulo function as hashing function
// Use chaining to find the proper bucket for each element
type Element = {
  key: number;
  value: string;
};

class ChainedHashMap {
  private buckets: Element[][];

  constructor(private size: number) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  public insert(element: Element): void {
    const bucket = this.hash(element.key);
    this.buckets[bucket].push(element);
  }

  public delete(key: number): void {
    const bucket = this.hash(key);

    const index = this.findElementIndexInBucket({ bucket, key });

    if (index === undefined) return;

    this.buckets[bucket].splice(index, 1);
  }

  public search(key: number): Element | undefined {
    const bucket = this.hash(key);
    const index = this.findElementIndexInBucket({ bucket, key });

    return index === undefined ? undefined : this.buckets[bucket][index];
  }

  private hash(key: number) {
    return key % this.size;
  }

  private findElementIndexInBucket({
    bucket,
    key,
  }: {
    bucket: number;
    key: number;
  }): number | undefined {
    const index = this.buckets[bucket].findIndex(
      (element) => element.key === key
    );

    return index === -1 ? undefined : index;
  }
}

const map = new ChainedHashMap(5);
map.insert({ key: 1, value: "A" });
map.insert({ key: 6, value: "B" }); // 6 % 5 = 1 → same bucket as key 1
map.insert({ key: 2, value: "C" });

console.log(map.search(6));

map.delete(6);
console.log(map.search(6));
