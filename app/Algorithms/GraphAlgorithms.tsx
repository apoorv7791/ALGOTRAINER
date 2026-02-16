import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import * as ScreenOrientation from 'expo-screen-orientation';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

interface Section {
    id: string;
    title: string;
    content?: string;
    code?: string;
    codeLanguage?: string;
}

const graphSections: Section[] = [
    {
        id: 'definition',
        title: 'Definition of Graph Algorithms',
        content: `• Graph algorithms are a set of procedures used to solve problems related to graph data structures.
• They help in traversing, searching, and analyzing graphs to find optimal paths, detect cycles, and determine connectivity among nodes.`,
    },
    {
        id: 'example',
        title: 'Example: BFS and DFS in Java',
        code: `// BFS Traversal
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
}`,
        codeLanguage: 'java',
    },
];

const GraphAlgorithms = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        ScreenOrientation.unlockAsync();

        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    const renderSection = ({ item }: { item: Section }) => (
        <View style={styles.section}>
            <Text style={[styles.subHeader, { color: theme.colors.text }]}>{item.title}</Text>
            {item.content && <Text style={[styles.text, { color: theme.colors.text }]}>{item.content}</Text>}
            {item.code && (
                <CodeBlock code={item.code} language={item.codeLanguage} fontSize={isLandscape ? 10 : 12} />
            )}
        </View>
    );

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={styles.contentContainer}
        >
            <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                Graph Algorithms
            </Text>

            <FlatList
                data={graphSections}
                keyExtractor={(item) => item.id}
                renderItem={renderSection}
                scrollEnabled={false}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    contentContainer: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },
    header: { fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    section: { marginBottom: 25 },
    subHeader: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
    text: { fontSize: 16, lineHeight: 22, marginBottom: 20 },
});

export default GraphAlgorithms;
