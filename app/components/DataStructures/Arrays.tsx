import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const Arrays = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Arrays</Text>

            {/* Basic Array Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Basic Array Operations</Text>
                <CodeBlock
                    code={`// Creating an array
String[] fruits = {"apple", "banana", "orange"};

// Accessing elements
System.out.println(fruits[0]);  // Output: apple

// Adding elements (using ArrayList for dynamic operations)
ArrayList<String> fruitsList = new ArrayList<>(Arrays.asList(fruits));
fruitsList.add("mango");         // Add to end
fruitsList.add(0, "grape");      // Add to start

// Removing elements
fruitsList.remove(fruitsList.size() - 1);  // Remove from end
fruitsList.remove(0);                      // Remove from start`}
                    language="java"
                />
            </View>

            {/* Array Methods */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Common Array Methods</Text>
                <CodeBlock
                    code={`// Array methods example
int[] numbers = {1, 2, 3, 4, 5};

// Map - Create new array with transformed elements
int[] doubled = Arrays.stream(numbers)
    .map(num -> num * 2)
    .toArray();
// doubled: [2, 4, 6, 8, 10]

// Filter - Create new array with filtered elements
int[] evenNumbers = Arrays.stream(numbers)
    .filter(num -> num % 2 == 0)
    .toArray();
// evenNumbers: [2, 4]

int[] oddNumbers = Arrays.stream(numbers)
    .filter(num -> num % 2 != 0)
    .toArray();

// Reduce - Reduce array to single value
int sum = Arrays.stream(numbers)
    .reduce(0, (acc, curr) -> acc + curr);
// sum: 15`}
                    language="java"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    section: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    }
});

export default Arrays;
