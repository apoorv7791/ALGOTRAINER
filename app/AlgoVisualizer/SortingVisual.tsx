import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const SortingVisual = () => {
    const { theme } = useTheme();
    const [array, setArray] = React.useState<number[]>([5, 3, 8, 4, 2]);
    const [reset, setReset] = React.useState<boolean>(false);
    const [sorting, setSorting] = React.useState<boolean>(false);

    const BubbleSort = async () => {
        setSorting(true);
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    setArray([...array]);
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }
        }
        setSorting(false);
    }

    const InsertionSort = async () => {
        setSorting(true);
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
                setArray([...array]);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            array[j + 1] = key;
            setArray([...array]);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        setSorting(false);
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Sorting Visualizer</Text>
            <View style={styles.arrayContainer}>
                {array.map((value, index) => (
                    <View key={index} style={styles.numberBox}>
                        <Text style={styles.numberText}>{value}</Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity onPress={BubbleSort} disabled={sorting} style={styles.button}>
                <Text style={styles.buttonText}>{sorting ? 'Sorting...' : 'Start Bubble Sort'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={InsertionSort} disabled={sorting} style={styles.button}>
                <Text style={styles.buttonText}>{sorting ? 'Sorting...' : 'Start Insertion Sort'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setReset(true)} disabled={sorting} style={styles.button}>
                <Text style={styles.buttonText}>{sorting ? 'Sorting...' : 'Reset Array'}</Text>
            </TouchableOpacity>
        </View>
    );
}

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
