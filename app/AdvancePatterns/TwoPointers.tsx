import React, { useMemo } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useTheme } from '@/app/Themes/ThemeContext';
import Animated, { FadeInUp } from 'react-native-reanimated';

const TwoPointers = () => {
    const { theme } = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    // Content array
    const content = [
        { type: 'heading', text: 'Two Pointers Technique' },
        {
            type: 'paragraph',
            text: 'The Two Pointers technique is a common pattern used to solve problems involving arrays or linked lists where two indices (or pointers) move through the data structure to find a condition or relationship between elements.'
        },
        { type: 'subheading', text: '🎯 When to Use' },
        {
            type: 'list',
            items: [
                'When the array is sorted (helps in optimization)',
                'When you need to find pairs or subarrays that satisfy a condition',
                'When you want to reduce O(n²) nested loops into O(n)'
            ]
        },
        { type: 'subheading', text: '🧠 Common Examples' },
        {
            type: 'list',
            items: [
                'Pair sum in a sorted array (like Two Sum)',
                'Removing duplicates from a sorted array',
                'Merging two sorted arrays',
                'Moving zeros to the end',
                'Checking if a string is a palindrome'
            ]
        },
        { type: 'subheading', text: '💡 Example: Two Sum (Sorted Array)' },
        {
            type: 'code',
            code: `FUNCTION twoSum(nums, target):
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

    RETURN [-1, -1]`
        },
        {
            type: 'paragraph',
            text: 'Here, we move the pointers intelligently instead of checking all pairs. The left pointer moves forward if the sum is too small, and the right pointer moves backward if the sum is too large.'
        },
        { type: 'subheading', text: '⏱️ Time Complexity' },
        { type: 'paragraph', text: 'O(n)' },
        { type: 'subheading', text: '🧩 Space Complexity' },
        { type: 'paragraph', text: 'O(1)' },
        { type: 'subheading', text: 'Tip' },
        {
            type: 'list',
            items: [
                'Use two pointers to find pairs or subarrays that satisfy a condition.',
                'Use two pointers to merge two sorted arrays.'
            ]
        }
    ];

    // Render each item based on type
    const renderItem = ({ item }: { item: any }) => {
        let content;
        switch (item.type) {
            case 'heading':
                content = <Text style={styles.heading}>{item.text}</Text>;
                break;
            case 'subheading':
                content = <Text style={styles.subheading}>{item.text}</Text>;
                break;
            case 'paragraph':
                content = <Text style={styles.paragraph}>{item.text}</Text>;
                break;
            case 'list':
                content = item.items.map((line: string, index: number) => (
                    <Text key={index} style={styles.paragraph}>
                        - {line}
                    </Text>
                ));
                break;
            case 'code':
                content = <CodeBlock code={item.code} />;
                break;
            default:
                return null;
        }

        return <Animated.View entering={FadeInUp.duration(400)}>{content}</Animated.View>;
    };

    return (
        <View style={{ backgroundColor: theme.colors.background }}>
            <FlatList
                data={content}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ padding: 16, paddingBottom: 50 }}
            />
        </View>
    );
};

const createStyles = (theme: any) =>
    StyleSheet.create({
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
