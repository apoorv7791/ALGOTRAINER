import React from 'react';
import TopicTemplate from './TopicTemplate';

const LinkedList: React.FC = () => {
    const sections = [
        {
            title: 'Overview',
            content: 'A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists do not have indices and elements are not stored in contiguous memory locations.',
            code: '// Basic Node structure in TypeScript\nclass Node<T> {\n  value: T;\n  next: Node<T> | null;\n  \n  constructor(value: T) {\n    this.value = value;\n    this.next = null;\n  }\n}'
        },
        {
            title: 'Key Characteristics',
            items: [
                'Dynamic size - Can grow or shrink as needed',
                'Memory efficiency - Allocates memory as needed',
                'No random access - Must traverse from the head to access elements',
                'Insertion/Deletion - O(1) at head, O(n) elsewhere',
                'Search - O(n) time complexity'
            ]
        },
        {
            title: 'Common Operations',
            items: [
                'append(value) - Add to the end',
                'prepend(value) - Add to the beginning',
                'delete(value) - Remove first occurrence',
                'search(value) - Find a node',
                'traverse() - Visit all nodes'
            ]
        },
        {
            title: 'Implementation Example',
            content: 'Basic LinkedList implementation in TypeScript:',
            code: 'class LinkedList<T> {\n  private head: Node<T> | null;\n  \n  constructor() {\n    this.head = null;\n  }\n  \n  // Add to the end of the list\n  append(value: T): void {\n    const newNode = new Node(value);\n    if (!this.head) {\n      this.head = newNode;\n      return;\n    }\n    \n    let current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    current.next = newNode;\n  }\n  \n  // Print all values in the list\n  print(): string {\n    const values: T[] = [];\n    let current = this.head;\n    while (current) {\n      values.push(current.value);\n      current = current.next;\n    }\n    return values.join(" -> ") + " -> null";\n  }\n}\n\n// Usage example\nconst list = new LinkedList<number>();\nlist.append(1);\nlist.append(2);\nlist.append(3);\nconsole.log(list.print()); // Output: 1 -> 2 -> 3 -> null'
        },
        {
            title: 'Types of Linked Lists',
            items: [
                'Singly Linked List - Each node points to the next node',
                'Doubly Linked List - Each node points to both next and previous nodes',
                'Circular Linked List - Last node points back to the first node',
                'Circular Doubly Linked List - Combines features of both'
            ]
        }
    ];

    return <TopicTemplate title="Linked List" sections={sections} />;
};

export default LinkedList;