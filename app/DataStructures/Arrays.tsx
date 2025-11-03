import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const Arrays = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Arrays</Text>

            {/* Array Basics */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Definition of Arrays</Text>
                <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                    • An array is a collection of elements, each identified by an index or key.{"\n"}
                    • Elements are stored in contiguous memory locations.{"\n"}
                    • Arrays can store multiple values of the same data type.
                </Text>

                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Array Basics</Text>
                <CodeBlock
                    code={`// Declaring and initializing an array
int[] arr = {10, 20, 30, 40, 50};

// Accessing elements
System.out.println(arr[0]);  // Output: 10
System.out.println(arr[arr.length - 1]); // Output: 50

// Updating elements
arr[2] = 99;  // arr becomes {10, 20, 99, 40, 50}

// Traversing array
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i] + " ");
}`}
                    language="java"
                />
            </View>

            {/* Insert Element */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Insert Element</Text>
                <CodeBlock
                    code={`// Insert value 25 at index 2
int[] arr = {10, 20, 30, 40, 50};
int position = 2;
int value = 25;

int[] newArr = new int[arr.length + 1];

for (int i = 0, j = 0; i < newArr.length; i++) {
    if (i == position) {
        newArr[i] = value;
    } else {
        newArr[i] = arr[j++];
    }
}

// newArr: {10, 20, 25, 30, 40, 50}`}
                    language="java"
                />
            </View>

            {/* Delete Element */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Delete Element</Text>
                <CodeBlock
                    code={`// Delete element at index 3
int[] arr = {10, 20, 30, 40, 50};
int position = 3;

int[] newArr = new int[arr.length - 1];
for (int i = 0, j = 0; i < arr.length; i++) {
    if (i != position) {
        newArr[j++] = arr[i];
    }
}

// newArr: {10, 20, 30, 50}`}
                    language="java"
                />
            </View>

            {/* Search Element */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Search Element</Text>
                <CodeBlock
                    code={`int[] arr = {10, 20, 30, 40, 50};
int key = 30;
boolean found = false;

for (int i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
        System.out.println("Element found at index: " + i);
        found = true;
        break;
    }
}
if (!found) System.out.println("Element not found.");`}
                    language="java"
                />
            </View>

            {/* Find Max & Min */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Find Maximum & Minimum</Text>
                <CodeBlock
                    code={`int[] arr = {5, 9, 2, 10, 3};
int max = arr[0];
int min = arr[0];

for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}

System.out.println("Max: " + max);
System.out.println("Min: " + min);`}
                    language="java"
                />
                {/* Explanation of the code and the Concept */}
                <View style={styles.section}>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>How it works</Text>
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        . We declare an array of integers and initialize two variables, max and min, with the first element of the array.{"\n"}
                        . We iterate through the array starting from the second element. For each element, we compare it with the current max and min values.{"\n"}
                        . If the current element is greater than max, we update max. If it is less than min, we update min.{"\n"}
                        . we declare an array with a bracket like [] and access elements using their index. The length property gives the size of the array.{"\n"}
                        . arr[0] means that we are accessing the first element of the array arr.{"\n"}
                    </Text>
                </View>
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
    },
    description: {
        fontSize: 14,
        marginBottom: 8,
    },
    bulletPoint: {
        fontSize: 15,
        marginBottom: 12,
    },
});

export default Arrays;
