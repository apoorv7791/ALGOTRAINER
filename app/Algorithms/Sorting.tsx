import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Sorting = () => {
    const { theme } = useTheme();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            {/* Header  with icon */}
            <View style={styles.headerRow}>
                <MaterialCommunityIcons
                    name="sort-variant"  // similar to the icon in your screenshot
                    size={26}
                    color={theme.colors.text}
                    style={styles.headerIcon}
                />
                <Text style={[styles.header, { color: theme.colors.text }]}>Sorting Algorithms</Text>
            </View>
            {/* 🔹 Bubble Sort */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>1️⃣ Bubble Sort</Text>
                <CodeBlock
                    code={`public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 3};
        bubbleSort(arr);
        System.out.print("Sorted Array: ");
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={12}
                />
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    🔹 Repeatedly compares and swaps adjacent elements.
                    {"\n"}🔹 Time Complexity: O(n²)
                    {"\n"}🔹 Space Complexity: O(1)
                </Text>
            </View>

            {/* 🔹 Selection Sort */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>2️⃣ Selection Sort</Text>
                <CodeBlock
                    code={`public class SelectionSort {
    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex])
                    minIndex = j;
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        System.out.print("Sorted Array: ");
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={12}
                />
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    🔹 Finds the minimum element and places it in correct position.
                    {"\n"}🔹 Time Complexity: O(n²)
                    {"\n"}🔹 Space Complexity: O(1)
                </Text>
            </View>

            {/* 🔹 Merge Sort */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>3️⃣ Merge Sort</Text>
                <CodeBlock
                    code={`public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        mergeSort(arr, 0, arr.length - 1);
        System.out.print("Sorted Array: ");
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={12}
                />
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    🔹 Divide and Conquer algorithm.
                    {"\n"}🔹 Time Complexity: O(n log n)
                    {"\n"}🔹 Space Complexity: O(n)
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginRight: 8,
    },
    headerIcon: {
        fontSize: 22,
        marginRight: 8,
    },
    section: {
        padding: 14,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        lineHeight: 20,
    },
});

export default Sorting;
