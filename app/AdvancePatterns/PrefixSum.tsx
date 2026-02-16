import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';

const PrefixSum = () => {
    const { theme } = useTheme();
    const content = [
        {
            type: 'heading',
            text: 'Prefix Sum Technique',
        },
        {
            type: 'paragraph',
            text: 'The Prefix Sum technique is used to calculate the sum of elements in a range efficiently. Instead of computing sums repeatedly, we precompute cumulative sums so that range queries can be answered in O(1) time.',
        },
        {
            type: 'subheading',
            text: 'Why Use Prefix Sum?',
        },
        {
            type: 'paragraph',
            text: 'When we need to find multiple range sums in an array, recalculating each sum from scratch takes O(n) time for every query. Prefix sums let us answer each query in constant time, after an O(n) preprocessing step.',
        },
        {
            type: 'subheading',
            text: 'Steps to perform prefix sum Technique',
        },
        {
            type: 'list',
            items: [
                'Create a new array called `prefix`.',
                'Set `prefix[0] = arr[0]`.',
                'For each index `i`, store the sum of all previous elements: `prefix[i] = prefix[i - 1] + arr[i]`.',
                'To get the sum of any range [l, r], use: `prefix[r] - prefix[l - 1]` if l > 0, else `prefix[r]`.',
            ],
        },
        {
            type: 'subheading',
            text: 'Code Example of the technique',
        },
        {
            type: 'code',
            code: `function prefixSum(arr):
    n = length of arr
    prefix[0] = arr[0]
    for (let i = 1; i < n; i++):
        prefix[i] = prefix[i-1] + arr[i]
    return prefix

// To get sum of any subarray from l to r:
subarray_sum = prefix[r] - prefix[l - 1]  (if l > 0)
else subarray_sum = prefix[r]`,
        },
        {
            type: 'paragraph',
            text: '• Preprocessing time: O(n)\n• Query time: O(1)\n• Ideal for: Range sum, difference arrays, and 2D prefix sum problems.\n• Common in problems involving subarray sums or cumulative computations.',
        },
    ];

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case 'heading':
                return <Text style={[styles.heading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'subheading':
                return <Text style={[styles.subheading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'paragraph':
                return <Text style={[styles.paragraph, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'list':
                return item.items.map((listItem: string, index: number) => (
                    <Text key={index} style={[styles.listItem, { color: theme.colors.text }]}>
                        • {listItem}
                    </Text>
                ));
            case 'code':
                return (
                    <View style={[styles.codeContainer, { backgroundColor: theme.colors.surface }]}>
                        <Text
                            style={{
                                fontFamily: 'monospace',  // fixes alignment
                                fontSize: 13,             // smaller, readable on mobile
                                lineHeight: 18,           // proper spacing
                                color: theme.colors.text, // match theme
                            }}
                        >
                            {item.code}
                        </Text>
                    </View>
                );
            default:
                return null;
        }
    }
    return (
        <View style={{ backgroundColor: theme.colors.background }}>
            <FlatList
                data={content}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.container}
            />
        </View>
    );
}

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
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
    codeContainer: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
    },
});

export default PrefixSum;
