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

    const [showBubble, setShowBubble] = useState(false);
    const [showSelection, setShowSelection] = useState(false);
    const [showInsertion, setShowInsertion] = useState(false);
    const [showMerge, setShowMerge] = useState(false);

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });
        return () => subscription?.remove();
    }, []);

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: isLandscape ? 10 : 20 }}
        >
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

            {/* Bubble Sort */}
            <View style={styles.section}>
                <View style={styles.sectionHeaderRow}>
                    <Text
                        style={[
                            styles.subHeader,
                            { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                        ]}
                    >
                        1️⃣ Bubble Sort
                    </Text>
                    <TouchableOpacity onPress={() => setShowBubble(v => !v)} style={styles.toggleBtn}>
                        <MaterialCommunityIcons name={showBubble ? 'chevron-up' : 'chevron-down'} size={18} color={theme.colors.text} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Swap adjacent elements repeatedly.  •  O(n²) time • O(1) space
                </Text>

                {showBubble && (
                    <CodeBlock
                        code={`public class BubbleSort {\n    public static void bubbleSort(int[] arr) {\n        for (int i = 0; i < arr.length - 1; i++)\n            for (int j = 0; j < arr.length - i - 1; j++)\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n    }\n}`}
                        language="java"
                        fontSize={isLandscape ? 10 : 12}
                    />
                )}
            </View>

            {/* Selection Sort */}
            <View style={styles.section}>
                <View style={styles.sectionHeaderRow}>
                    <Text
                        style={[
                            styles.subHeader,
                            { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                        ]}
                    >
                        2️⃣ Selection Sort
                    </Text>
                    <TouchableOpacity onPress={() => setShowSelection(v => !v)} style={styles.toggleBtn}>
                        <MaterialCommunityIcons name={showSelection ? 'chevron-up' : 'chevron-down'} size={18} color={theme.colors.text} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Pick min and put it at correct position.  •  O(n²) time • O(1) space
                </Text>

                {showSelection && (
                    <CodeBlock
                        code={`public class SelectionSort {\n    public static void selectionSort(int[] arr) {\n        for (int i = 0; i < arr.length - 1; i++) {\n            int minIndex = i;\n            for (int j = i + 1; j < arr.length; j++)\n                if (arr[j] < arr[minIndex])\n                    minIndex = j;\n\n            int temp = arr[minIndex];\n            arr[minIndex] = arr[i];\n            arr[i] = temp;\n        }\n    }\n}`}
                        language="java"
                        fontSize={isLandscape ? 10 : 12}
                    />
                )}
            </View>

            {/* Insertion Sort */}
            <View style={styles.section}>
                <View style={styles.sectionHeaderRow}>
                    <Text
                        style={[
                            styles.subHeader,
                            { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                        ]}
                    >
                        3️⃣ Insertion Sort
                    </Text>
                    <TouchableOpacity onPress={() => setShowInsertion(v => !v)} style={styles.toggleBtn}>
                        <MaterialCommunityIcons name={showInsertion ? 'chevron-up' : 'chevron-down'} size={18} color={theme.colors.text} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Build sorted left side by inserting elements.  •  O(n²) average • O(1) space
                </Text>

                {showInsertion && (
                    <CodeBlock
                        code={`public class InsertionSort {\n    public static void insertionSort(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            int key = arr[i];\n            int j = i - 1;\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];\n                j--;\n            }\n            arr[j + 1] = key;\n        }\n    }\n}`}
                        language="java"
                        fontSize={isLandscape ? 10 : 12}
                    />
                )}
                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Inserts each element in its correct position when applicable.
                </Text>
            </View>


            {/* Merge Sort */}
            <View style={styles.section}>
                <View style={styles.sectionHeaderRow}>
                    <Text
                        style={[
                            styles.subHeader,
                            { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 },
                        ]}
                    >
                        4️⃣ Merge Sort
                    </Text>
                    <TouchableOpacity onPress={() => setShowMerge(v => !v)} style={styles.toggleBtn}>
                        <MaterialCommunityIcons name={showMerge ? 'chevron-up' : 'chevron-down'} size={18} color={theme.colors.text} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Divide and conquer; stable and O(n log n).  •  O(n log n) time • O(n) space
                </Text>

                {showMerge && (
                    <CodeBlock
                        code={`public class MergeSort {\n    public static void mergeSort(int[] arr, int left, int right) {\n        if (left < right) {\n            int mid = (left + right) / 2;\n            mergeSort(arr, left, mid);\n            mergeSort(arr, mid + 1, right);\n            merge(arr, left, mid, right);\n        }\n    }\n}`}
                        language="java"
                        fontSize={isLandscape ? 10 : 12}
                    />
                )}

                <Text
                    style={[
                        styles.description,
                        { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 },
                    ]}
                >
                    🔹 Merge Sort is good for large data where stable sort is needed.
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
    sectionHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toggleBtn: {
        paddingHorizontal: 8,
        paddingVertical: 4,
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
