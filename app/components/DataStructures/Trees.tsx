import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const Tree = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Binary Tree</Text>

            {/* Manual Tree Implementation */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Manual Binary Tree Implementation</Text>
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

    // Insert nodes manually
    public void insert(Node node, int value) {
        if (value < node.data) {
            if (node.left != null) insert(node.left, value);
            else node.left = new Node(value);
        } else {
            if (node.right != null) insert(node.right, value);
            else node.right = new Node(value);
        }
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
            </View>

            {/* Tree Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Tree Operations</Text>
                <CodeBlock
                    code={`public class Main {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(10);
        tree.insert(tree.root, 5);
        tree.insert(tree.root, 15);
        tree.insert(tree.root, 3);
        tree.insert(tree.root, 7);

        System.out.print("Inorder: ");
        tree.inorder(tree.root);   // 3 5 7 10 15

        System.out.print("\\nPreorder: ");
        tree.preorder(tree.root);  // 10 5 3 7 15

        System.out.print("\\nPostorder: ");
        tree.postorder(tree.root); // 3 7 5 15 10
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

export default Tree;
