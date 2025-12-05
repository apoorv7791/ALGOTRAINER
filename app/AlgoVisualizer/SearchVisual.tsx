import React, { act, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const SearchVisual = () => {
    const { theme } = useTheme();
    const [array, setArray] = React.useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [searchingAlgo, setSearchingAlgo] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);
    const [rightIndex, setRightIndex] = React.useState<number | null>(null);
    const [leftIndex, setLeftIndex] = React.useState<number | null>(null);
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
                return;
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

        console.log('Binary search start, target=', target, 'array=', array);

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            // show pointers to the user
            setLeftIndex(left);
            setRightIndex(right);
            setCurrentIndex(mid);

            console.log(`Checking mid=${mid} (value=${array[mid]}), left=${left}, right=${right}`);

            // wait *after* showing mid so user sees it
            await new Promise(resolve => setTimeout(resolve, 600));

            if (array[mid] === target) {
                console.log('Found at mid', mid);
                setMessage('Element found at index ' + mid);

                // clear highlighting after a short delay so user sees the hit
                await new Promise(resolve => setTimeout(resolve, 400));
                setLeftIndex(null);
                setRightIndex(null);
                setCurrentIndex(null);

                setSearchingAlgo(null);
                return mid;
            }

            if (array[mid] < target) {
                // target is larger → go right
                console.log('Target > mid → move left to', mid + 1);
                left = mid + 1;
            } else {
                // target is smaller → go left
                console.log('Target < mid → move right to', mid - 1);
                right = mid - 1;
            }

            // optional: small pause so user sees the pointer shift before next mid
            await new Promise(resolve => setTimeout(resolve, 250));
        }

        console.log('Not found');
        setMessage('Element not found');

        // clear pointers
        setLeftIndex(null);
        setRightIndex(null);
        setCurrentIndex(null);

        setSearchingAlgo(null);
        return -1;
    };

    const resetArray = () => {
        setArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        setCurrentIndex(null);
        setMessage('');
        setLeftIndex(null);
        setRightIndex(null);
        setActiveAlgo(null);


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

            <View style={styles.arrayContainer}>
                {array.map((value, index) => {
                    let bgColor = theme.colors.primary;
                    if (index === currentIndex) bgColor = 'orange';
                    else if (index === leftIndex) bgColor = 'purple';
                    else if (index === rightIndex) bgColor = 'red';
                    return (
                        <View
                            key={index}
                            style={{
                                width: 40,
                                height: 40,
                                margin: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: bgColor,
                            }}
                        >
                            <Text style={{ color: theme.colors.text }}>{value}</Text>
                        </View>
                    );
                })}
            </View>

            {/* Linear Search Button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    activeAlgo === 'Linear Search' && { backgroundColor: 'green' }
                ]}
                onPress={() => LinearSearch(5)}
                disabled={searchingAlgo === 'Linear Search'}
            >
                <Text style={styles.buttonText}>
                    {searchingAlgo === 'Linear Search' ? 'Searching...' : 'Start Linear Search'}
                </Text>
            </TouchableOpacity>

            {/* Binary Search Button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    activeAlgo === 'Binary Search' && { backgroundColor: 'green' }
                ]}
                onPress={() => BinarySearch(7)}
                disabled={searchingAlgo === 'Binary Search'}
            >
                <Text style={styles.buttonText}>
                    {searchingAlgo === 'Binary Search' ? 'Searching...' : 'Start Binary Search'}
                </Text>
            </TouchableOpacity>

            {/* Reset Button */}
            <TouchableOpacity
                style={[styles.button, activeAlgo === 'reset' && { backgroundColor: 'green' }]}
                onPress={resetArray}
            >
                <Text style={styles.buttonText}>Reset Array</Text>
            </TouchableOpacity>

            {/* Message */}
            {message ? <Text style={{ color: theme.colors.text, marginTop: 20 }}>{message}</Text> : null}
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
