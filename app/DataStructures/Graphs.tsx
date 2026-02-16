import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Graph = () => {
    const { theme } = useTheme();
    const router = useRouter();

    const sections = [
        {
            key: 'definition',
            title: 'Definition of Graphs',
            content: (
                <>
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • A graph is a data structure that consists of a set of nodes (vertices) and a set of edges that connect pairs of nodes.{"\n"}
                        • Graphs can be directed or undirected, weighted or unweighted.{"\n"}
                        • They are used to model relationships and networks in various fields such as computer science, biology, social sciences, and transportation.
                    </Text>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                        Manual Graph Implementation (Adjacency List)
                    </Text>
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
                </>
            ),
        },
        {
            key: 'operations',
            title: 'Graph Operations',
            content: (
                <>
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
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • The Graph class uses an adjacency list to represent the graph structure.{"\n"}
                        • Vertices can be added using the addVertex method, and edges can be created using the addEdge method.{"\n"}
                        • The bfs method performs a breadth-first search starting from a given vertex, while the dfs method performs a depth-first search.{"\n"}
                        • The printGraph method displays the adjacency list representation of the graph.
                    </Text>
                </>
            ),
        },
    ];

    const renderItem = ({ item }: any) => (
        <View style={styles.section}>
            <Text style={[styles.subHeader, { color: theme.colors.text }]}>{item.title}</Text>
            {item.content}
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Graph</Text>

            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity
                onPress={() => router.push('/DataVisualizer/GraphsVisual')}
                style={styles.visualizeBtn}
            >
                <Text style={styles.btnText}>Open Visualizer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
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
    },
    bulletPoint: {
        fontSize: 16,
        marginBottom: 10,
    },
    visualizeBtn: {
        backgroundColor: '#34D399',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default Graph;
