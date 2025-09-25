import React from 'react';
import TopicTemplate from './TopicTemplate';
import { StyleSheet } from 'react-native';

const Arrays: React.FC = () => {
    const sections = [
        {
            title: 'Overview',
            content: 'Arrays are a basic linear data structure for storing elements of the same type in contiguous memory locations. They provide O(1) access time for reading and writing elements using their index.',
            code: '// Declaration in TypeScript\nconst numbers: number[] = [1, 2, 3, 4];\nconst names: string[] = ["Alice", "Bob", "Charlie"];'
        },
        {
            title: 'Key Operations',
            content: 'Common array operations and their time complexities:',
            items: [
                'Access: O(1) - Access any element by its index',
                'Search: O(n) - Linear search through elements',
                'Insertion: O(n) - May require shifting elements',
                'Deletion: O(n) - May require shifting elements'
            ]
        },
        {
            title: 'Common Methods',
            items: [
                'push() - Adds elements to the end',
                'pop() - Removes from the end',
                'shift() - Removes from the beginning',
                'unshift() - Adds to the beginning',
                'slice() - Returns a portion of the array',
                'map() - Creates a new array with transformed elements',
                'filter() - Creates a new array with elements that pass a test',
                'reduce() - Reduces the array to a single value'
            ]
        },
        {
            title: 'Example: Finding Maximum',
            content: 'Find the maximum element in an array:',
            code: 'function findMax(numbers: number[]): number {\n  let max = -Infinity;\n  for (const num of numbers) {\n    if (num > max) max = num;\n  }\n  return max;\n}\n\n// Usage:\nconst numbers = [3, 1, 4, 1, 5, 9, 2, 6];\nconsole.log(findMax(numbers)); // Output: 9'
        }
    ];


    return (

        <TopicTemplate title="Arrays" sections={sections} />);
};

export default Arrays;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#2c3e50',
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 12,
        color: '#34495e',
    },
    codeBlock: {
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 8,
    },
    codeText: {
        fontSize: 16,
        color: '#333',
    },
    list: {
        marginLeft: 8,
        marginBottom: 12,
    },
    listItem: {
        fontSize: 15,
        lineHeight: 22,
        color: '#34495e',
        marginBottom: 4,
    },

});
