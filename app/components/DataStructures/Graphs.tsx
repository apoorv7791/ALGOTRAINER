import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const Graph = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Graph</Text>

            {/* Manual Graph Implementation */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Manual Graph Implementation (Adjacency List)</Text>
                <CodeBlock
                    code={`import java.util.*;

class Graph {
    private Map<Integer, List<Integer>> adjList = new HashMap<>();

    // Add vertex
    public void addVertex(int v) {
        adjList.putIfAbsent(v, new ArrayList<>());
    }

    // Add edge (undirected)
    public void addEdge(int src, int dest) {
        adjList.get(src).add(dest);
        adjList.get(dest).add(src);
    }

    // BFS Traversal
    public void bfs(int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            int vertex = queue.poll();
            System.out.print(vertex + " ");
            for (int neighbor : adjList.get(vertex)) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                }
            }
        }
    }

    // DFS Traversal
    public void dfs(int start, Set<Integer> visited) {
        visited.add(start);
        System.out.print(start + " ");
        for (int neighbor : adjList.get(start)) {
            if (!visited.contains(neighbor)) {
                dfs(neighbor, visited);
            }
        }
    }

    // Print Graph
    public void printGraph() {
        for (var entry : adjList.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`}
                    language="java"
                />
            </View>

            {/* Graph Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Graph Operations</Text>
                <CodeBlock
                    code={`public class Main {
    public static void main(String[] args) {
        Graph graph = new Graph();

        // Add vertices
        for (int i = 1; i <= 5; i++) {
            graph.addVertex(i);
        }

        // Add edges
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 4);
        graph.addEdge(3, 5);

        System.out.println("Graph:");
        graph.printGraph();

        System.out.print("\\nBFS from node 1: ");
        graph.bfs(1); // 1 2 3 4 5

        System.out.print("\\nDFS from node 1: ");
        graph.dfs(1, new HashSet<>()); // 1 2 4 3 5
    }
}`}
                    language="java"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default Graph;
