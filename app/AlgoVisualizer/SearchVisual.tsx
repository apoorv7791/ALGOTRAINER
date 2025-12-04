import React, { act, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const SearchVisual = () => {
    const { theme } = useTheme();
    const [array, setArray] = React.useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [searchingAlgo, setSearchingAlgo] = useState<string | null>(null);

    const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);
    const [message, setMessage] = React.useState<string>('');
    const [activeAlgo, setActiveAlgo] = React.useState<string | null>(null);


    const LinearSearch = async (target: number) => {
        setSearchingAlgo('Linear Search');
        setActiveAlgo('Linear Search');
        for (let i = 0; i < array.length; i++) {
            setCurrentIndex(i);
            if (array[i] === target) {
                setMessage('Element found at index ' + i);
                setSearchingAlgo(null);
                return i;
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        setCurrentIndex(null);

        setSearchingAlgo(null);
    };

    const BinarySearch = async (target: number) => {
        setActiveAlgo('Binary Search');
        setSearchingAlgo('Binary Search');
        setMessage('');

        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            setCurrentIndex(mid);

            await new Promise(resolve => setTimeout(resolve, 500));

            if (array[mid] === target) {
                setMessage('Element found at index ' + mid);
                setSearchingAlgo(null);
                return mid;
            }

            if (array[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        setCurrentIndex(null);
        setSearchingAlgo(null);
    };




    const resetArray = () => {
        setArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        setCurrentIndex(null);
        setMessage('');
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Searching Visualizer</Text>
            <Text style={{
                color: theme.colors.text,
                fontSize: 18,
                marginBottom: 20
            }}>
                {activeAlgo ? `Active Algorithm: ${activeAlgo}` : 'No Algorithm Running'}
            </Text>
            <View style={[styles.arrayContainer, { flexDirection: 'row' }]}>
                {array.map((value, index) => (

                    <View key={index}
                        style={{
                            width: 40,
                            height: 40,
                            margin: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:
                                currentIndex === index ? 'green' : theme.colors.primary,
                        }}
                    >
                        <Text style={{ color: theme.colors.text }}>{value}</Text>
                    </View>

                ))}
            </View>
            <TouchableOpacity
                style={[
                    styles.button,
                    activeAlgo === 'Linear Search' && { backgroundColor: 'green' }
                ]}
                onPress={() => LinearSearch(5)}
                disabled={searchingAlgo !== null}   // only disable when ANY algo running
            >
                <Text style={styles.buttonText}>
                    {searchingAlgo === 'Linear Search' ? 'Searching...' : 'Start Linear Search'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    activeAlgo === 'Binary Search' && { backgroundColor: 'green' }
                ]}
                onPress={() => BinarySearch(5)}
                disabled={searchingAlgo !== null}
            >
                <Text style={styles.buttonText}>{searchingAlgo ? 'Searching...' : 'Start Binary Search'}</Text>
                {message && <Text style={{ color: theme.colors.text }}>{message}</Text>}
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, activeAlgo === 'reset' && { backgroundColor: 'green' }]}
                onPress={resetArray}
            >
                <Text style={styles.buttonText}>Reset Array</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 100,
    },
    arrayContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    numberBox: {
        width: 40,
        height: 50,
        backgroundColor: '#4f46e5',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 8,
    },
    button: { marginTop: 50, padding: 15, backgroundColor: 'navy', borderRadius: 8 },
    buttonText: { color: 'white', fontWeight: 'bold' },
})

export default SearchVisual;
