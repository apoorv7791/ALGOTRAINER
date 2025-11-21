// app/(drawer)/DataVisualizer/arrays.tsx
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';

export default function ArrayVisual() {
    const { theme } = useTheme();
    const [arr, setArr] = useState<number[]>([10, 20, 30, 40, 50]);
    const [highlight, setHighlight] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    // Highlight animation
    const highlightBox = (index: number) => {
        setHighlight(index);
        setTimeout(() => setHighlight(null), 600);

    };

    // Push new element
    const pushElement = () => {
        if (!inputValue.trim) return;
        setArr([...arr, Number(inputValue)]);
        setInputValue('');
    };

    // Pop last element
    const deleteElement = () => {
        if (arr.length === 0) return;
        setArr(arr.slice(0, arr.length - 1));
        setMessage('Array is empty!');
    };

    const deleteAtfront = () => {
        if (arr.length === 0) return;
        setArr(arr.slice(1));
    }

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 90 }}
            contentInset={{ top: 30, bottom: 20, }}
            contentInsetAdjustmentBehavior="automatic"
        >
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Array Visualizer
            </Text>

            {/* Array */}
            <View style={styles.arrayRow}>
                {arr.map((value, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.box,
                            highlight === index && styles.highlight,
                            { borderColor: theme.colors.primary, backgroundColor: theme.colors.surface },
                        ]}
                        onPress={() => highlightBox(index)}
                    >
                        <Text style={[styles.value, { color: theme.colors.text }]}>
                            {value}
                        </Text>
                        <Text style={styles.index}>[{index}]</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={[styles.info, { color: theme.colors.textSecondary }]}>
                Tap any box to highlight
            </Text>
            {arr.length === 0 ? (
                <Text style={[styles.info, { color: theme.colors.textSecondary }]}>
                    Array is empty
                </Text>
            ) : (
                arr.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))
            )}

            {/* Input */}
            <TextInput
                placeholder="Value"
                placeholderTextColor={theme.colors.textSecondary}
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
                style={[
                    styles.input,
                    { color: theme.colors.text }
                ]}
            />

            {/* BUTTONS */}
            <View style={styles.controls}>
                <TouchableOpacity
                    style={[styles.btn, { borderColor: theme.colors.primary }]}
                    onPress={pushElement}
                >
                    <Text style={styles.btnText}>Push</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn, { borderColor: theme.colors.primary }]}
                    onPress={deleteElement}
                >
                    <Text style={styles.btnText}>Pop</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { borderColor: theme.colors.primary }]}
                    onPress={deleteAtfront}>
                    <Text style={styles.btnText}>Delete At Front</Text>
                </TouchableOpacity>
            </View>


            {/* Explanation */}
            <View style={{ marginTop: 20 }}>
                <Text style={[styles.heading, { color: theme.colors.text }]}>
                    How Arrays Work (Deep Explanation)
                </Text>
                <Text style={[styles.para, { color: theme.colors.textSecondary }]}>
                    Arrays store elements in *contiguous memory locations*.
                    This means each index points to a fixed offset in memory.
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    * What happens when you press “Push” ?.
                </Text>
                <Text style={[styles.para, { color: theme.colors.textSecondary }]}>
                    In most languages, arrays have fixed size, so pushing means:
                    {"\n"}1. Create a new array
                    {"\n"}2. Copy all old elements
                    {"\n"}3. Add the new element at the end
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    * What happens when you press “Pop” ? .
                </Text>
                <Text style={[styles.para, { color: theme.colors.textSecondary }]}>
                    Pop simply removes the last element by returning
                    a new array without the last index.
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    Time Complexity of Array.
                </Text>
                <Text style={[styles.para, { color: theme.colors.textSecondary }]}>
                    Access: O(1)
                    {"\n"}Push: O(1)
                    {"\n"}Pop: O(1)

                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    * "What happens when you press “Delete At Front” ?.
                    <Text style={[styles.para]}>
                        {"\n"} Delete At Front simply removes the first element by returning a new array without the first index.
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    arrayRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 14,
    },
    box: {

        padding: 20,
        borderRadius: 16,
        alignItems: "center",
        minWidth: 80,
        borderWidth: 2,
    },
    highlight: {
        backgroundColor: "#34D399",
        transform: [{ scale: 1.15 }],
    },
    value: {
        fontWeight: "bold",
        fontSize: 18,
    },
    index: {
        color: "#94A3B8",
        fontSize: 12,
        marginTop: 4,
    },
    info: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 14,
    },
    input: {
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 20,
    },
    controls: {
        marginTop: 30,
        gap: 14,
    },
    btn: {
        paddingVertical: 14,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: "center",
    },
    btnText: {
        color: "#34D399",
        fontWeight: "bold",
        fontSize: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },

    subheading: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 6,
    },

    para: {
        fontSize: 15,
        lineHeight: 22,
    },

});
