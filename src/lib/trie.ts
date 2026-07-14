class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord = false;
  titles: string[] = [];
}

const MAX_TITLES_PER_NODE = 8;

export class Trie {
  private root = new TrieNode();

  insert(title: string) {
    const key = title.toLowerCase();
    let node = this.root;

    for (const char of key) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;

      if (
        node.titles.length < MAX_TITLES_PER_NODE &&
        !node.titles.includes(title)
      ) {
        node.titles.push(title);
      }
    }

    node.isEndOfWord = true;
  }

  search(prefix: string, limit = 5): string[] {
    const key = prefix.trim().toLowerCase();
    if (!key) return [];

    let node = this.root;
    for (const char of key) {
      const next = node.children.get(char);
      if (!next) return [];
      node = next;
    }

    return node.titles.slice(0, limit);
  }
}

export function buildTitleTrie(titles: string[]): Trie {
  const trie = new Trie();
  for (const title of titles) trie.insert(title);
  return trie;
}
