import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const LinkedList = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>LinkedList</Text>

            {/* Basic LinkedList Implementation */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>LinkedList Implementation</Text>
                <CodeBlock
                    code={`class Node<T> {
    T data;
    Node<T> next;
    
    Node(T data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    Node<T> head;
    
    public void add(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node<T> current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    public void remove(T data) {
        if (head == null) return;
        if (head.data.equals(data)) {
            head = head.next;
            return;
        }
        Node<T> current = head;
        while (current.next != null && !current.next.data.equals(data)) {
            current = current.next;
        }
        if (current.next != null) {
            current.next = current.next.next;
        }
    }
}`}
                    language="java"
                />
            </View>

            {/* LinkedList Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>LinkedList Operations</Text>
                <CodeBlock
                    code={`// Using Java's built-in LinkedList
LinkedList<String> list = new LinkedList<>();

// Adding elements
list.add("First");           // Add to end
list.addFirst("Start");      // Add to start
list.addLast("Last");        // Add to end

// Accessing elements
String first = list.getFirst();  // Get first element
String last = list.getLast();    // Get last element

// Removing elements
list.removeFirst();          // Remove from start
list.removeLast();           // Remove from end
list.remove("First");        // Remove specific element

// Checking if element exists
boolean exists = list.contains("Start");`}
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
})

export default LinkedList;
