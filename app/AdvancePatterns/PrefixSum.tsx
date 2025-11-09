import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import CodeBlock from '../CodeBlock/CodeBlock';

const PrefixSum = () => {
    const { theme } = useTheme();

    const pseudocode = `function prefixSum(arr):
    n = length of arr
    prefix[0] = arr[0]
    for i from 1 to n-1:
        prefix[i] = prefix[i-1] + arr[i]
    return prefix

// To get sum of any subarray from l to r:
subarray_sum = prefix[r] - prefix[l - 1]  (if l > 0)
else subarray_sum = prefix[r]`


    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={[styles.heading, { color: theme.colors.text }]}>
                    Prefix sum Technique.
                </Text>
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    The **Prefix Sum** technique is used to calculate the sum of elements
                    in a range efficiently. Instead of computing sums repeatedly,
                    we precompute cumulative sums so that range queries can be answered in **O(1)** time.
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    Why Use Prefix Sum?
                </Text>
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    When we need to find multiple range sums in an array, recalculating
                    each sum from scratch takes **O(n)** time for every query.{"\n"}
                    Prefix sums let us answer each query in **constant time**, after an **O(n)** preprocessing step.
                </Text>
                <Text style={[styles.description, { color: theme.colors.text }]}>Steps to perform prefix sum Technique</Text>
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    1. Create a new array called `prefix`.{"\n"}
                    2. Set `prefix[0] = arr[0]`.{"\n"}
                    3. For each index `i`, store the sum of all previous elements:{"\n"}
                    {"   "}→ `prefix[i] = prefix[i - 1] + arr[i]`{"\n"}
                    4. To get the sum of any range `[l, r]`, use:{"\n"}
                    {"   "}→ `prefix[r] - prefix[l - 1]
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    Code Example of the technique
                </Text>
                <CodeBlock code={pseudocode.trim()} />

                <Text style={[styles.description, { color: theme.colors.text }]}>
                    • Preprocessing time: **O(n)**{"\n"}
                    • Query time: **O(1)**{"\n"}
                    • Ideal for: Range sum, difference arrays, and 2D prefix sum problems.{"\n"}
                    • Common in problems involving subarray sums or cumulative computations.
                </Text>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
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
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
})

export default PrefixSum;
