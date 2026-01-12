import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const LinkedList = () => {
    const { theme } = useTheme();
    const router = useRouter();

    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Linked List</Text>

            {/* 1. What is a Linked List? */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>What is a Linked List?</Text>
                <Text style={[styles.bullet, { color: theme.colors.text }]}>
                    • Linear collection of **nodes**{"\n"}
                    • Each node has **data + next pointer**{"\n"}
                    • No fixed size → easy insert/delete
                </Text>
            </View>

            {/* 2. Node Structure */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Node Class</Text>
                <CodeBlock
                    code={`class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}`}
                    language="java"
                />
            </View>

            {/* 3. Insert at End */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Insert</Text>
                <CodeBlock
                    code={`void insert(int data) {
    Node newNode = new Node(data);
    if (head == null) {
        head = newNode;
        return;
    }
    Node temp = head;
    while (temp.next != null)
        temp = temp.next;
    temp.next = newNode;
}`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    Traverse to end → attach new node
                </Text>
            </View>

            {/* 4. Delete by Value */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Delete</Text>
                <CodeBlock
                    code={`void delete(int data) {
    if (head == null) return;
    if (head.data == data) {
        head = head.next;
        return;
    }
    Node temp = head;
    while (temp.next != null && temp.next.data != data)
        temp = temp.next;
    if (temp.next != null)
        temp.next = temp.next.next;
}`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    Update previous node’s next pointer
                </Text>
            </View>

            {/* 5. Search */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Search</Text>
                <CodeBlock
                    code={`boolean search(int data) {
    Node temp = head;
    while (temp != null) {
        if (temp.data == data) return true;
        temp = temp.next;
    }
    return false;
}`}
                    language="java"
                />
            </View>

            {/* 6. Display */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Display</Text>
                <CodeBlock
                    code={`void display() {
    Node temp = head;
    while (temp != null) {
        System.out.print(temp.data + " → ");
        temp = temp.next;
    }
    System.out.println("null");
}`}
                    language="java"
                />
            </View>

            {/* 7. Example */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Example</Text>
                <CodeBlock
                    code={`LinkedList list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.display();     // 10 → 20 → 30 → null
list.delete(20);
list.display();     // 10 → 30 → null`}
                    language="java"
                />
            </View>

            {/* VISUALIZER BUTTON */}
            <TouchableOpacity
                onPress={() => router.push('/DataVisualizer/LinkedListVisual')}
                style={styles.visualizeBtn}
            >
                <Text style={styles.btnText}>Open Visualizer</Text>
            </TouchableOpacity>
        </ScrollView>
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
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 15,
        lineHeight: 22,
    },
    explain: {
        marginTop: 10,
        fontSize: 14,
        fontStyle: 'italic',
        lineHeight: 20,
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

export default LinkedList;