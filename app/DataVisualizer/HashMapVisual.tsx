import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from '../Themes/Themecontext'



const HashMapVisual = () => {
    const { theme } = useTheme();
    // input value
    const [inputValue, setInputValue] = React.useState('');
    // bukcets
    const [hashMap, setHashMap] = React.useState<Record<number, number>>({});

    const AddElement = () => {
        const num = parseInt(inputValue);
        if (!isNaN(num)) {
            setHashMap(prev => ({
                ...prev,
                [num]: (prev[num] || 0) + 1
            }));
            setInputValue('');
        }
    }
    const clear = () => {
        setHashMap({});
    }

    // Convert hashmap to array for FlatList
    const hashMapArray = Object.entries(hashMap).map(([key, value]) => ({ key, value }));
    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Text style={[styles.title, { color: theme.colors.text }]}>HashMap Visualizer</Text>
                <View style={styles.bracketsWrapper}>
                    <View style={styles.mapRow}>
                        <Text style={[styles.brackets, { color: theme.colors.primary }]}>{"{"}</Text>

                        <View style={styles.mapContent}>
                            {Object.keys(hashMap).length === 0 ? (
                                <Text style={{ color: theme.colors.textSecondary }}>
                                    Map is empty…
                                </Text>
                            ) : (
                                <FlatList
                                    data={hashMapArray}
                                    keyExtractor={item => item.key}
                                    contentContainerStyle={{ paddingVertical: 20 }}
                                    renderItem={({ item }) => {
                                        return <Text
                                            style={{
                                                fontSize: 18,
                                                color: theme.colors.text,
                                                marginVertical: 4,
                                            }}
                                        >
                                            {item.key}: {item.value}
                                        </Text>
                                    }}
                                />
                            )}
                        </View>

                        <Text style={[styles.brackets, { color: theme.colors.primary }]}>{"}"}</Text>
                    </View>

                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Enter the element'
                        placeholderTextColor={theme.colors.textSecondary}
                        keyboardType='numeric'
                        value={inputValue}
                        onChangeText={setInputValue}
                        style={[styles.input, { backgroundColor: theme.colors.card, color: theme.colors.text, borderBlockColor: theme.colors.primary }]}
                    />
                </View>
                <TouchableOpacity style={[styles.btn, { borderColor: theme.colors.primary }]} onPress={AddElement}>
                    <Text style={[styles.btnText, { color: theme.colors.primary }]}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { borderColor: theme.colors.primary }]} onPress={clear}>
                    <Text style={[styles.btnText, { color: theme.colors.primary }]}>Clear</Text>
                </TouchableOpacity>
                <View style={styles.explanationBox}>
                    <View style={styles.explanationBox}>
                        <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>How Add works?</Text>
                        <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>Add is the process of adding an element to the map.</Text>
                    </View>
                    <View style={styles.explanationBox}>
                        <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>How Clear works?</Text>
                        <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>Clear is the process of removing all elements from the map.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 17,
        marginVertical: 30,
        fontSize: 16,
    },
    brackets: {
        fontSize: 70,
        fontWeight: 'bold',
    },
    bracketsWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: 100,
        marginVertical: 20,
    },
    mapContent: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    btn: {
        width: '50%',
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 15,
        marginVertical: 20,
        fontSize: 16,
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    mapRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        marginVertical: 20,
    },
    // explanation of how the list works
    explanationBox: {
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#111827',
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
export default HashMapVisual