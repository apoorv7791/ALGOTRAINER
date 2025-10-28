import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const Queue = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Queue</Text>

            {/* Manual Queue Implementation */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Manual Queue Implementation</Text>
                <CodeBlock
                    code={`class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    Node front, rear;

    // Enqueue - add to end
    public void enqueue(int data) {
        Node newNode = new Node(data);
        if (rear == null) {
            front = rear = newNode;
            return;
        }
        rear.next = newNode;
        rear = newNode;
    }

    // Dequeue - remove from front
    public void dequeue() {
        if (front == null) {
            System.out.println("Queue is empty");
            return;
        }
        front = front.next;
        if (front == null)
            rear = null;
    }

    // Peek - view front element
    public int peek() {
        if (front == null) {
            throw new RuntimeException("Queue is empty");
        }
        return front.data;
    }

    // Check if empty
    public boolean isEmpty() {
        return front == null;
    }

    // Display queue
    public void display() {
        if (front == null) {
            System.out.println("Queue is empty");
            return;
        }
        Node current = front;
        while (current != null) {
            System.out.print(current.data + " <- ");
            current = current.next;
        }
        System.out.println("null");
    }
}`}
                    language="java"
                />
            </View>

            {/* Queue Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Queue Operations</Text>
                <CodeBlock
                    code={`public class Main {
    public static void main(String[] args) {
        Queue queue = new Queue();

        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        System.out.print("Queue: ");
        queue.display();  // 10 <- 20 <- 30 <- null

        System.out.println("Front element: " + queue.peek());  // 10

        queue.dequeue();
        System.out.print("After dequeue: ");
        queue.display();  // 20 <- 30 <- null

        System.out.println("Is queue empty? " + queue.isEmpty()); // false
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

export default Queue;
