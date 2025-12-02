import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../Themes/Themecontext'


// Graph adjacency list
const graph: { [key: number]: number[] } = {
    1: [2, 3],
    2: [1, 3],
    3: [1, 2]
};
// Node component (same as tree)
const NodeCircle = ({ label, highlighted }: { label: string; highlighted: boolean }) => {
    const { theme } = useTheme();
    return (
        <View style={[
            styles.node,
            { backgroundColor: highlighted ? "#FF6B6B" : theme.colors.primary }
        ]}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>{label}</Text>
        </View>
    );
};

const GraphsVisual = () => {
    // Access theme and state variables
    const { theme } = useTheme();
    const [activeNode, setActiveNode] = useState<number | null>(null);
    const [allNodesVisited, setAllNodesVisited] = useState<boolean>(true);
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    const DFS = async (start: number) => {
        setAllNodesVisited(false);
        const visited = new Set();

        async function explore(node: number, parent: number | null = null) {
            if (!node) return;

            // Highlight current node
            if (!visited.has(node)) {
                setActiveNode(node);
                await delay(1000);
            }
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    await explore(neighbor, node);
                }
            }

            // 🔥 Backtrack only to *direct parent*, NOT visited nodes
            if (parent !== null) {
                setActiveNode(parent);
                await delay(800);
            }
        }

        await explore(start);
        setActiveNode(null);
        if (visited.size === Object.keys(graph).length) {
            setAllNodesVisited(true); // All nodes visited!
        }
    };

    const resetVisualization = () => {
        setActiveNode(null);
        setAllNodesVisited(false)
    };




    // Breadth-First Search traversal with visual highlighting
    const BFS = async (start: number) => {
        setAllNodesVisited(false);
        const visited = new Set<number>();
        const queue = [start];

        while (queue.length > 0) {
            const node = queue.shift();
            if (!node || visited.has(node)) continue;

            visited.add(node);
            setActiveNode(node);

            // show animation
            await new Promise((resolve) => setTimeout(resolve, 1000));

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
        setActiveNode(null);
        if (visited.size === Object.keys(graph).length) {
            setAllNodesVisited(true); // All nodes visited!
        }
    };



    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Graphs Visualizer
            </Text>
            <View style={{ marginTop: 20, alignItems: "center" }}>

                {/* Node 1 */}
                <NodeCircle label="1" highlighted={activeNode === 1} />

                {/* Lines from 1 to 2 & 1 to 3 */}
                <View style={styles.lineWrapper}>
                    <View style={styles.slashLeft} />
                    <View style={styles.slashRight} />
                </View>

                {/* Row for nodes 2 and 3 */}
                <View style={styles.bottomWrapper}>
                    <NodeCircle label="2" highlighted={activeNode === 2} />

                    <View style={styles.horizontal} />

                    <NodeCircle label="3" highlighted={activeNode === 3} />
                </View>

            </View>

            {/* Button Row */}
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: theme.colors.primary }]}
                    onPress={() => DFS(1)}
                >
                    <Text style={styles.btnText}>Run DFS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: theme.colors.primary }]}
                    onPress={() => BFS(1)}
                >
                    <Text style={styles.btnText}>Run BFS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: theme.colors.primary }]}
                    onPress={() => {
                        setActiveNode(null);
                        setAllNodesVisited(false);
                        resetVisualization();
                    }}
                >
                    <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.info, { color: theme.colors.text }]}>
                {activeNode ? `Current Node: ${activeNode}` : "No Node Selected"}
            </Text>
            <Text style={[
                styles.info,
                {
                    color: theme.colors.primary,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 10,
                    opacity: allNodesVisited ? 1 : 0,
                    height: allNodesVisited ? 'auto' : 0
                }]}>
                ✓ All nodes visited!
            </Text>


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
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
    // Node circle
    node: {
        width: 55,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    // TOP: Node 1 in center
    centerRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },

    lineContainer: {
        width: 200,   // 👈 same width as bottom row area
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    leftLine: {
        width: 70,
        height: 2,
        backgroundColor: "#999",
        transform: [{ rotate: "-45deg" }],
    },

    rightLine: {
        width: 70,
        height: 2,
        backgroundColor: "#999",
        transform: [{ rotate: "45deg" }],
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginBottom: 40,
    },

    horizontalLine: {
        width: 70,
        height: 2,
        backgroundColor: "#999",
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20
    },

    btn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
    btnText: { color: 'white', fontWeight: '600', fontSize: 14 },
    info: { textAlign: 'center', fontSize: 16, marginTop: 20 },
    lineWrapper: {
        width: 180,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -5,
        marginBottom: 10,
    },

    slashLeft: {
        width: 70,
        height: 2,
        backgroundColor: "#888",
        transform: [{ rotate: "-45deg" }],
    },

    slashRight: {
        width: 70,
        height: 2,
        backgroundColor: "#888",
        transform: [{ rotate: "45deg" }],
    },

    bottomWrapper: {
        width: 220,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: -15,
    },

    horizontal: {
        width: 70,
        height: 2,
        backgroundColor: "#888",
    },
    explanationBox: {
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#111827' // Dark box background
    },
    explanationTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 }, // Section title
    explanationText: { fontSize: 14, lineHeight: 20 } // Explanation text

})
export default GraphsVisual