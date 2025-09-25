import React from 'react';
import TopicTemplate from './TopicTemplate';

const Hashing: React.FC = () => {
  const sections = [
    {
      title: 'Overview',
      content: 'Hashing is a technique used to map data of arbitrary size to fixed-size values. It is commonly used in hash tables, caches, and cryptographic applications. A good hash function should distribute keys uniformly across the hash table, minimize collisions, and be efficient to compute.',
      code: '// Basic hash function example in TypeScript\nfunction simpleHash(key: string, size: number): number {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++) {\n    hash = (hash + key.charCodeAt(i) * (i + 1)) % size;\n  }\n  return hash;\n}\n\n// Usage\nconst index = simpleHash("example", 100);\nconsole.log(`Hash index: ${index}`); // Output depends on the input string'
    },
    {
      title: 'Key Concepts',
      items: [
        'Hash Function - Maps data of arbitrary size to fixed-size values',
        'Hash Table - Data structure that implements an associative array',
        'Collision - When two different keys hash to the same index',
        'Load Factor - Ratio of number of entries to number of buckets',
        'Perfect Hashing - No collisions for a known set of keys',
        'Cryptographic Hash - Secure hash functions with special properties'
      ]
    },
    {
      title: 'Collision Resolution',
      content: 'Common techniques to handle hash collisions:',
      items: [
        'Chaining - Store multiple elements in the same bucket using linked lists',
        'Open Addressing - Find the next open slot using probing (linear, quadratic, double hashing)',
        'Robin Hood Hashing - Variation of open addressing that reduces variance',
        'Cuckoo Hashing - Uses multiple hash functions and multiple tables'
      ]
    },
    {
      title: 'Hash Table Implementation',
      content: 'Basic hash table with chaining in TypeScript:',
      code: 'class HashTable<K, V> {\n  private size: number;\n  private buckets: Array<Array<[K, V]>>;\n\n  constructor(size: number = 32) {\n    this.size = size;\n    this.buckets = Array(size).fill(null).map(() => []);\n  }\n\n  private hash(key: K): number {\n    const keyString = String(key);\n    let hash = 0;\n    for (let i = 0; i < keyString.length; i++) {\n      hash = (hash + keyString.charCodeAt(i) * (i + 1)) % this.size;\n    }\n    return hash;\n  }\n\n  set(key: K, value: V): void {\n    const index = this.hash(key);\n    const bucket = this.buckets[index];\n    const existingIndex = bucket.findIndex(([k]) => k === key);\n    \n    if (existingIndex >= 0) {\n      bucket[existingIndex] = [key, value]; // Update existing\n    } else {\n      bucket.push([key, value]); // Add new\n    }\n  }\n\n  get(key: K): V | undefined {\n    const index = this.hash(key);\n    const pair = this.buckets[index].find(([k]) => k === key);\n    return pair ? pair[1] : undefined;\n  }\n\n  delete(key: K): boolean {\n    const index = this.hash(key);\n    const bucket = this.buckets[index];\n    const initialLength = bucket.length;\n    this.buckets[index] = bucket.filter(([k]) => k !== key);\n    return this.buckets[index].length !== initialLength;\n  }\n}\n\n// Usage\nconst table = new HashTable<string, number>();\ntable.set("one", 1);\ntable.set("two", 2);\nconsole.log(table.get("one")); // 1\nconsole.log(table.get("three")); // undefined'
    },
    {
      title: 'Time Complexity',
      items: [
        'Average Case: O(1) for search, insert, and delete operations',
        'Worst Case: O(n) when many collisions occur',
        'Space Complexity: O(n) where n is the number of entries'
      ]
    },
    {
      title: 'Common Hash Functions',
      items: [
        'MD5 - 128-bit hash value (insecure for cryptography)',
        'SHA-1 - 160-bit hash (insecure for cryptography)',
        'SHA-256 - Part of SHA-2 family, 256-bit hash',
        'SHA-3 - Latest member of the Secure Hash Algorithm family',
        'MurmurHash - Non-cryptographic, good for general hash-based lookup'
      ]
    },
    {
      title: 'Common Use Cases',
      items: [
        'Database indexing',
        'Caching (e.g., Memcached, Redis)',
        'Cryptographic applications (password hashing)',
        'Rabin-Karp string search algorithm',
        'Distributed systems (consistent hashing)',
        'Deduplication of data',
        'Implementing sets and dictionaries'
      ]
    },
    {
      title: 'Cryptographic Hashing',
      content: 'Example of secure password hashing with bcrypt in Node.js:',
      code: 'import * as bcrypt from \'bcrypt\';\n\nasync function hashPassword(password: string): Promise<string> {\n  const saltRounds = 10;\n  return await bcrypt.hash(password, saltRounds);\n}\n\nasync function checkPassword(\n  password: string, \n  hashedPassword: string\n): Promise<boolean> {\n  return await bcrypt.compare(password, hashedPassword);\n}\n\n// Usage\nconst password = "securePassword123";\nconst hashed = await hashPassword(password);\nconst isValid = await checkPassword(password, hashed);\nconsole.log(`Password valid: ${isValid}`); // true'
    },
    {
      title: "HashMaps",
      content: "HashMaps are a data structure that allows you to store key-value pairs. They are similar to hash tables, but they are more flexible and can be used to store any type of data and allow lookups in O(1) time.",
      code: `class HashMap<K, V> {
        private size: number;
        private buckets: Array<Array<[K, V]>>;

        constructor(size: number = 32) {
          this.size = size;
          this.buckets = Array(size).fill(null).map(() => []);
        }

        private hash(key: K): number {
          const keyString = String(key);
          let hash = 0;
          for (let i = 0; i < keyString.length; i++) {
            hash = (hash + keyString.charCodeAt(i) * (i + 1)) % this.size;
          }
          return hash;
        }

        set(key: K, value: V): void {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          const existingIndex = bucket.findIndex(([k]) => k === key);
          
          if (existingIndex >= 0) {
            bucket[existingIndex] = [key, value]; // Update existing
          } else {
            bucket.push([key, value]); // Add new
          }
        }

        get(key: K): V | undefined {
          const index = this.hash(key);
          const pair = this.buckets[index].find(([k]) => k === key);
          return pair ? pair[1] : undefined;
        }

        delete(key: K): boolean {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          const initialLength = bucket.length;
          this.buckets[index] = bucket.filter(([k]) => k !== key);
          return this.buckets[index].length !== initialLength;
        }
      }

      // Usage example
      const table = new HashMap<string, number>();
      table.set("one", 1);
      table.set("two", 2);
      console.log(table.get("one"));   // Output: 1
      console.log(table.get("three")); // Output: undefined`
    },
    {
      title: "HashSets",
      content: "HashSets are a data structure that allows you to store unique values. They are similar to hash tables, but they are more flexible and can be used to store any type of data and allow lookups in O(1) time.",
      code: `class HashSet<T> {
        private set: Set<T>;

        constructor() {
          this.set = new Set<T>();
        }

        add(value: T): boolean {
          if (this.has(value)) {
            return false;
          }
          this.set.add(value);
          return true;
        }

        has(value: T): boolean {
          return this.set.has(value);
        }

        delete(value: T): boolean {
          return this.set.delete(value);
        }

        clear(): void {
          this.set.clear();
        }

        size(): number {
          return this.set.size;
        }

        values(): T[] {
          return Array.from(this.set);
        }
      }

      // Usage example
      const set = new HashSet<string>();
      set.add("apple");
      set.add("banana");
      console.log(set.has("apple"));    // Output: true
      console.log(set.has("orange"));   // Output: false
      set.delete("apple");
      console.log(set.has("apple"));    // Output: false
      console.log(set.size());          // Output: 1
      console.log(set.values());        // Output: ["banana"]`
    }
  ];

  return <TopicTemplate title="Hashing & Hash Tables" sections={sections} />;
};

export default Hashing;