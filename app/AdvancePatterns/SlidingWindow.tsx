import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import CodeBlock from '../CodeBlock/CodeBlock';

const SlidingWindow = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={styles.contentContainer}


        >
            <Text style={[styles.heading, { color: theme.colors.text }]}>Sliding Window Technique</Text>

            <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>
                The <Text style={styles.bold}>Sliding Window Technique</Text>{' '}
                is used to perform operations on a subset (window) of a data strcuture within an array or a String.
                Instead of recomputing results from scratch for each window , we "slide" the window and reuse previous computation which increases performances.
                Thus improving Time in linear and space remains constant.
            </Text>

            <Text style={[styles.subheading, { color: theme.colors.description }]}>
                When to use:
            </Text>
            <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>
                - When you need to find subarrays or substrings that satisfy a condition.
                {"\n"}- When you want to reduce O(n²) nested loops into O(n).
            </Text>
            <Text style={[styles.subheading, { color: theme.colors.description }]}>🧠 Common Examples</Text>
            <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>
                1. Maximum sum subarray of size K
                {'\n'}2. Longest substring without repeating characters
                {'\n'}3. Smallest subarray with a sum greater than or equal to target
                {'\n'}4. Counting anagrams in a string
            </Text>
            <Text style={[styles.subheading, { color: theme.colors.description }]}>
                💡 Example: Maximum Sum Subarray of Size K
            </Text>
            <View style={styles.container}>
                <CodeBlock
                    code={`FUNCTION maxSumSubarray(nums, k):
    maxSum ← 0
    windowSum ← 0
    start ← 0

    FOR end FROM 0 TO length(nums) - 1:
        windowSum ← windowSum + nums[end]

        IF end ≥ k - 1:
            maxSum ← MAX(maxSum, windowSum)
            windowSum ← windowSum - nums[start]
            start ← start + 1

    RETURN maxSum`}
                />

                <Text style={[styles.paragraph, { color: theme.colors.textSecondary }]}>
                    Here, the window expands by adding a new element on the right and shrinks by removing
                    the leftmost element once the window size exceeds{' '}
                    <Text style={[styles.bold, { color: theme.colors.text }]}>k</Text>. This keeps the
                    time complexity linear.
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.description }]}>⏱️ Time Complexity: O(n)</Text>
                <Text style={[styles.subheading, { color: theme.colors.description }]}>🧩 Space Complexity: O(1)</Text>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contentContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
    bold: {
        fontWeight: '600',
    },
    codeBox: {
        fontSize: 13,
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
    },
    note: {
        fontStyle: 'italic',
        marginTop: 12,
    },
})

export default SlidingWindow;
