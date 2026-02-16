import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
const BitManipulation = () => {
    const { theme } = useTheme();

    const content = [
        {
            type: 'heading',
            text: 'Bit Manipulation',
        },
        {
            type: 'paragraph',
            text: `Bit Manipulation is a technique used to perform operations on individual bits of a number.
- It is a low-level operation that can be used to optimize algorithms and data structures.
- It is faster and works directly on binary representation.`,
        },
        {
            type: 'subheading',
            text: 'Examples for understanding Bit Manipulation',
        },
        {
            type: 'example',
            title: 'Check if a number is even or odd',
            code: `const isEven = (num) => (num & 1) === 0;
console.log(isEven(4)); // true`,
        },
        {
            type: 'example',
            title: 'Set the ith bit of a number',
            code: `const setBit = (num, i) => num | (1 << i);
console.log(setBit(5, 1)); // 7`,
        },
        {
            type: 'example',
            title: 'Power of 2 check',
            code: `const isPowerOfTwo = (num) => num > 0 && (num & (num - 1)) === 0;
console.log(isPowerOfTwo(16)); // true`,
        }
    ];

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case 'heading':
                return <Text style={[styles.heading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'subheading':
                return <Text style={[styles.subheading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'paragraph':
                return <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>{item.text}</Text>;
            case 'example':
                return (
                    <View style={styles.exampleContainer}>
                        <Text style={[styles.exampleTitle, { color: theme.colors.text }]}>{item.title}</Text>
                        <ScrollView horizontal style={{ marginVertical: 5 }}>
                            <Text
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: 14,
                                    lineHeight: 20,
                                    color: theme.colors.text,
                                }}
                            >
                                {item.code}
                            </Text>
                        </ScrollView>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <FlatList
                data={content}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
    exampleContainer: {
        marginBottom: 25,
    },
    exampleTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
});

export default BitManipulation;
