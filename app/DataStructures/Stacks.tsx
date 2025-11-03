import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const Stack = () => {
    const { theme } = useTheme();

    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}
            contentContainerStyle={styles.container}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Stacks</Text>

            {/* Stack Implementation */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Definition of Stack</Text>
                <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                    • A stack is a linear data structure that follows the Last In First Out (LIFO) principle.{"\n"}
                    • Elements can be added (pushed) and removed (popped) only from the top of the stack.{"\n"}
                    • Stacks are used in various applications such as expression evaluation, backtracking algorithms, and function call management.{"\n"}
                </Text>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Manual Stack Implementation (Using Arrays)</Text>
                <CodeBlock
                    code={`class Stack {
    private int[] arr;
    private int top;
    private int capacity;

    // Constructor
    public Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    // Push an element onto the stack
    public void push(int item) {
        if (isFull()) {
            System.out.println("Stack Overflow");
            return;
        }
        arr[++top] = item;
    }

    // Pop an element from the stack
    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return arr[top--];
    }

    // Peek at the top element
    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return -1;
        }
        return arr[top];
    }

    // Check if stack is empty
    public boolean isEmpty() {
        return top == -1;
    }

    // Check if stack is full
    public boolean isFull() {
        return top == capacity - 1;
    }

    // Get size of the stack
    public int size() {
        return top + 1;
    }
    // display stack elements
    public void dipsplay(){
     for(int i = top; i >= 0; i--){
        System.out.println(arr[i]);
        }
    }
}`}
                    language="java"
                />
            </View>

            {/* Stack Operations Example */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Stack Operations Example</Text>
                <CodeBlock
                    code={`public class Main {
    public static void main(String[] args) {
        Stack stack = new Stack(5);

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Top element: " + stack.peek());
        System.out.println("Stack size: " + stack.size());

        stack.pop();
        stack.pop();

        System.out.println("After popping two elements:");
        System.out.println("Top element: " + stack.peek());
        stack.dipsplay();
    }
}`}
                    language="java"
                />
                {/* Explanation of the code */}
                <View style={styles.section}>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>How It Works</Text>
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle.{"\n"}
                        • Elements are added and removed from the top of the stack only.{"\n"}
                        • The Stack class is implemented using a linked list or array, where the last inserted element is the first to be removed.{"\n"}
                        • Common operations include:{"\n"}
                        {"     ◦ Push: Add an element to the top of the stack."}{"\n"}
                        {"     ◦ Pop: Remove the element from the top of the stack."}{"\n"}
                        {"     ◦ Peek: View the top element without removing it."}{"\n"}
                        {"     ◦ isEmpty: Check if the stack is empty."}{"\n"}
                        • The Main class demonstrates stack operations, showing how elements are managed in LIFO order.
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    section: {
        padding: 20,
        marginVertical: 10,
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

export default Stack;
