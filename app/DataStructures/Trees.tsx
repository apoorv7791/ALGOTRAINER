import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Tree = () => {
    const { theme } = useTheme();
    const router = useRouter();

    const sections = [
        {
            key: 'definition',
            title: 'Definition of a Tree',
            content: (
                <>
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • A tree is a hierarchical data structure consisting of nodes, where each node has a value and references to its child nodes.{"\n"}
                        • The topmost node is called the root, and nodes with no children are called leaves.{"\n"}
                        • Trees are used in various applications such as representing hierarchical data, searching and sorting algorithms, and organizing information in databases.
                    </Text>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                        Simple Binary Tree Implementation
                    </Text>
                    <CodeBlock
                        code={`class Node {
    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    public BinaryTree() {
        root = null;
    }

    // Inorder Traversal (Left, Root, Right)
    public void inorder(Node node) {
        if (node != null) {
            inorder(node.left);
            System.out.print(node.data + " ");
            inorder(node.right);
        }
    }

    // Preorder Traversal (Root, Left, Right)
    public void preorder(Node node) {
        if (node != null) {
            System.out.print(node.data + " ");
            preorder(node.left);
            preorder(node.right);
        }
    }

    // Postorder Traversal (Left, Right, Root)
    public void postorder(Node node) {
        if (node != null) {
            postorder(node.left);
            postorder(node.right);
            System.out.print(node.data + " ");
        }
    }
}`}
                        language="java"
                    />
                </>
            ),
        },
        {
            key: 'example',
            title: 'Example Usage & Explanation',
            content: (
                <>
                    <CodeBlock
                        code={`public class Main {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();

        // Manually connect nodes
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);

        System.out.print("Inorder: ");
        tree.inorder(tree.root);   // 4 2 5 1 3

        System.out.print("\\nPreorder: ");
        tree.preorder(tree.root);  // 1 2 4 5 3

        System.out.print("\\nPostorder: ");
        tree.postorder(tree.root); // 4 5 2 3 1
    }
}`}
                        language="java"
                    />
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • A Tree is hierarchical with nodes connected by edges.{"\n"}
                        • The root is the starting node; leaves have no children.{"\n"}
                        • Nodes with the same parent are siblings.{"\n"}
                        • Traversals (preorder, inorder, postorder) visit nodes in different sequences.{"\n"}
                        • Trees are widely used to represent hierarchical data like file systems or organizational structures.
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
            <Text style={[styles.header, { color: theme.colors.text }]}>Trees</Text>

            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity
                onPress={() => router.push('/DataVisualizer/TreesVisual')}
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

export default Tree;
