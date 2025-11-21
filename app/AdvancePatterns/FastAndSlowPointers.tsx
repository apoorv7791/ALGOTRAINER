import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import CodeBlock from '../CodeBlock/CodeBlock';

const FastAndSlowPointers = () => {
    const { theme } = useTheme();

    const examples = [
        {
            title: "Detect a cycle in a linked list",
            code: `function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`,
        },
        {
            title: "Find the middle of a linked list",
            code: `function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow; // middle node
}`,
        },
        {
            title: "Find the duplicate number in an array",
            code: `function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Step 1: Detect cycle
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Step 2: Find entry point of cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}

// Example:
console.log(findDuplicate([1,3,4,2,2])); // 2`,
        },
    ];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.heading, { color: theme.colors.text }]}>
                Fast and Slow Pointers
            </Text>
            <Text style={[styles.subheader, { color: theme.colors.description }]}>
                * Fast and Slow Pointers are two pointers used to traverse through a data structure.{'\n'}
                * They are mainly used to detect cycles and find the middle element of a linked list or array.{'\n'}
                * The technique is fast and efficient and reducing the space to O(1).
            </Text>
            <Text style={[styles.subheader, { color: theme.colors.description }]}>
                * Fast pointer moves two steps at a time.{'\n'}
                * Slow pointer moves one step at a time.{'\n'}
                * If there is a cycle, the fast pointer will eventually catch up with the slow pointer.

            </Text>
            {examples.map((example, index) => (
                <View key={index} style={styles.exampleContainer}>
                    <Text style={[styles.exampleTitle, { color: theme.colors.text }]}>
                        {example.title}
                    </Text>
                    <CodeBlock code={example.code} />
                </View>
            ))}
        </ScrollView>
    );
};

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
    subheader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    exampleContainer: {
        marginBottom: 25,
    },
    exampleTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});

export default FastAndSlowPointers;
