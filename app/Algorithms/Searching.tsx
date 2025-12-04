import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Searching = () => {
    const { theme } = useTheme();
    const router = useRouter();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
        >
            <Text style={[styles.header, { color: theme.colors.text }]}>🔍 Searching Algorithms</Text>

            {/* Linear Search */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>1️⃣ Linear Search</Text>
                <CodeBlock
                    code={`public class LinearSearch {
    public static int search(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Element found
            }
        }
        return -1; // Element not found
    }

    public static void main(String[] args) {
        int[] arr = {5, 8, 2, 7, 3};
        int target = 7;
        int result = search(arr, target);
        if (result != -1)
            System.out.println("Element found at index: " + result);
        else
            System.out.println("Element not found.");
    }
}`}
                    language="java"
                    fontSize={12} // 🔽 smaller font for readability
                />
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    🔹 Linear Search goes through each element one by one until it finds the target.
                    {'\n'}🔹 Time Complexity: O(n)
                    {'\n'}🔹 Space Complexity: O(1)
                </Text>
            </View>

            {/* Binary Search */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>2️⃣ Binary Search</Text>
                <CodeBlock
                    code={`public class BinarySearch {
    public static int search(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target)
                return mid;
            else if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1; // Element not found
    }

    public static void main(String[] args) {
        int[] arr = {2, 4, 6, 8, 10, 12, 14};
        int target = 10;
        int result = search(arr, target);
        if (result != -1)
            System.out.println("Element found at index: " + result);
        else
            System.out.println("Element not found.");
    }
}`}
                    language="java"
                    fontSize={12}
                />
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    🔹 Binary Search works only on sorted arrays.
                    {'\n'}🔹 It repeatedly divides the array into halves.
                    {'\n'}🔹 Time Complexity: O(log n)
                    {'\n'}🔹 Space Complexity: O(1)
                </Text>
                <TouchableOpacity
                    style={styles.visualizeBtn}
                    onPress={() => router.push('/AlgoVisualizer/SearchVisual')}
                >
                    <Text style={styles.btnText}>Visualize All Sorting Algorithms</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 20, // 🔽 slightly smaller for balance
        fontWeight: '700',
        marginVertical: 20,
        textAlign: 'center',
    },
    section: {
        padding: 12,
        marginHorizontal: 14,
        marginVertical: 8,
        borderRadius: 10,
        elevation: 2,
    },
    subHeader: {
        fontSize: 15, // 🔽 smaller subheader
        fontWeight: '600',
        marginBottom: 6,
    },
    description: {
        marginTop: 8,
        fontSize: 13, // 🔽 smaller text for compactness
        lineHeight: 19,
    },
    visualizeBtn: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Searching;
