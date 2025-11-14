// app/(drawer)/DataVisualizer/arrays.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';

export default function ArrayVisual() {
    const { theme } = useTheme();
    const [arr, setArr] = useState<number[]>([10, 20, 30, 40, 50]);
    const [highlight, setHighlight] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');

    // Highlight animation
    const highlightBox = (index: number) => {
        setHighlight(index);
        setTimeout(() => setHighlight(null), 800);
    };

    // Push new element
    const pushElement = () => {
        if (!inputValue) return;
        setArr([...arr, Number(inputValue)]);
        setInputValue('');
    };

    // Pop last element
    const deleteElement = () => {
        if (arr.length === 0) return;
        setArr(arr.slice(0, arr.length - 1));
    };

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 60 }}
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
                            { borderColor: theme.colors.primary }
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

            {/* Input */}
            <TextInput
                placeholder="Value"
                placeholderTextColor={theme.colors.textSecondary}
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
                style={[
                    styles.input,
                    { borderColor: theme.colors.primary, color: theme.colors.text }
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
        backgroundColor: "#1E1E1E",
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
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});
