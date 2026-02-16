import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const LinkedList = () => {
    const { theme } = useTheme();
    const router = useRouter();

    // Sections of the LinkedList tutorial
    const sections = [
        {
            key: 'what-is-linked-list',
            title: 'What is a Linked List?',
            content: [
                '• Linear collection of **nodes**',
                '• Each node has **data + next pointer**',
                '• No fixed size → easy insert/delete',
            ],
        },
        {
            key: 'node-class',
            title: 'Node Class',
            code: `class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}`,
        },
        {
            key: 'insert-end',
            title: 'Insert',
            code: `void insert(int data) {
    Node newNode = new Node(data);
    if (head == null) {
        head = newNode;
        return;
    }
    Node temp = head;
    while (temp.next != null)
        temp = temp.next;
    temp.next = newNode;
}`,
            explain: 'Traverse to end → attach new node',
        },
        {
            key: 'delete-value',
            title: 'Delete',
            code: `void delete(int data) {
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
}`,
            explain: 'Update previous node’s next pointer',
        },
        {
            key: 'search',
            title: 'Search',
            code: `boolean search(int data) {
    Node temp = head;
    while (temp != null) {
        if (temp.data == data) return true;
        temp = temp.next;
    }
    return false;
}`,
        },
        {
            key: 'display',
            title: 'Display',
            code: `void display() {
    Node temp = head;
    while (temp != null) {
        System.out.print(temp.data + " → ");
        temp = temp.next;
    }
    System.out.println("null");
}`,
        },
        {
            key: 'example',
            title: 'Example',
            code: `LinkedList list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.display();     // 10 → 20 → 30 → null
list.delete(20);
list.display();     // 10 → 30 → null`,
        },
        {
            key: 'visualizer',
            isButton: true,
        },
    ];

    const renderItem = ({ item }: any) => {
        if (item.isButton) {
            return (
                <TouchableOpacity
                    onPress={() => router.push('/DataVisualizer/LinkedListVisual')}
                    style={[styles.visualizeBtn, { backgroundColor: theme.colors.primary }]}
                >
                    <Text style={styles.btnText}>Open Visualizer</Text>
                </TouchableOpacity>
            );
        }

        return (
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>{item.title}</Text>
                {item.content &&
                    item.content.map((line: string, idx: number) => (
                        <Text key={idx} style={[styles.bullet, { color: theme.colors.text }]}>
                            {line}
                        </Text>
                    ))}
                {item.code && <CodeBlock code={item.code} language="java" />}
                {item.explain && (
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>{item.explain}</Text>
                )}
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    section: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 6,
    },
    explain: {
        marginTop: 12,
        fontSize: 14,
        fontStyle: 'italic',
        lineHeight: 20,
    },
    visualizeBtn: {
        marginHorizontal: 16,
        marginVertical: 24,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default LinkedList;
