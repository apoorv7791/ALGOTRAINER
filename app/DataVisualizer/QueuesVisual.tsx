import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
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
            setQueue(queue.slice(1));
        }
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Queues Visualizer</Text>
            <View style={styles.queueWrapper}>
                <Text style={[styles.bracket, { color: theme.colors.primary }]}>[</Text>
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.queueContent} >
                    <AnimatePresence>
                        {queue.length === 0 ? (
                            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
                                Queue is empty
                            </Text>
                        ) : (
                            queue.map((item, index) => (
                                <MotiView
                                    key={item} // ✅ unique key is important
                                    from={{ opacity: 0, scale: 0.6, translateY: -10 }}
                                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.6,
                                        translateX: index === 0 ? -50 : 0, // front element slides left
                                        translateY: index === 0 ? 0 : 0,
                                    }}
                                    transition={{
                                        type: 'timing',
                                        duration: 300,
                                    }}
                                    style={{ marginHorizontal: 6 }}
                                >
                                    <View
                                        style={[
                                            styles.queueItem,
                                            { backgroundColor: theme.colors.card, borderColor: theme.colors.primary },
                                        ]}
                                    >
                                        <Text style={[styles.itemText, { color: theme.colors.text }]}>{item}</Text>
                                        {index === 0 && (
                                            <Text style={[styles.frontLabel, { color: theme.colors.primary }]}>Front</Text>
                                        )}
                                        {index === queue.length - 1 && (
                                            <Text style={[styles.backLabel, { color: theme.colors.primary }]}>Back</Text>
                                        )}
                                    </View>
                                </MotiView>
                            ))
                        )}
                    </AnimatePresence>
                </ScrollView>
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
        </View>

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

    // 6. queue item 1
    queueItem: {
        width: 70,
        height: 70,
        borderWidth: 3,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    // 7. Text inside queue item
    itemText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    //8. position of the front 
    frontLabel: {
        position: 'absolute',
        top: -24,
        fontSize: 12,
        fontWeight: 'bold'
    },
    //9. empty message
    emptyText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    //10 position at the back
    backLabel: {
        position: 'absolute',
        top: -24,
        fontSize: 12,
        fontWeight: 'bold',
        right: -10,
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
    }
})

export default QueuesVisual;
