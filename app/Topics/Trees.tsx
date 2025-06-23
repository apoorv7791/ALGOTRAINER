import React from 'react';
import TopicTemplate from './TopicTemplate';

const Trees: React.FC = () => {
  const sections = [
    {
      title: 'Overview',
      content: 'A tree is a hierarchical data structure consisting of nodes connected by edges. Each node contains a value and references to its child nodes. The topmost node is called the root, and nodes with no children are called leaves. Trees are widely used in computer science for representing hierarchical relationships.',
      code: '// Basic TreeNode structure in TypeScript\nclass TreeNode<T> {\n  value: T;\n  children: TreeNode<T>[];\n\n  constructor(value: T) {\n    this.value = value;\n    this.children = [];\n  }\n\n  addChild(value: T): TreeNode<T> {\n    const node = new TreeNode(value);\n    this.children.push(node);\n    return node;\n  }\n}\n\n// Create a simple tree\nconst root = new TreeNode<string>("Root");\nconst child1 = root.addChild("Child 1");\nconst child2 = root.addChild("Child 2");\nchild1.addChild("Grandchild 1");'
    },
    {
      title: 'Key Concepts',
      items: [
        'Node - Basic unit containing data and references to child nodes',
        'Root - The topmost node in the tree',
        'Edge - Connection between nodes',
        'Parent/Child - Relationship between connected nodes',
        'Leaf - Node with no children',
        'Depth - Distance from the root to a node',
        'Height - Maximum depth of any node in the tree'
      ]
    },
    {
      title: 'Common Tree Types',
      items: [
        'Binary Tree - Each node has at most two children',
        'Binary Search Tree (BST) - Left child < Parent < Right child',
        'AVL Tree - Self-balancing BST',
        'Red-Black Tree - Self-balancing BST with color properties',
        'B-Tree - Self-balancing search tree for disk storage',
        'Trie - Prefix tree for efficient string search',
        'Heap - Complete binary tree with heap property'
      ]
    },
    {
      title: 'Tree Traversals',
      content: 'Different ways to visit all nodes in a tree:',
      code: '// In-order (Left, Root, Right)\nfunction inOrder<T>(node: TreeNode<T> | null): void {\n  if (!node) return;\n  inOrder(node.left);\n  console.log(node.value);\n  inOrder(node.right);\n}\n\n// Pre-order (Root, Left, Right)\nfunction preOrder<T>(node: TreeNode<T> | null): void {\n  if (!node) return;\n  console.log(node.value);\n  preOrder(node.left);\n  preOrder(node.right);\n}\n\n// Post-order (Left, Right, Root)\nfunction postOrder<T>(node: TreeNode<T> | null): void {\n  if (!node) return;\n  postOrder(node.left);\n  postOrder(node.right);\n  console.log(node.value);\n}\n\n// Level-order (Breadth-first)\nfunction levelOrder<T>(root: TreeNode<T> | null): void {\n  if (!root) return;\n  \n  const queue: TreeNode<T>[] = [root];\n  while (queue.length > 0) {\n    const node = queue.shift()!;\n    console.log(node.value);\n    queue.push(...node.children);\n  }\n}'
    },
    {
      title: 'Time Complexity',
      items: [
        'Access: O(n) - May need to traverse all nodes',
        'Search: O(n) - For general trees',
        'Search: O(log n) - For balanced BST',
        'Insert: O(1) - At known position',
        'Insert: O(log n) - In balanced BST',
        'Delete: O(1) - At known position',
        'Delete: O(log n) - In balanced BST',
        'Space: O(n) - Stores all nodes'
      ]
    },
    {
      title: 'Common Use Cases',
      items: [
        'File systems (directories and files)',
        'Database indexing',
        'DOM in web browsers',
        'Compilers (syntax trees)',
        'Networking (routing algorithms)',
        'AI (decision trees)',
        'Auto-completion (tries)'
      ]
    }
  ];

  return <TopicTemplate title="Trees" sections={sections} />;
};

export default Trees;
