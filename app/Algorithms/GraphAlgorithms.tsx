import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import * as ScreenOrientation from 'expo-screen-orientation';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const GraphAlgorithms = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = React.useState(false);

    React.useEffect(() => {
        // Allow both orientations
        ScreenOrientation.unlockAsync();

        // Listen for orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={styles.contentContainer}
        >
            <View>
                <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                    Graph Algorithms
                </Text>

                <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                    1️⃣ Definition of Graph Algorithms
                </Text>

                <Text style={[styles.text, { color: theme.colors.text }]}>
                    * Graph algorithms are a set of procedures used to solve problems related
                    to graph data structures.{"\n"}
                    * They help in traversing, searching, and analyzing graphs to find optimal
                    paths, detect cycles, and determine connectivity among nodes.
                </Text>
            </View>
            <CodeBlock
                code={`// Example: Depth-First Search (DFS) and Breadth-First Search (BFS) in Java
                // 
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
                }}
            />`}
                language="java"
                fontSize={isLandscape ? 10 : 12}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 20,
    },
});

export default GraphAlgorithms;
