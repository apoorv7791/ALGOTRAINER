import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import { MotiView, AnimatePresence } from 'moti';

const QueuesVisual = () => {
    const { theme } = useTheme();
    const [queue, setQueue] = React.useState<number[]>([]);
    const [inputValue, setInputValue] = React.useState('');

    const enqueue = () => {
        if (inputValue !== '') {
            setQueue([...queue, Number(inputValue)]);
            setInputValue('');
        }
    }

    const dequeue = () => {
        if (queue.length > 0) {
            setTimeout(() => {
                setQueue(queue.slice(1));
            }, 1000);
        }
    }
    return (

        <ScrollView>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Text style={[styles.title, { color: theme.colors.text }]}>Queues Visualizer</Text>
                <View style={styles.queueWrapper}>
                    <Text style={[styles.bracket, { color: theme.colors.primary }]}>[</Text>
                    <View style={styles.queueContent}>
                        <AnimatePresence>
                            {queue.length === 0 ? (
                                <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
                                    Queue is empty
                                </Text>
                            ) : (
                                <FlatList
                                    data={queue}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => `${item}-${index}`}
                                    renderItem={({ item, index }) => (
                                        <MotiView
                                            key={`${item}-${index}`}
                                            from={{
                                                opacity: 0,
                                                scale: 0.8,
                                                translateY: 20,
                                                translateX: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                translateY: 0,
                                                translateX: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.8,
                                                translateX: index === 0 ? -40 : 0,
                                                translateY: 20,
                                            }}
                                            transition={{
                                                type: 'spring',
                                                damping: 12,
                                                mass: 0.5,
                                                stiffness: 100,
                                            }}
                                            style={{
                                                marginHorizontal: 6,
                                            }}
                                            exitTransition={{
                                                type: 'timing',
                                                duration: 200,
                                            }}
                                        >
                                            <View
                                                style={[
                                                    styles.queueItem,
                                                    {
                                                        backgroundColor: theme.colors.card,
                                                        borderColor: theme.colors.primary
                                                    },
                                                ]}
                                            >
                                                <Text style={[styles.itemText, { color: theme.colors.text }]}>
                                                    {item}
                                                </Text>
                                                {index === 0 && (
                                                    <Text style={[styles.frontIndicator, { color: theme.colors.textSecondary }]}>
                                                        Front
                                                    </Text>
                                                )}
                                                {index === queue.length - 1 && queue.length > 1 && (
                                                    <Text style={[styles.rearIndicator, { color: theme.colors.textSecondary }]}>
                                                        Back
                                                    </Text>
                                                )}
                                            </View>
                                        </MotiView>
                                    )}
                                    ListEmptyComponent={
                                        <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
                                            Queue is empty
                                        </Text>
                                    }
                                />
                            )}
                        </AnimatePresence>
                    </View>
                    <Text style={[styles.bracket, { color: theme.colors.primary }]}>]</Text>
                </View>
                <TextInput
                    placeholder='Enter the element'
                    placeholderTextColor={theme.colors.textSecondary}
                    keyboardType='numeric'
                    value={inputValue}
                    onChangeText={setInputValue}
                    style={[styles.input, { backgroundColor: theme.colors.card, color: theme.colors.text, borderBlockColor: theme.colors.primary }]}
                />
                <View style={styles.controls}>
                    <TouchableOpacity style={[styles.btn, { borderColor: theme.colors.primary }]} onPress={enqueue}>
                        <Text style={[styles.btnText, { color: theme.colors.primary }]}>Enqueue (Add Rear)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { borderColor: theme.colors.primary }]} onPress={dequeue}>
                        <Text style={[styles.btnText, { color: theme.colors.primary }]}>Dequeue (Remove Front)</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.explanationsContainer}>
                    <View style={[styles.explanationBox, { backgroundColor: theme.colors.card, borderColor: theme.colors.primary }]}>
                        <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>How Enqueue works?</Text>
                        <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>Enqueue is the process of adding an element to the rear of the queue.</Text>
                    </View>
                    <View style={[styles.explanationBox, { backgroundColor: theme.colors.card, borderColor: theme.colors.primary }]}>
                        <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>How Dequeue works?</Text>
                        <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>Dequeue is the process of removing an element from the front of the queue.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // 1. main content
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    // 2. title
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    // 3. queue wrapper ([.....])
    queueWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 80,
        marginVertical: 20
    },
    // 4. bracket []
    bracket: {
        fontSize: 70,
        fontWeight: 'bold',
    },
    // 5. queue content [1,2,3,4,5]
    queueContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 12,            // spacing between items
        paddingHorizontal: 10,
        overflow: 'hidden',  // ensures items don’t wrap
    },

    // 7. Text inside queue item
    itemText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    // Update these styles in your StyleSheet
    frontIndicator: {
        position: 'absolute',
        top: -20,       // Position above the item
        left: 0,        // Align with left edge
        right: 0,       // Take full width
        textAlign: 'center', // Center the text
        fontSize: 12,
        fontWeight: 'bold',
    },
    rearIndicator: {
        position: 'absolute',
        bottom: -20,    // Position below the item
        left: 0,        // Align with left edge
        right: 0,       // Take full width
        textAlign: 'center', // Center the text
        fontSize: 12,
        fontWeight: 'bold',
    },
    // Add some margin to the queue item to make room for labels
    queueItem: {
        width: 70,
        height: 70,
        borderWidth: 3,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginVertical: 24, // Add vertical margin for labels
    },
    //9. empty message
    emptyText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    // 11. Input field
    input: {
        width: '80%',
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 15,
        marginVertical: 20,
        fontSize: 16,
    },

    // 12. Buttons container
    controls: {
        gap: 16,
        width: '80%',
        marginTop: 10,
    },

    // 13. Individual buttons
    btn: {
        paddingVertical: 16,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
    },

    // 14. Button text
    btnText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    ScrollWrapper: {
        flex: 1,
    },
    explanationsContainer: {
        marginTop: 40,
        gap: 16,
        width: '100%',
    },
    // explanation of how the list works
    explanationBox: {
        borderWidth: 2,
        borderRadius: 12,
        padding: 16,
    },
    // explanation title
    explanationTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    // explanation text
    explanationText: {
        fontSize: 14,
        lineHeight: 20,
    },

})

export default QueuesVisual;