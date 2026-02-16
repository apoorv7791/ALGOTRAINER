import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Animated,
    FlatList,
    ScrollView,
} from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRouter } from 'expo-router';

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

interface SortingAlgo {
    id: string;
    name: string;
    description: string;
    code: string;
}

const sortingAlgorithms: SortingAlgo[] = [
    {
        id: 'bubble',
        name: 'Bubble Sort',
        description: '🔹 Swap adjacent elements repeatedly.  •  O(n²) time • O(1) space',
        code: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++)
            for (int j = 0; j < arr.length - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
    }
}`,
    },
    {
        id: 'selection',
        name: 'Selection Sort',
        description: '🔹 Pick min and put it at correct position.  •  O(n²) time • O(1) space',
        code: `public class SelectionSort {
    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++)
                if (arr[j] < arr[minIndex]) minIndex = j;

            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}`,
    },
    {
        id: 'insertion',
        name: 'Insertion Sort',
        description: '🔹 Build sorted left side by inserting elements.  •  O(n²) average • O(1) space',
        code: `public class InsertionSort {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) arr[j + 1] = arr[j--];
            arr[j + 1] = key;
        }
    }
}`,
    },
    {
        id: 'quick',
        name: 'Quick Sort',
        description: '🔹 Divide and conquer; average O(n·log n), worst O(n²). • Average space O(log n)',
        code: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
        return i + 1;
    }
}`,
    },
    {
        id: 'merge',
        name: 'Merge Sort',
        description: '🔹 Divide and conquer; stable and O(n log n).  •  O(n log n) time • O(n) space',
        code: `public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right)/2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid+1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid-left+1, n2 = right-mid;
        int[] L = new int[n1], R = new int[n2];
        for(int i=0;i<n1;i++) L[i]=arr[left+i];
        for(int j=0;j<n2;j++) R[j]=arr[mid+1+j];
        int i=0,j=0,k=left;
        while(i<n1 && j<n2){ arr[k++] = (L[i]<=R[j]?L[i++]:R[j++]); }
        while(i<n1){ arr[k++]=L[i++]; }
        while(j<n2){ arr[k++]=R[j++]; }
    }
}`,
    },
];

const Sorting = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const router = useRouter();

    const animRefs = useRef<Record<string, Animated.Value>>({});
    sortingAlgorithms.forEach(algo => {
        if (!animRefs.current[algo.id]) animRefs.current[algo.id] = new Animated.Value(0);
    });

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });
        return () => subscription?.remove();
    }, []);

    const toggleExpand = (id: string) => {
        const anim = animRefs.current[id];
        if (expandedId === id) {
            Animated.timing(anim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setExpandedId(null));
        } else {
            setExpandedId(id);
            Animated.timing(anim, { toValue: 1, duration: 220, useNativeDriver: true }).start();
        }
    };

    const rotateStyle = (id: string) => {
        const anim = animRefs.current[id];
        const rotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
        return { transform: [{ rotate }] };
    };

    const expandStyle = (id: string) => ({
        opacity: animRefs.current[id],
        transform: [{ scaleY: animRefs.current[id].interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
        overflow: 'hidden' as const,
    });

    const renderItem = ({ item, index }: { item: SortingAlgo; index: number }) => (
        <View style={[styles.section, { backgroundColor: theme.colors.surface || 'rgba(0,0,0,0.05)' }]}>
            <View style={styles.sectionHeaderRow}>
                <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                    {index + 1}️⃣ {item.name}
                </Text>
                <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                    <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(item.id)} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                {item.description}
            </Text>
            {expandedId === item.id && (
                <Animated.View style={expandStyle(item.id)}>
                    <CodeBlock code={item.code} fontSize={isLandscape ? 10 : 12} />
                </Animated.View>
            )}
        </View>
    );

    return (
        <FlatList
            data={sortingAlgorithms}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                <View style={styles.headerRow}>
                    <MaterialCommunityIcons
                        name="sort-variant"
                        size={isLandscape ? 22 : 26}
                        color={theme.colors.text}
                        style={styles.headerIcon}
                    />
                    <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 20 : 22 }]}>
                        Sorting Algorithms
                    </Text>
                </View>
            }
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: isLandscape ? 10 : 20 }}
            ListFooterComponent={
                <TouchableOpacity
                    style={[styles.visualizeBtn, { backgroundColor: theme.colors.primary }]}
                    onPress={() => router.push('/AlgoVisualizer/SortingVisual')}
                >
                    <Text style={styles.btnText}>Visualize All Sorting Algorithms</Text>
                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    section: {
        padding: 14,
        marginHorizontal: 0,
        marginVertical: 8,
        borderRadius: 8,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subHeader: { fontWeight: '600', marginBottom: 8 },
    description: { marginTop: 10, lineHeight: 20 },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    headerIcon: { marginRight: 8 },
    header: { fontWeight: 'bold', textAlign: 'center' },
    visualizeBtn: {
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: { color: 'white', fontWeight: '700', fontSize: 16 },
});

export default Sorting;
