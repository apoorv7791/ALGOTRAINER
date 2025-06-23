import React from 'react';
import TopicTemplate from './TopicTemplate';

const Graphs: React.FC = () => {
  const sections = [
    {
      title: 'Overview',
      content: 'A graph is a non-linear data structure consisting of nodes (vertices) connected by edges. Graphs are used to represent networks of connections between objects and are fundamental to many real-world applications like social networks, maps, and routing algorithms. Unlike trees, graphs can have cycles and may be disconnected.',
      code: '// Basic Graph implementation in TypeScript\nclass Graph<T> {\n  private adjacencyList: Map<T, T[]>;\n\n  constructor() {\n    this.adjacencyList = new Map();\n  }\n\n  addVertex(vertex: T): void {\n    if (!this.adjacencyList.has(vertex)) {\n      this.adjacencyList.set(vertex, []);\n    }\n  }\n\n  addEdge(v1: T, v2: T): void {\n    this.adjacencyList.get(v1)?.push(v2);\n    this.adjacencyList.get(v2)?.push(v1); // For undirected graph\n  }\n}\n\n// Create a simple graph\nconst graph = new Graph<string>();\ngraph.addVertex("A");\ngraph.addVertex("B");\ngraph.addVertex("C");\ngraph.addEdge("A", "B");\ngraph.addEdge("B", "C");'
    },
    {
      title: 'Key Concepts',
      items: [
        'Vertex (Node) - Fundamental unit of which graphs are formed',
        'Edge - Connection between two vertices',
        'Weight - Value associated with an edge',
        'Path - Sequence of vertices connected by edges',
        'Cycle - Path that starts and ends at the same vertex',
        'Directed/Undirected - Whether edges have direction',
        'Weighted/Unweighted - Whether edges have weights'
      ]
    },
    {
      title: 'Graph Representations',
      items: [
        'Adjacency Matrix - 2D array where cell [i][j] indicates connection',
        'Adjacency List - Array of linked lists where index represents a vertex',
        'Edge List - Collection of all edges as pairs of vertices',
        'Incidence Matrix - 2D array where rows represent vertices and columns represent edges'
      ]
    },
    {
      title: 'Graph Traversals',
      content: 'Common algorithms to visit all vertices:',
      code: '// Depth-First Search (DFS) - Recursive\nfunction dfs<T>(graph: Graph<T>, start: T): void {\n  const visited = new Set<T>();\n  \n  function traverse(vertex: T): void {\n    if (!vertex || visited.has(vertex)) return;\n    \n    visited.add(vertex);\n    console.log(vertex); // Process the vertex\n    \n    const neighbors = graph.getNeighbors(vertex) || [];\n    for (const neighbor of neighbors) {\n      traverse(neighbor);\n    }\n  }\n  \n  traverse(start);\n}\n\n// Breadth-First Search (BFS) - Iterative with queue\nfunction bfs<T>(graph: Graph<T>, start: T): void {\n  const visited = new Set<T>();\n  const queue: T[] = [start];\n  \n  while (queue.length > 0) {\n    const vertex = queue.shift()!;\n    if (!visited.has(vertex)) {\n      visited.add(vertex);\n      console.log(vertex); // Process the vertex\n      \n      const neighbors = graph.getNeighbors(vertex) || [];\n      for (const neighbor of neighbors) {\n        if (!visited.has(neighbor)) {\n          queue.push(neighbor);\n        }\n      }\n    }\n  }\n}'
    },
    {
      title: 'Common Graph Algorithms',
      items: [
        'Dijkstra\'s - Shortest path in weighted graphs',
        'A* Search - Efficient pathfinding with heuristics',
        'Bellman-Ford - Handles negative weight edges',
        'Floyd-Warshall - All pairs shortest paths',
        'Kruskal\'s - Minimum spanning tree',
        'Prim\'s - Minimum spanning tree',
        'Topological Sort - For directed acyclic graphs (DAGs)'
      ]
    },
    {
      title: 'Time & Space Complexity',
      items: [
        'Adjacency List - Space: O(V + E), Add/Remove Vertex: O(1), Add/Remove Edge: O(1)',
        'Adjacency Matrix - Space: O(V²), Add/Remove Vertex: O(V²), Add/Remove Edge: O(1)',
        'BFS/DFS - Time: O(V + E), Space: O(V)'
      ]
    },
    {
      title: 'Common Use Cases',
      items: [
        'Social networks (Facebook friends, LinkedIn connections)',
        'Web page ranking (Google PageRank)',
        'GPS navigation and maps',
        'Network routing protocols',
        'Dependency resolution (npm, Maven)',
        'Web crawlers',
        'Artificial intelligence (decision trees, neural networks)'
      ]
    }
  ];

  return <TopicTemplate title="Graphs" sections={sections} />;
};

export default Graphs;