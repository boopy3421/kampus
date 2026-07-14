export class MaxHeap<T> {
  private items: T[] = [];
  private priority: (item: T) => number;

  constructor(priority: (item: T) => number) {
    this.priority = priority;
  }

  get size(): number {
    return this.items.length;
  }

  peek(): T | undefined {
    return this.items[0];
  }

  insert(item: T): void {
    this.items.push(item);
    this.bubbleUp(this.items.length - 1);
  }

  extractMax(): T | undefined {
    if (this.items.length === 0) return undefined;

    const max = this.items[0];
    const last = this.items.pop()!;

    if (this.items.length > 0) {
      this.items[0] = last;
      this.bubbleDown(0);
    }

    return max;
  }

  drainToArray(): T[] {
    const result: T[] = [];
    let next: T | undefined;
    while ((next = this.extractMax()) !== undefined) {
      result.push(next);
    }
    return result;
  }

  private bubbleUp(index: number): void {
    let i = index;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.priority(this.items[i]) <= this.priority(this.items[parent]))
        break;
      this.swap(i, parent);
      i = parent;
    }
  }

  private bubbleDown(index: number): void {
    let i = index;
    const n = this.items.length;

    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;

      if (
        left < n &&
        this.priority(this.items[left]) > this.priority(this.items[largest])
      ) {
        largest = left;
      }
      if (
        right < n &&
        this.priority(this.items[right]) > this.priority(this.items[largest])
      ) {
        largest = right;
      }
      if (largest === i) break;

      this.swap(i, largest);
      i = largest;
    }
  }

  private swap(i: number, j: number): void {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
}

export function heapRank<T>(items: T[], priority: (item: T) => number): T[] {
  const heap = new MaxHeap<T>(priority);
  for (const item of items) heap.insert(item);
  return heap.drainToArray();
}
