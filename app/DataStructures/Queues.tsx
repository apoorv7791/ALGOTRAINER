import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Queue = () => {
    const { theme } = useTheme();
    const router = useRouter();
    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}
            contentContainerStyle={styles.container} >
            <Text style={[styles.header, { color: theme.colors.text }]}>Queues</Text>

            {/* Manual Queue Implementation */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Definition of Queue</Text>
                <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                    • A queue is a linear data structure that follows the First In First Out (FIFO) principle.{"\n"}
                    • Elements are added (enqueued) at the rear and removed (dequeued) from the front.{"\n"}
                    • Queues are used in various applications such as scheduling processes, managing requests in web servers, and breadth-first search algorithms.{"\n"}
                </Text>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Manual Queue Implementation (Using Linked List)</Text>
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
}.  `}
                    language="java"
                />
            </View>

            {/* Queue Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Queue Operations </Text>
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
                <View style={styles.section}>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>How It Works</Text>
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • A Queue is a linear data structure that follows the First In, First Out (FIFO) principle.{"\n"}
                        • Elements are added at the rear (enqueue) and removed from the front (dequeue).{"\n"}
                        • The Queue class is implemented using a linked list where each node holds data and a reference to the next node.{"\n"}
                        • Common operations include:{"\n"}
                        {"   ◦ Enqueue(): Add an element to the rear of the queue."}{"\n"}
                        {"   ◦ Dequeue(): Remove an element from the front."}{"\n"}
                        {"   ◦ Peek(): View the front element without removing it."}{"\n"}
                        {"   ◦ isEmpty(): Check if the queue has no elements."}{"\n"}
                        • The Main class demonstrates queue operations, showing how elements move through the structure as per FIFO order.
                    </Text>
                </View>
                {/* Visualizing Queue */}
                <TouchableOpacity
                    onPress={() => router.push('/DataVisualizer/QueuesVisual')}
                    style={styles.visualizeBtn}
                >
                    <Text style={styles.btnText}>Open Visualizer</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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

export default Queue;
