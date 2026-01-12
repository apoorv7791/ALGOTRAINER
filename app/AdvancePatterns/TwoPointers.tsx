import React, { useMemo } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useTheme } from '@/app/Themes/ThemeContext';

const TwoPointers = () => {
    const { theme } = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <ScrollView style={[styles.container]} contentContainerStyle={{ paddingBottom: 50 }}>
            <Text style={styles.heading}>Two Pointers Technique</Text>

            <Text style={styles.paragraph}>
                The <Text style={styles.bold}>Two Pointers</Text> technique is a common pattern used
                to solve problems involving arrays or linked lists where two indices (or pointers)
                move through the data structure to find a condition or relationship between elements.
            </Text>

            <Text style={styles.subheading}>🎯 When to Use</Text>
            <Text style={styles.paragraph}>
                - When the array is sorted (helps in optimization)
                {"\n"}- When you need to find pairs or subarrays that satisfy a condition
                {"\n"}- When you want to reduce O(n²) nested loops into O(n)
            </Text>

            <Text style={styles.subheading}>🧠 Common Examples</Text>
            <Text style={styles.paragraph}>
                1. Pair sum in a sorted array (like Two Sum)
                {"\n"}2. Removing duplicates from a sorted array
                {"\n"}3. Merging two sorted arrays
                {"\n"}4. Moving zeros to the end
                {"\n"}5. Checking if a string is a palindrome
            </Text>

            <Text style={styles.subheading}>💡 Example: Two Sum (Sorted Array)</Text>
            <View style={styles.codeBox}>
                <CodeBlock
                    code={`FUNCTION twoSum(nums, target):
    left ← 0
    right ← length(nums) - 1

    WHILE left < right:
        sum ← nums[left] + nums[right]

        IF sum == target:
            RETURN [left, right]
        ELSE IF sum < target:
            left ← left + 1
        ELSE:
            right ← right - 1

    RETURN [-1, -1]
`}
                />
            </View>

            <Text style={styles.paragraph}>
                Here, we move the pointers intelligently instead of checking all pairs.
                The left pointer moves forward if the sum is too small, and the right pointer
                moves backward if the sum is too large.
            </Text>

            <Text style={styles.subheading}>⏱️ Time Complexity</Text>
            <Text style={styles.paragraph}>O(n)</Text>

            <Text style={styles.subheading}>🧩 Space Complexity</Text>
            <Text style={styles.paragraph}>O(1)</Text>

            <Text style={styles.subheading}> Tip </Text>
            <Text style={styles.paragraph}>
                - Use two pointers to find pairs or subarrays that satisfy a condition.{"\n"}
                - Use two pointers to merge two sorted arrays.{"\n"}
            </Text>
        </ScrollView>
    );
};

const createStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: theme.colors.background,
        },
        heading: {
            fontSize: 26,
            fontWeight: '700',
            color: theme.colors.text,
            marginBottom: 10,
            textAlign: 'center',
        },
        subheading: {
            fontSize: 20,
            fontWeight: '600',
            color: theme.colors.description,
            marginTop: 16,
            marginBottom: 6,
        },
        paragraph: {
            fontSize: 16,
            color: theme.colors.textSecondary,
            lineHeight: 24,
        },
        bold: {
            fontWeight: '600',
            color: theme.colors.text,
        },
        codeBox: {
            backgroundColor: theme.colors.surface,
            padding: 12,
            borderRadius: 8,
            marginVertical: 10,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: theme.colors.border,
        },
        code: {
            color: theme.colors.onSurface,
            fontFamily: 'monospace',
            fontSize: 14,
        },
        note: {
            fontStyle: 'italic',
            marginTop: -1,
            color: theme.colors.textSecondary,
        },
    });

export default TwoPointers;
