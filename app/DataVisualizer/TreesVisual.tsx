// Importing necessary components from React Native
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; // Basic UI elements, buttons, scroll
import React, { useState } from 'react'; // React core + useState for state management
import { useTheme } from '@/app/Themes/Themecontext'; // Custom hook for app theming

// Define the binary tree data structure
const tree = {
    value: "1", // Root node value
    left: { // Left subtree
        value: "2", // Node value
        left: { value: "4" }, // Left child of 2
        right: { value: "5" } // Right child of 2
    },
    right: { // Right subtree
        value: "3", // Node value
        left: { value: "6" }, // Left child of 3
        right: { value: "7" } // Right child of 3
    }
};

// Component for rendering each node in the tree
const NodeCircle = ({ label, highlighted }: { label: string, highlighted: boolean }) => {
    const { theme } = useTheme(); // Get current theme colors

    return (
        <View style={[
            styles.node, // Base styling for node
            { backgroundColor: highlighted ? '#FF6B6B' : theme.colors.primary } // Highlight node if active, else primary color
        ]}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{label}</Text> {/* Display node value */}
        </View>
    );
};

// Main component to visualize the tree
const TreesVisual = () => {
    const { theme } = useTheme(); // Access theme colors
    const [activeNode, setActiveNode] = useState<string | null>(null); // State to track currently active node
    const [visited, setVisited] = useState<string[]>([]);   // <-- Line 42
    const [traversing, setTraversing] = useState<boolean>(false);  // <-- Line 43


    // Utility function to create a delay for visualizing traversal
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const addVisited = (nodeValue: string) => {
        setVisited(prev => (prev.includes(nodeValue) ? prev : [...prev, nodeValue]));
    }

    // Depth-First Search traversal with visual highlighting
    const dfs = async (node: any) => {
        if (!node) return; // Base case: if node is null, stop

        setActiveNode(node.value); // Highlight current node
        addVisited(node.value);
        await delay(600); // Pause to show highlight

        await dfs(node.left); // Recursively visit left child
        await dfs(node.right); // Recursively visit right child
    };

    // Breadth-First Search traversal with visual highlighting
    const bfs = async (root: any) => {
        if (!root) return; // Stop if root is null

        const queue = [root]; // Initialize queue with root node

        while (queue.length && traversing) { // Loop until queue is empty
            const node = queue.shift(); // Remove first node from queue
            if (!node) continue; // Skip if node is null

            setActiveNode(node.value); // Highlight current node
            addVisited(node.value);
            await delay(600); // Pause for visualization

            if (node.left) queue.push(node.left); // Add left child to queue
            if (node.right) queue.push(node.right); // Add right child to queue
        }
    };

    // Traversal methods for Tree

    const preorder = async (node: any) => {
        if (!node) return;

        setActiveNode(node.value);
        addVisited(node.value);
        await delay(600);

        await preorder(node.left);
        await preorder(node.right);
    }

    const inorder = async (node: any) => {
        if (!node) return;

        await inorder(node.left);
        setActiveNode(node.value);
        addVisited(node.value);
        await delay(600);
        await inorder(node.right);
    }
    const postorder = async (node: any) => {
        if (!node) return;

        await postorder(node.left);
        await postorder(node.right);
        setActiveNode(node.value);
        addVisited(node.value);
        await delay(600);
    }

    React.useEffect(() => {
        if (!traversing) return;
        bfs(tree);
    }, [traversing, tree]);

    return (
        <ScrollView> {/* Enable scrolling if content overflows */}
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Text style={[styles.title, { color: theme.colors.text }]}>Tree Visualizer</Text> {/* Title */}

                {/* Root Node */}
                <View style={styles.rootWrapper}>
                    <NodeCircle label="1" highlighted={activeNode === "1"} /> {/* Highlight if active */}
                </View>

                {/* Level 1 nodes */}
                <View style={styles.levelRow}>
                    <NodeCircle label="2" highlighted={activeNode === "2"} />
                    <NodeCircle label="3" highlighted={activeNode === "3"} />
                </View>

                {/* Level 2 nodes */}
                <View style={styles.levelRowGrand}>
                    <NodeCircle label="4" highlighted={activeNode === "4"} />
                    <NodeCircle label="5" highlighted={activeNode === "5"} />
                    <NodeCircle label="6" highlighted={activeNode === "6"} />
                    <NodeCircle label="7" highlighted={activeNode === "7"} />
                </View>

                {/* Buttons row for DFS and BFS */}
                <View style={styles.grid}>
                    <TouchableOpacity
                        style={[styles.gridButton, { backgroundColor: theme.colors.primary }]}
                        onPress={async () => {
                            setVisited([]);
                            setActiveNode(null);
                            await dfs(tree);
                            setTraversing(false);
                        }}
                    >
                        <Text style={styles.btnText}>DFS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.gridButton, { backgroundColor: theme.colors.primary }]}
                        onPress={async () => {
                            setVisited([]);
                            setActiveNode(null);
                            setTraversing(true);
                            await bfs(tree);
                            setTraversing(false);
                        }}
                    >
                        <Text style={[styles.btnLabel, { color: theme.colors.text }]}>BFS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.gridButton, { backgroundColor: theme.colors.primary }]}
                        onPress={() => {
                            setTraversing(false);
                            setVisited([]);
                            setActiveNode(null);
                        }}
                    >
                        <Text style={styles.btnText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.gridButton, { backgroundColor: theme.colors.primary }]}
                        onPress={async () => {
                            setVisited([]);
                            setActiveNode(null);
                            setTraversing(true);
                            await preorder(tree);
                            setTraversing(false);
                        }}
                    >
                        <Text style={styles.btnText}>Pre Order</Text>
                    </TouchableOpacity>
                </View>

                {/* Display currently active node */}
                <Text style={[styles.info, { color: theme.colors.secondary }]}>
                    {activeNode ? `Current Node: ${activeNode}` : 'No node selected'}
                </Text>
                <Text style={[styles.visitedText, { color: theme.colors.primary }]}>
                    {visited.length > 0 ? `Visited: ${visited.join(', ')}` : 'Visited None'}
                </Text>

                {/* Explanation box */}
                <View style={styles.explanationBox}>
                    {/* DFS explanation */}
                    <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>How DFS works?</Text>
                    <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>
                        * DFS (Depth-First Search) is a tree traversal algorithm that explores as far as possible along each branch before backtracking.

                    </Text>

                    {/* BFS explanation */}
                    <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>How BFS works?</Text>
                    <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>
                        * BFS (Breadth-First Search) is a tree traversal algorithm that explores all nodes at the present depth prior to moving on to nodes at the next depth level.

                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default TreesVisual; // Export component

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, alignItems: 'center' }, // Main container, centered
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 }, // Page title styling
    node: { width: 55, height: 55, borderRadius: 30, justifyContent: 'center', alignItems: 'center', margin: 10 }, // Node circle styling
    rootWrapper: { marginBottom: 40 }, // Spacing below root node
    levelRow: {
        flexDirection: 'row', // Horizontal row
        justifyContent: 'center', // Center nodes
        gap: 30, // Space between nodes
        marginBottom: 40 // Vertical spacing
    },
    levelRowGrand: {
        flexDirection: 'row', // Horizontal row
        justifyContent: 'center', // Center nodes
        gap: 15, // Tighter space for lower level
        marginBottom: 20
    },
    buttonRow: { flexDirection: 'row', justifyContent: 'center', gap: 20, marginTop: 40 }, // Row for buttons
    btn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 }, // Button style
    btnText: { color: 'white', fontWeight: '600', fontSize: 14 }, // Button text style
    btnLabel: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    info: { textAlign: 'center', fontSize: 16, marginBottom: -10 }, // Display active node
    explanationBox: {
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#111827' // Dark box background
    },
    explanationTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 }, // Section title
    explanationText: { fontSize: 14, lineHeight: 20 }, // Explanation text
    visitedText: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '500'
    },
    grid: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 40,
    },
    gridButton: {
        width: '45%',
        padding: 15,
        margin: 5,
        backgroundColor: 'navy',
        borderRadius: 10,
        alignItems: 'center',
    },
});
