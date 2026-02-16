import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Stack = () => {
    const { theme } = useTheme();
    const router = useRouter();

    // All sections as data for FlatList
    const sections = [
        {
            key: 'intro',
            title: 'What is a Stack?',
            content: (
                <Text style={[styles.bullet, { color: theme.colors.text }]}>
                    • LIFO → **Last In, First Out**{"\n"}
                    • Only **top** can be accessed{"\n"}
                    • Like a stack of plates{"\n"}
                    • Core operations: **push**, **pop**, **peek**
                </Text>
            ),
        },
        {
            key: 'declare',
            title: 'Declare Stack',
            content: (
                <>
                    <CodeBlock
                        code={`int[] stack = new int[100];
int top = -1;`}
                        language="java"
                    />
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * An Array named stack of size 100 is declared.{"\n"}
                        * top is the index of the top element of the stack.
                    </Text>
                </>
            ),
        },
        {
            key: 'push',
            title: 'Push',
            content: (
                <>
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
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * If the stack is not full, the element is pushed onto the stack.{"\n"}
                        * If the stack is full, an error message is printed.
                    </Text>
                </>
            ),
        },
        {
            key: 'pop',
            title: 'Pop',
            content: (
                <>
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
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * If the stack is not empty, the top element is popped off the stack.{"\n"}
                        * If the stack is empty, an error message is printed.
                    </Text>
                </>
            ),
        },
        {
            key: 'peek',
            title: 'Peek',
            content: (
                <>
                    <CodeBlock
                        code={`int peek() {
    if (top == -1) return -1;
    return stack[top];
}`}
                        language="java"
                    />
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * If the stack is not empty, the top element is returned.{"\n"}
                        * If the stack is empty, -1 is returned.
                    </Text>
                </>
            ),
        },
        {
            key: 'isEmpty',
            title: 'isEmpty',
            content: (
                <>
                    <CodeBlock
                        code={`boolean isEmpty() {
    return top == -1;
}`}
                        language="java"
                    />
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * If the stack is empty, true is returned.{"\n"}
                        * If the stack is not empty, false is returned.
                    </Text>
                </>
            ),
        },
        {
            key: 'display',
            title: 'Display (Top → Bottom)',
            content: (
                <>
                    <CodeBlock
                        code={`void display() {
    for (int i = top; i >= 0; i--) {
        System.out.println("│ " + stack[i] + " │");
    }
    System.out.println("└───┘");
}`}
                        language="java"
                    />
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * The stack is displayed from top to bottom.
                    </Text>
                </>
            ),
        },
        {
            key: 'example',
            title: 'Live Example',
            content: (
                <>
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
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                        * A live example of a stack is provided.{'\n'}
                        * Please tap the button below to see stack visually.
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
            <Text style={[styles.header, { color: theme.colors.text }]}>Stacks</Text>
            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity
                onPress={() => router.push('/DataVisualizer/StacksVisual')}
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

export default Stack;
