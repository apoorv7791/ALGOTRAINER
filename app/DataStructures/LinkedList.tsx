import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const LinkedList = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}
            contentContainerStyle={styles.container}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Linked List</Text>

            {/* Node and LinkedList Structure */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Definition of Linked List</Text>
                <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                    • A linked list is a linear data structure where elements, called nodes, are stored in non-contiguous memory locations.{"\n"}
                    • Each node contains data and a reference (or pointer) to the next node in the sequence.{"\n"}
                    • Linked lists allow for efficient insertions and deletions as they do not require shifting elements like arrays.{"\n"}
                </Text>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Node & LinkedList Structure</Text>
                <CodeBlock
                    code={`class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head;

    // Insert node at end
    public void insert(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete node by value
    public void delete(int data) {
        if (head == null) return;

        if (head.data == data) {
            head = head.next;
            return;
        }

        Node current = head;
        while (current.next != null && current.next.data != data) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
        }
    }

    // Search node by value
    public boolean search(int data) {
        Node current = head;
        while (current != null) {
            if (current.data == data)
                return true;
            current = current.next;
        }
        return false;
    }

    // Display all nodes
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}`}
                    language="java"
                />
            </View>

            {/* LinkedList Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>LinkedList Operations</Text>
                <CodeBlock
                    code={`public class Main {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        // Insert elements
        list.insert(10);
        list.insert(20);
        list.insert(30);

        System.out.print("List: ");
        list.display();  // Output: 10 -> 20 -> 30 -> null

        // Search element
        System.out.println("Search 20: " + list.search(20));  // true
        System.out.println("Search 99: " + list.search(99));  // false

        // Delete element
        list.delete(20);
        System.out.print("After deletion: ");
        list.display();  // Output: 10 -> 30 -> null
    }
}`}
                    language="java"
                />
            </View>

            {/* Explanation of the code*/}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>How It Works</Text>
                <Text style={{ color: theme.colors.text }}>
                    • Each Node stores data and a reference (next) to the next node.{"\n"}
                    • Insertion adds a new node at the end of the list.{"\n"}
                    • Deletion removes a node by updating the previous node’s next reference.{"\n"}
                    • Search iterates through all nodes until the value is found or the list ends.{"\n"}
                    • Display prints all nodes from head to null, showing the chain connection.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
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
    }
});

export default LinkedList;
