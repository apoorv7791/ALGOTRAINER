import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import CodeBlock from '../CodeBlock/CodeBlock';
import { Subheader } from 'react-native-paper/lib/typescript/components/List/List';

const BitManipulation = () => {
    const { theme } = useTheme();

    const examples = [
        {
            title: "Check if a number is even or odd",
            code: `const isEven = (num) => (num & 1) === 0;\nconsole.log(isEven(4)); // true`,
        },
        {
            title: "Set the ith bit of a number",
            code: `const setBit = (num, i) => num | (1 << i);\nconsole.log(setBit(5, 1)); // 7`,
        },

    ]

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.heading, { color: theme.colors.text }]}>
                Bit Manipulation
            </Text>
            <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
                * Bit Manipulation is a technique used to perform operations on individual bits of a number.{'\n'}
                * It is a low-level operation that can be used to optimize algorithms and data structures.{'\n'}
                * it is faster and checks the code in native binary structure.
            </Text>

            <Text style={[styles.Subheader, { color: theme.colors.description }]}>
                Examples for understandning Bit Manipulation.
            </Text>
            {examples.map((examples, index) => (
                <View key={index} style={styles.exampleContainer}>
                    <Text style={[styles.exampleTitle, { color: theme.colors.text }]}>
                        {examples.title}
                    </Text>
                    <CodeBlock code={examples.code} />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    Subheader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
    },
    exampleContainer: {
        marginBottom: 25,
    },
    exampleTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    }
}
)

export default BitManipulation
