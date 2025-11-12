// app/(drawer)/DataVisualizer/arrays.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';

export default function ArrayVisual() {
    const { theme } = useTheme();
    const [arr] = useState([10, 20, 30, 40, 50]);
    const [highlight, setHighlight] = useState<number | null>(null);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Array Visualizer</Text>

            <View style={styles.arrayRow}>
                {arr.map((value, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.box,
                            highlight === index && styles.highlight,
                            { borderColor: theme.colors.primary }
                        ]}
                        onPress={() => {
                            setHighlight(index);
                            setTimeout(() => setHighlight(null), 800);
                        }}
                    >
                        <Text style={styles.value}>{value}</Text>
                        <Text style={styles.index}>[{index}]</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={[styles.info, { color: theme.colors.secondary }]}>
                Tap any box to highlight
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    arrayRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 12,
    },
    box: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        minWidth: 80,
        borderWidth: 2,
    },
    highlight: {
        backgroundColor: '#34D399',
        transform: [{ scale: 1.15 }],
    },
    value: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    index: {
        color: '#94A3B8',
        fontSize: 12,
        marginTop: 4,
    },
    info: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 14,
    },
});