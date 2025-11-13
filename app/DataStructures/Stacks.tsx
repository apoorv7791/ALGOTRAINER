import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Stack = () => {
    const { theme } = useTheme();
    const router = useRouter();

    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Stack</Text>

            {/* What is Stack? */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>What is a Stack?</Text>
                <Text style={[styles.bullet, { color: theme.colors.text }]}>
                    • LIFO → **Last In, First Out**{"\n"}
                    • Only **top** can be accessed{"\n"}
                    • Like a stack of plates{"\n"}
                    • Core operations: **push**, **pop**, **peek**
                </Text>
            </View>

            {/* Declare Stack */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Declare Stack</Text>
                <CodeBlock
                    code={`int[] stack = new int[100];
int top = -1;`}
                    language="java"
                />
            </View>

            {/* Push */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Push</Text>
                <CodeBlock
                    code={`void push(int x) {
    if (top == 99) {
        System.out.println("Stack Full!");
        return;
    }
    stack[++top] = x;
}`}
                    language="java"
                />
            </View>

            {/* Pop */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Pop</Text>
                <CodeBlock
                    code={`int pop() {
    if (top == -1) {
        System.out.println("Stack Empty!");
        return -1;
    }
    return stack[top--];
}`}
                    language="java"
                />
            </View>

            {/* Peek */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Peek</Text>
                <CodeBlock
                    code={`int peek() {
    if (top == -1) return -1;
    return stack[top];
}`}
                    language="java"
                />
            </View>

            {/* isEmpty */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>isEmpty</Text>
                <CodeBlock
                    code={`boolean isEmpty() {
    return top == -1;
}`}
                    language="java"
                />
            </View>

            {/* Display */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Display (Top → Bottom)</Text>
                <CodeBlock
                    code={`void display() {
    for (int i = top; i >= 0; i--) {
        System.out.println("│ " + stack[i] + " │");
    }
    System.out.println("└───┘");
}`}
                    language="java"
                />
            </View>

            {/* Example */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Live Example</Text>
                <CodeBlock
                    code={`Stack s = new Stack();

s.push(10);     // stack: [10]
s.push(20);     // stack: [10,20]
s.push(30);     // stack: [10,20,30]

s.peek();       // → 30
s.pop();        // → 30 removed
s.pop();        // → 20 removed

s.peek();       // → 10

s.display();
// Output:
// │ 10 │
// └───┘`}
                    language="java"
                />
            </View>

            {/* VISUALIZER BUTTON */}
            <TouchableOpacity
                onPress={() => router.push('/DataVisualizer/StacksVisual')}
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

export default Stack;