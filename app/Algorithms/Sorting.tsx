import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRouter } from 'expo-router';

const Sorting = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // 🔓 Allow rotation both ways
        ScreenOrientation.unlockAsync();

        // 📱 Detect orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        // 🧹 Cleanup on unmount
        return () => subscription?.remove();
    }, []);

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: isLandscape ? 10 : 20 }}
        >
            {/* 🔹 Header with icon */}
            <View style={styles.headerRow}>
                <MaterialCommunityIcons
                    name="sort-variant"
                    size={isLandscape ? 22 : 26}
                    color={theme.colors.text}
                    style={styles.headerIcon}
                />
                <Text
                    style={[
                        styles.header,
                        { color: theme.colors.text, fontSize: isLandscape ? 20 : 22 },
                    ]}
                >
                    Sorting Algorithms
                </Text>

            </View>

            {/* 🔹 Bubble Sort */}
            <View style={styles.section}>
                <Text
                    style={[
                        styles.subHeader,
                        { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                    ]}
                >
                    1️⃣ Bubble Sort
                </Text>
                <CodeBlock
                    code={`public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++)
            for (int j = 0; j < arr.length - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 3};
        bubbleSort(arr);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={isLandscape ? 10 : 12}
                />
                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Repeatedly compares and swaps adjacent elements.
                    {"\n"}🔹 Time Complexity: O(n²)
                    {"\n"}🔹 Space Complexity: O(1)
                </Text>
            </View>

            {/* 🔹 Selection Sort */}
            <View style={styles.section}>
                <Text
                    style={[
                        styles.subHeader,
                        { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                    ]}
                >
                    2️⃣ Selection Sort
                </Text>
                <CodeBlock
                    code={`public class SelectionSort {
    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++)
                if (arr[j] < arr[minIndex])
                    minIndex = j;

            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={isLandscape ? 10 : 12}
                />

                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Finds the minimum element and places it in correct position.
                    {"\n"}🔹 Time Complexity: O(n²)
                    {"\n"}🔹 Space Complexity: O(1)
                </Text>
            </View>
            {/* 🔹 Insertion Sort */}
            <View style={styles.section}>
                <Text
                    style={[
                        styles.subHeader,
                        { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                    ]}
                >
                    3️⃣ Insertion Sort
                </Text>
                <CodeBlock
                    code={`public class InsertionSort {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={isLandscape ? 10 : 12}
                />
            </View>
            <Text
                style={[
                    styles.description,
                    { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                ]}
            >
                🔹 Inserts each element in its correct position.
                {"\n"}🔹 Time Complexity: O(n²)
                {"\n"}🔹 Space Complexity: O(1)
            </Text>

            {/* 🔹 Merge Sort */}
            <View style={styles.section}>
                <Text
                    style={[
                        styles.subHeader,
                        { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                    ]}
                >
                    3️⃣ Merge Sort
                </Text>
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
        int[] L = Arrays.copyOfRange(arr, left, mid + 1);
        int[] R = Arrays.copyOfRange(arr, mid + 1, right + 1);
        int i = 0, j = 0, k = left;
        while (i < L.length && j < R.length)
            arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
        while (i < L.length) arr[k++] = L[i++];
        while (j < R.length) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        mergeSort(arr, 0, arr.length - 1);
        for (int num : arr)
            System.out.print(num + " ");
    }
}`}
                    language="java"
                    fontSize={isLandscape ? 10 : 12}
                />
                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Divide and Conquer algorithm.
                    {"\n"}🔹 Time Complexity: O(n log n)
                    {"\n"}🔹 Space Complexity: O(n)
                </Text>
                <TouchableOpacity
                    style={styles.visualizeBtn}
                    onPress={() => router.push('/AlgoVisualizer/SortingVisual')}
                >
                    <Text style={styles.btnText}>Visualize All Sorting Algorithms</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    headerIcon: { marginRight: 8 },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    section: {
        padding: 14,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        marginTop: 10,
        lineHeight: 20,
    },
    visualizeBtn: {
        backgroundColor: '#34D399',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default Sorting;
