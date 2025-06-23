import React from 'react';
import TopicTemplate from './TopicTemplate';

const Queue: React.FC = () => {
  const sections = [
    {
      title: 'Overview',
      content: 'A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The first element added to the queue will be the first one to be removed. Think of it like a line of people waiting - the first person in line is the first to be served.',
      code: '// Basic queue operations in TypeScript\nconst queue: number[] = [];\nqueue.push(1);          // Enqueue 1\nqueue.push(2);          // Enqueue 2\nconst first = queue.shift(); // Dequeue first element\nconsole.log(first);    // Output: 1\nconsole.log(queue[0]);  // Peek at front: 2'
    },
    {
      title: 'Key Operations',
      items: [
        'enqueue(item) - Adds an item to the end of the queue',
        'dequeue() - Removes and returns the item from the front',
        'front() - Returns the front item without removing it',
        'isEmpty() - Checks if the queue is empty',
        'size() - Returns the number of items in the queue'
      ]
    },
    {
      title: 'Time Complexity',
      items: [
        'Access: O(n) - Must dequeue all elements to access a specific one',
        'Search: O(n) - May need to traverse all elements',
        'Insertion: O(1) - Constant time to enqueue',
        'Deletion: O(1) - Constant time to dequeue (when using efficient implementation)',
        'Space: O(n) - Grows with number of elements'
      ]
    },
    {
      title: 'Implementation Example',
      content: 'Efficient Queue implementation using TypeScript class with object:',
      code: 'class Queue<T> {\n  private items: { [key: number]: T };\n  private frontIndex: number;\n  private backIndex: number;\n\n  constructor() {\n    this.items = {};\n    this.frontIndex = 0;\n    this.backIndex = 0;\n  }\n\n  // Add element to the back of the queue\n  enqueue(element: T): void {\n    this.items[this.backIndex] = element;\n    this.backIndex++;\n  }\n\n  // Remove and return the front element\n  dequeue(): T | undefined {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    const result = this.items[this.frontIndex];\n    delete this.items[this.frontIndex];\n    this.frontIndex++;\n    return result;\n  }\n\n  // View the front element without removing it\n  front(): T | undefined {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.frontIndex];\n  }\n\n  // Check if the queue is empty\n  isEmpty(): boolean {\n    return this.frontIndex === this.backIndex;\n  }\n\n  // Get the number of elements in the queue\n  size(): number {\n    return this.backIndex - this.frontIndex;\n  }\n\n  // Clear the queue\n  clear(): void {\n    this.items = {};\n    this.frontIndex = 0;\n    this.backIndex = 0;\n  }\n}\n\n// Usage example\nconst queue = new Queue<number>();\nqueue.enqueue(1);\nqueue.enqueue(2);\nconsole.log(queue.front());    // Output: 1\nconsole.log(queue.dequeue());  // Output: 1\nconsole.log(queue.size());     // Output: 1'
    },
    {
      title: 'Types of Queues',
      items: [
        'Simple Queue - Standard FIFO implementation',
        'Circular Queue - Last element points to the first',
        'Priority Queue - Elements with higher priority are served first',
        'Double Ended Queue (Deque) - Allows insertion and deletion at both ends',
        'Blocking Queue - Blocks when trying to dequeue from an empty queue'
      ]
    },
    {
      title: 'Common Use Cases',
      items: [
        'CPU scheduling',
        'Print task management',
        'Call center phone systems',
        'Breadth-First Search (BFS) algorithm',
        'Handling asynchronous data transfer'
      ]
    }
  ];

  return <TopicTemplate title="Queues" sections={sections} />;
};

export default Queue;