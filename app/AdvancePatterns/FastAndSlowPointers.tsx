import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import CodeBlock from '../CodeBlock/CodeBlock';

const FastAndSlowPointers = () => {
    const { theme } = useTheme();

    const content = [
        {
            type: 'heading',
            text: 'Fast and Slow Pointers',
        },
        {
            type: 'paragraph',
            text: `Fast and Slow Pointers are two pointers used to traverse through a data structure.
- They are mainly used to detect cycles and find the middle element of a linked list or array.
- The technique is fast and efficient and reduces space complexity to O(1).
- Fast pointer moves two steps at a time.
- Slow pointer moves one step at a time.
- If there is a cycle, the fast pointer will eventually catch up with the slow pointer.`,
        },
        {
            type: 'subheading',
            text: 'Examples',
        },
        {
            type: 'example',
            title: 'Detect a cycle in a linked list',
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
            type: 'example',
            title: 'Find the middle of a linked list',
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
            type: 'example',
            title: 'Find the duplicate number in an array',
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
        marginTop: 20,
        marginBottom: 10,
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

export default FastAndSlowPointers;
