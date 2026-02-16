import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRouter } from 'expo-router';

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

const Sorting = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);
    const router = useRouter();

    const [showBubble, setShowBubble] = useState(false);
    const [showSelection, setShowSelection] = useState(false);
    const [showInsertion, setShowInsertion] = useState(false);
    const [showMerge, setShowMerge] = useState(false);
    const [showQuick, setShowQuick] = useState(false);

    const bubbleAnim = useRef(new Animated.Value(0)).current;
    const selectionAnim = useRef(new Animated.Value(0)).current;
    const insertionAnim = useRef(new Animated.Value(0)).current;
    const mergeAnim = useRef(new Animated.Value(0)).current;
    const quickAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });
        return () => subscription?.remove();
    }, []);

    const toggleAnimated = (visible: boolean, setVisible: (v: boolean) => void, anim: Animated.Value) => {
        if (visible) {
            Animated.timing(anim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => setVisible(false));
        } else {
            setVisible(true);
            Animated.timing(anim, {
                toValue: 1,
                duration: 220,
                useNativeDriver: true,
            }).start();
        }
    };

    const rotateStyle = (anim: Animated.Value) => {
        const rotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
        return { transform: [{ rotate }] };
    };

    const expandStyle = (anim: Animated.Value) => ({
        opacity: anim,
        transform: [{ scaleY: anim.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
        overflow: 'hidden' as const,
    });

    const sectionBg = theme.colors.surface || 'rgba(0,0,0,0.05)';

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

            {/* --- Bubble Sort --- */}
            <View style={[styles.section, { backgroundColor: sectionBg }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                        1️⃣ Bubble Sort
                    </Text>
                    <TouchableOpacity onPress={() => toggleAnimated(showBubble, setShowBubble, bubbleAnim)}>
                        <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(bubbleAnim)} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                    🔹 Swap adjacent elements repeatedly.  •  O(n²) time • O(1) space
                </Text>
                {showBubble && (
                    <Animated.View style={expandStyle(bubbleAnim)}>
                        <CodeBlock
                            code={`public class BubbleSort {\n    public static void bubbleSort(int[] arr) {\n        for (int i = 0; i < arr.length - 1; i++)\n            for (int j = 0; j < arr.length - i - 1; j++)\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n    }\n}`}
                            fontSize={isLandscape ? 10 : 12}
                        />
                    </Animated.View>
                )}
            </View>

            {/* --- Selection Sort --- */}
            <View style={[styles.section, { backgroundColor: sectionBg }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                        2️⃣ Selection Sort
                    </Text>
                    <TouchableOpacity onPress={() => toggleAnimated(showSelection, setShowSelection, selectionAnim)}>
                        <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(selectionAnim)} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                    🔹 Pick min and put it at correct position.  •  O(n²) time • O(1) space
                </Text>
                {showSelection && (
                    <Animated.View style={expandStyle(selectionAnim)}>
                        <CodeBlock
                            code={`public class SelectionSort {\n    public static void selectionSort(int[] arr) {\n        for (int i = 0; i < arr.length - 1; i++) {\n            int minIndex = i;\n            for (int j = i + 1; j < arr.length; j++)\n                if (arr[j] < arr[minIndex]) minIndex = j;\n            int temp = arr[minIndex];\n            arr[minIndex] = arr[i];\n            arr[i] = temp;\n        }\n    }\n}`}
                            fontSize={isLandscape ? 10 : 12}
                        />
                    </Animated.View>
                )}
            </View>

            {/* --- Insertion Sort --- */}
            <View style={[styles.section, { backgroundColor: sectionBg }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                        3️⃣ Insertion Sort
                    </Text>
                    <TouchableOpacity onPress={() => toggleAnimated(showInsertion, setShowInsertion, insertionAnim)}>
                        <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(insertionAnim)} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                    🔹 Build sorted left side by inserting elements.  •  O(n²) average • O(1) space
                </Text>
                {showInsertion && (
                    <Animated.View style={expandStyle(insertionAnim)}>
                        <CodeBlock
                            code={`public class InsertionSort {\n    public static void insertionSort(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            int key = arr[i];\n            int j = i - 1;\n            while (j >= 0 && arr[j] > key) arr[j + 1] = arr[j--];\n            arr[j + 1] = key;\n        }\n    }\n}`}
                            fontSize={isLandscape ? 10 : 12}
                        />
                    </Animated.View>
                )}
            </View>

            {/* --- Quick Sort --- */}
            <View style={[styles.section, { backgroundColor: sectionBg }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                        4️⃣ Quick Sort
                    </Text>
                    <TouchableOpacity onPress={() => toggleAnimated(showQuick, setShowQuick, quickAnim)}>
                        <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(quickAnim)} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                    🔹 Divide and conquer; average O(n·log n), worst O(n²). • Average space O(log n) (recursion)
                </Text>
                {showQuick && (
                    <Animated.View style={expandStyle(quickAnim)}>
                        <CodeBlock
                            code={`public class QuickSort {\n    public static void quickSort(int[] arr, int low, int high) {\n        if (low < high) {\n            int pi = partition(arr, low, high);\n            quickSort(arr, low, pi - 1);\n            quickSort(arr, pi + 1, high);\n        }\n    }\n\n    private static int partition(int[] arr, int low, int high) {\n        int pivot = arr[high];\n        int i = (low - 1);\n        for (int j = low; j <= high - 1; j++) {\n            if (arr[j] < pivot) {\n                i++;\n                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;\n            }\n        }\n        int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;\n        return i + 1;\n    }\n}`}
                            fontSize={isLandscape ? 10 : 12}
                        />
                    </Animated.View>
                )}
            </View>

            {/* --- Merge Sort --- */}
            <View style={[styles.section, { backgroundColor: sectionBg }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                        5️⃣ Merge Sort
                    </Text>
                    <TouchableOpacity onPress={() => toggleAnimated(showMerge, setShowMerge, mergeAnim)}>
                        <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(mergeAnim)} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                    🔹 Divide and conquer; stable and O(n log n).  •  O(n log n) time • O(n) space
                </Text>
                {showMerge && (
                    <Animated.View style={expandStyle(mergeAnim)}>
                        <CodeBlock
                            code={`public class MergeSort {\n    public static void mergeSort(int[] arr, int left, int right) {\n        if (left < right) {\n            int mid = (left + right)/2;\n            mergeSort(arr, left, mid);\n            mergeSort(arr, mid+1, right);\n            merge(arr, left, mid, right);\n        }\n    }\n\n    private static void merge(int[] arr, int left, int mid, int right) {\n        int n1 = mid-left+1, n2 = right-mid;\n        int[] L = new int[n1], R = new int[n2];\n        for(int i=0;i<n1;i++) L[i]=arr[left+i];\n        for(int j=0;j<n2;j++) R[j]=arr[mid+1+j];\n        int i=0,j=0,k=left;\n        while(i<n1 && j<n2){ arr[k++] = (L[i]<=R[j]?L[i++]:R[j++]); }\n        while(i<n1){ arr[k++]=L[i++]; }\n        while(j<n2){ arr[k++]=R[j++]; }\n    }\n}`}
                            fontSize={isLandscape ? 9 : 10}
                        />
                    </Animated.View>
                )}

                <TouchableOpacity
                    style={[styles.visualizeBtn, { backgroundColor: theme.colors.primary }]}
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
