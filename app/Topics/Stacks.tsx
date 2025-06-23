import React from 'react';
import TopicTemplate from './TopicTemplate';

const Stacks: React.FC = () => {
  const sections = [
    {
      title: 'Overview',
      content: 'A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added to the stack will be the first one to be removed. Think of it like a stack of plates - you can only take the top plate off the stack.',
      code: '// Basic stack operations in TypeScript\nconst stack: number[] = [];\nstack.push(1);    // Add to top\nstack.push(2);    // Stack: [1, 2]\nconst top = stack.pop();  // Removes 2, stack: [1]\nconsole.log(top); // Output: 2'
    },
    {
      title: 'Key Operations',
      items: [
        'push(item) - Adds an item to the top of the stack',
        'pop() - Removes and returns the top item',
        'peek() - Returns the top item without removing it',
        'isEmpty() - Checks if the stack is empty',
        'size() - Returns the number of items in the stack'
      ]
    },
    {
      title: 'Time Complexity',
      items: [
        'Access: O(n) - Must pop all elements above to access',
        'Search: O(n) - May need to traverse all elements',
        'Insertion: O(1) - Constant time to push',
        'Deletion: O(1) - Constant time to pop',
        'Space: O(n) - Grows with number of elements'
      ]
    },
    {
      title: 'Implementation Example',
      content: 'Stack implementation using TypeScript class:',
      code: 'class Stack<T> {\n  private items: T[] = [];\n\n  // Add element to the top of the stack\n  push(element: T): void {\n    this.items.push(element);\n  }\n\n  // Remove and return the top element\n  pop(): T | undefined {\n    return this.items.pop();\n  }\n\n  // View the top element without removing it\n  peek(): T | undefined {\n    return this.items[this.items.length - 1];\n  }\n\n  // Check if the stack is empty\n  isEmpty(): boolean {\n    return this.items.length === 0;\n  }\n\n  // Get the number of elements in the stack\n  size(): number {\n    return this.items.length;\n  }\n\n  // Clear the stack\n  clear(): void {\n    this.items = [];\n  }\n}\n\n// Usage example\nconst numberStack = new Stack<number>();\nnumberStack.push(1);\nnumberStack.push(2);\nconsole.log(numberStack.peek()); // Output: 2\nconsole.log(numberStack.pop());  // Output: 2\nconsole.log(numberStack.size()); // Output: 1'
    },
    {
      title: 'Common Use Cases',
      items: [
        'Function call stack in programming languages',
        'Undo/Redo functionality in applications',
        'Expression evaluation and syntax parsing',
        'Backtracking algorithms',
        'Memory management',
        'Browser history navigation'
      ]
    }
  ];

  return <TopicTemplate title="Stacks" sections={sections} />;
};

export default Stacks;
