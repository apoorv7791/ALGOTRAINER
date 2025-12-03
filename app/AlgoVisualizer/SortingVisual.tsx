import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const SortingVisual = () => {
    // states
    const { theme } = useTheme();
    const [array, setArray] = React.useState<number[]>([9, 5, 3, 1, 2, 4, 0]);
    const [sorting, setSorting] = React.useState<boolean>(false);
    const animatedValues = React.useRef(array.map(() => new Animated.Value(0))).current;


    const resetArray = () => {
        setArray([9, 5, 3, 1, 2, 4, 0]);
        setActiveAlgo("reset");
        setTimeout(() => setActiveAlgo(null), 100);

    };

    const [activeAlgo, setActiveAlgo] = React.useState<string | null>(null);
    const animateSwap = (index1: number, index2: number) => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(animatedValues[index1], {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues[index1], {
                    toValue: 0,
                    duration: 150,
                    useNativeDriver: true,
                })
            ]),
            Animated.sequence([
                Animated.timing(animatedValues[index2], {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues[index2], {
                    toValue: 0,
                    duration: 150,
                    useNativeDriver: true,
                })
            ]),
        ]).start();
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
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    animateSwap(j, j + 1);
                    setArray([...arr]);
                    await new Promise(resolve => setTimeout(resolve, topspeed)); // Delay for visualization
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

            while (j >= 0 && arr[j] > key) {
                animateSwap(j, j + 1);
                arr[j + 1] = arr[j];
                j = j - 1;
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, topspeed)); // Delay for visualization

            }
            arr[j + 1] = key;
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, topspeed));
        }
        setSorting(false);
        setActiveAlgo(null);
    }

    // UI rendering
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Sorting Visualizer</Text>
            <View style={styles.arrayContainer}>
                {array.map((value, index) => (
                    <Animated.View
                        key={index}
                        style={[
                            styles.numberBox,
                            {
                                transform: [
                                    {
                                        scale: animatedValues[index].interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 1.15], // pulse effect
                                        }),
                                    },
                                ],
                            }
                        ]}
                    >
                        <Text style={styles.numberText}>{value}</Text>
                    </Animated.View>

                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={BubbleSort} disabled={activeAlgo !== null}>
                <Text style={styles.buttonText}>{sorting}{activeAlgo === 'BubbleSort' ? 'Sorting...' : 'Start Bubble Sort'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={InsertionSort} disabled={activeAlgo !== null}>
                <Text style={styles.buttonText}>{sorting}{activeAlgo === 'InsertionSort' ? 'Sorting...' : 'Start Insertion Sort'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={resetArray} disabled={activeAlgo !== null}>
                <Text style={styles.buttonText}>{sorting}{activeAlgo === 'reset' ? 'Resetting...' : 'Reset Array'}</Text>
            </TouchableOpacity>
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


})

export default SortingVisual;
