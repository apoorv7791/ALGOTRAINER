import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
const SlidingWindow = () => {
    const { theme } = useTheme();

    const context = [
        {
            type: 'heading',
            text: 'Sliding Window Technique',
        },
        {
            type: 'paragraph',
            text: 'The Sliding Window Technique is used to perform operations on a subset (window) of a data structure within an array or a string. Instead of recomputing results from scratch for each window, we "slide" the window and reuse previous computation which increases performance. Time is linear and space remains constant.',
        },
        {
            type: 'subheading',
            text: 'When to use:',
        },
        {
            type: 'list',
            items: [
                'When you need to find subarrays or substrings that satisfy a condition.',
                'When you want to reduce O(n²) nested loops into O(n).',
            ],
        },
        {
            type: 'subheading',
            text: '🧠 Common Examples',
        },
        {
            type: 'list',
            items: [
                'Maximum sum subarray of size K',
                'Longest substring without repeating characters',
                'Smallest subarray with a sum greater than or equal to target',
                'Counting anagrams in a string',
            ],
        },
        {
            type: 'code',
            code: `FUNCTION maxSumSubarray(nums, k):
    maxSum ← 0
    windowSum ← 0
    start ← 0

    FOR end FROM 0 TO length(nums) - 1:
        windowSum ← windowSum + nums[end]   
        IF end ≥ k - 1:
            maxSum ← MAX(maxSum, windowSum)
            windowSum ← windowSum - nums[start]
            start ← start + 1

    RETURN maxSum`,
        },
        {
            type: 'paragraph',
            text: 'Here, the window expands by adding a new element on the right and shrinks by removing the leftmost element once the window size exceeds k. This keeps the time complexity linear.',
        },
        {
            type: 'subheading',
            text: '⏱️ Time Complexity: O(n)',
        },
        {
            type: 'subheading',
            text: '🧩 Space Complexity: O(1)',
        },
    ];

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case 'heading':
                return <Text style={[styles.heading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'subheading':
                return <Text style={[styles.subheading, { color: theme.colors.description }]}>{item.text}</Text>;
            case 'paragraph':
                return <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>{item.text}</Text>;
            case 'list':
                return item.items.map((line: string, index: number) => (
                    <Text key={index} style={[styles.paragraph, { color: theme.colors.textSecondary }]}>
                        - {line}
                    </Text>
                ));
            case 'code':
                return (
                    <ScrollView horizontal style={{ marginVertical: 10 }}>
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
                    </ScrollView>
                )
            default:
                return null;
        }
    }

    return (
        <View style={{ backgroundColor: theme.colors.background }}>
            <FlatList
                data={context}
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
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 6,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
    },
})

export default SlidingWindow;
