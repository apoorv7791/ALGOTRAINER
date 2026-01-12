import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';

const SortingVisual = () => {
    // states
    const { theme } = useTheme();
    const [array, setArray] = React.useState<number[]>([9, 5, 3, 1, 2, 4, 0]);
    const [sorting, setSorting] = React.useState<boolean>(false);

    // animated refs (scale + background highlight)
    const animatedScalesRef = React.useRef<Animated.Value[]>([]);
    const animatedBgRef = React.useRef<Animated.Value[]>([]);

    // (re)initialize animated values when array length changes
    React.useEffect(() => {
        animatedScalesRef.current = array.map(() => new Animated.Value(1));
        animatedBgRef.current = array.map(() => new Animated.Value(0));
    }, [array.length]);

    const resetArray = () => {
        setArray([9, 5, 3, 1, 2, 4, 0]);
        setActiveAlgo("reset");
        setTimeout(() => setActiveAlgo(null), 100);
    };

    const [activeAlgo, setActiveAlgo] = React.useState<string | null>(null);

    // animate highlight (comparison) for one or two indices
    const animateHighlight = (index1: number, index2?: number, duration = 180) => {
        return new Promise<void>((resolve) => {
            const anims: Animated.CompositeAnimation[] = [];

            const pushForIndex = (idx: number) => {
                anims.push(
                    Animated.sequence([
                        Animated.timing(animatedScalesRef.current[idx], {
                            toValue: 1.15,
                            duration: duration / 2,
                            useNativeDriver: false,
                        }),
                        Animated.timing(animatedScalesRef.current[idx], {
                            toValue: 1,
                            duration: duration / 2,
                            useNativeDriver: false,
                        }),
                    ]),
                    Animated.sequence([
                        Animated.timing(animatedBgRef.current[idx], {
                            toValue: 1,
                            duration: duration / 2,
                            useNativeDriver: false,
                        }),
                        Animated.timing(animatedBgRef.current[idx], {
                            toValue: 0,
                            duration: duration / 2,
                            useNativeDriver: false,
                        }),
                    ])
                );
            };

            if (typeof index1 === 'number') pushForIndex(index1);
            if (typeof index2 === 'number') pushForIndex(index2);

            Animated.parallel(anims).start(() => resolve());
        });
    };

    // animate swap: highlight both items during swap
    const animateSwap = (index1: number, index2: number) => {
        return new Promise<void>((resolve) => {
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(animatedScalesRef.current[index1], {
                        toValue: 1.2,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                    Animated.timing(animatedScalesRef.current[index1], {
                        toValue: 1,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(animatedBgRef.current[index1], {
                        toValue: 1,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                    Animated.timing(animatedBgRef.current[index1], {
                        toValue: 0,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(animatedScalesRef.current[index2], {
                        toValue: 1.2,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                    Animated.timing(animatedScalesRef.current[index2], {
                        toValue: 1,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(animatedBgRef.current[index2], {
                        toValue: 1,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                    Animated.timing(animatedBgRef.current[index2], {
                        toValue: 0,
                        duration: 120,
                        useNativeDriver: false,
                    }),
                ]),
            ]).start(() => resolve());
        });
    };

    const topspeed = 700;
    // Sorting Algorithms
    const BubbleSort = async () => {
        setSorting(true);
        setActiveAlgo('BubbleSort');
        let arr = [...array];
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // highlight comparison
                await animateHighlight(j, j + 1, 140);
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    await animateSwap(j, j + 1);
                    setArray([...arr]);
                    await new Promise(resolve => setTimeout(resolve, topspeed));
                }
            }
        }
        setSorting(false);
        setActiveAlgo(null);
    }

    const InsertionSort = async () => {
        setSorting(true);
        setActiveAlgo('InsertionSort');
        let arr = [...array];
        const n = arr.length;

        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;

            while (j >= 0) {
                await animateHighlight(j, j + 1, 120);
                if (arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                    setArray([...arr]);
                    await new Promise(resolve => setTimeout(resolve, topspeed));
                } else {
                    break;
                }
            }
            arr[j + 1] = key;
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, topspeed));
        }
        setSorting(false);
        setActiveAlgo(null);
    }

    const SelectionSort = async () => {
        setSorting(true);
        setActiveAlgo('SelectionSort');
        let arr = [...array];
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                await animateHighlight(minIdx, j, 120);
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                await animateSwap(i, minIdx);
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, topspeed));
            }
        }
        setSorting(false);
        setActiveAlgo(null);
    }

    const MergeSort = async () => {
        setSorting(true);
        setActiveAlgo('MergeSort');

        let arr = [...array];

        const mergeSort = async (l: number, r: number) => {
            if (l >= r) return;

            const mid = Math.floor((l + r) / 2);

            await mergeSort(l, mid);
            await mergeSort(mid + 1, r);

            let temp: number[] = [];
            let i = l, j = mid + 1;

            while (i <= mid && j <= r) {
                await animateHighlight(i, j, 100);
                if (arr[i] <= arr[j]) {
                    temp.push(arr[i++]);
                } else {
                    temp.push(arr[j++]);
                }
            }
            while (i <= mid) temp.push(arr[i++]);
            while (j <= r) temp.push(arr[j++]);

            for (let k = l; k <= r; k++) {
                arr[k] = temp[k - l];
                // highlight written position
                await animateHighlight(k);
                setArray([...arr]);
                await new Promise(res => setTimeout(res, 300));
            }
        };

        await mergeSort(0, arr.length - 1);

        setArray([...arr]);
        setSorting(false);
        setActiveAlgo(null);
    };

    const quickSort = async (low: number, high: number) => {
        if (low < high) {
            const pi = await partition(low, high);
            await quickSort(low, pi - 1);
            await quickSort(pi + 1, high);
        }
    }

    const partition = async (low: number, high: number) => {
        let arr = [...array];
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            await animateHighlight(j, high, 120);
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                await animateSwap(i, j);
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, topspeed));
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        await animateSwap(i + 1, high);
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, topspeed));
        // reflect changes to state array for outer recursion
        setArray([...arr]);
        return i + 1;
    }

    // UI rendering
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Sorting Visualizer</Text>
            <View style={styles.arrayContainer}>
                {array.map((value, index) => {
                    const scale = animatedScalesRef.current[index] || new Animated.Value(1);
                    const bgAnim = animatedBgRef.current[index] || new Animated.Value(0);
                    const backgroundColor = bgAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['#4f46e5', '#f59e0b'] // normal -> highlight (indigo -> amber)
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.numberBox,
                                {
                                    transform: [{ scale }],
                                    backgroundColor,
                                }
                            ]}
                        >
                            <Text style={styles.numberText}>{value}</Text>
                        </Animated.View>
                    );
                })}
            </View>
            <View style={styles.buttonGrid}>
                <TouchableOpacity
                    style={styles.gridButton}
                    onPress={BubbleSort}
                    disabled={activeAlgo !== null}
                >
                    <Text style={styles.buttonText}>
                        {activeAlgo === 'BubbleSort' ? 'Sorting...' : 'Bubble Sort'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridButton}
                    onPress={SelectionSort}
                    disabled={activeAlgo !== null}
                >
                    <Text style={styles.buttonText}>
                        {activeAlgo === 'SelectionSort' ? 'Sorting...' : 'Selection Sort'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridButton}
                    onPress={InsertionSort}
                    disabled={activeAlgo !== null}
                >
                    <Text style={styles.buttonText}>
                        {activeAlgo === 'InsertionSort' ? 'Sorting...' : 'Insertion Sort'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.gridButton}
                    onPress={MergeSort}
                    disabled={activeAlgo !== null}
                >
                    <Text style={styles.buttonText}>
                        {activeAlgo === 'MergeSort' ? 'Sorting...' : 'Merge Sort'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gridButton}
                    onPress={() => {
                        setSorting(true);
                        setActiveAlgo('QuickSort');
                        quickSort(0, array.length - 1).then(() => {
                            setSorting(false);
                            setActiveAlgo(null);
                        });
                    }}
                    disabled={activeAlgo !== null}
                >
                    <Text style={styles.buttonText}>
                        {activeAlgo === 'QuickSort' ? 'Sorting...' : 'Quick Sort'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.gridButton, styles.resetButton]}
                    onPress={resetArray}
                    disabled={activeAlgo !== null}
                >
                    <Text style={styles.buttonText}>
                        {activeAlgo === 'reset' ? 'Resetting...' : 'Reset'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
// styles 
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 70 },
    bar: { width: 30, margin: 5, backgroundColor: 'teal' },
    button: { marginTop: 50, padding: 15, backgroundColor: 'navy', borderRadius: 8 },
    buttonText: { color: 'white', fontWeight: 'bold' },
    arrayContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    numberBox: {
        width: 40,
        height: 40,
        backgroundColor: '#4f46e5',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 8,
    },

    numberText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    gridButton: {
        width: '45%',
        padding: 15,
        margin: 5,
        backgroundColor: 'navy',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 40,
    },

    resetButton: {
        backgroundColor: '#dc2626', // red for reset (UX clarity)
    },

})

export default SortingVisual;
