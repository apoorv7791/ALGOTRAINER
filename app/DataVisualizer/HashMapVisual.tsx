// HashMapVisual.tsx → NOW WITH INSTANT KEY-VALUE DISPLAY
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const TOTAL_BUCKETS = 70;

export default function HashMapVisual() {
    const { theme } = useTheme();
    const [input, setInput] = useState('');
    const [hashMap, setHashMap] = useState<any[][]>(
        Array(TOTAL_BUCKETS).fill(null).map(() => [])
    );

    // Super simple but effective hash (good distribution for short strings)
    const hash = (str: string): number => {
        let h = 0;
        for (let i = 0; i < str.length; i++) {
            h = (h * 31 + str.charCodeAt(i)) | 0;
        }
        return Math.abs(h) % TOTAL_BUCKETS;
    };

    const insert = () => {
        if (!input.trim()) return;

        const key = input.trim();
        const value = input.trim(); // same as key if user doesn't type value
        const index = hash(key);

        setHashMap(prev => {
            const copy = [...prev];
            copy[index] = [...copy[index], { key, value }];
            return copy;
        });

        setInput('');
        Keyboard.dismiss(); // hide keyboard
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                HashMap Live Demo
            </Text>

            {/* INPUT BOX */}
            <View style={styles.inputBox}>
                <TextInput
                    style={[styles.textInput, {
                        backgroundColor: theme.colors.card || '#fff',
                        color: theme.colors.text,
                        borderColor: theme.colors.primary || '#007AFF'
                    }]}
                    placeholder="Type anything and press Enter →"
                    placeholderTextColor="#999"
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={insert} // ← THIS IS THE MAGIC (Enter key works!)
                    autoFocus
                />
                <TouchableOpacity style={styles.goButton} onPress={insert}>
                    <Text style={styles.goText}>GO</Text>
                </TouchableOpacity>
            </View>

            {/* 70 BUCKETS */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bucketsContainer}
            >
                {hashMap.map((bucket, i) => (
                    <View key={i} style={styles.bucketWrapper}>
                        <Text style={[styles.index, { color: '#888' }]}>{i.toString().padStart(2, '0')}</Text>

                        <View style={styles.braces}>
                            <Text style={[styles.brace, { color: theme.colors.primary }]}>{'{'}</Text>
                            <Text style={[styles.brace, { color: theme.colors.primary }]}>{'}'}</Text>
                        </View>

                        {/* KEY-VALUE PAIRS INSIDE BUCKET */}
                        <View style={styles.entries}>
                            {bucket.map((item: any, j: number) => (
                                <View key={j} style={styles.entry}>
                                    <Text style={[styles.kvText, { color: theme.colors.text }]}>
                                        "{item.key}" → "{item.value}"
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Text style={[styles.hint, { color: theme.colors.textSecondary || '#666' }]}>
                Try: cat, dog, hello, world, javascript, reactnative
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
    inputBox: { flexDirection: 'row', width: '92%', marginBottom: 20 },
    textInput: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 12,
        padding: 16,
        fontSize: 18,
        marginRight: 10,
    },
    goButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 12,
    },
    goText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
    bucketsContainer: { paddingHorizontal: 20 },
    bucketWrapper: { alignItems: 'center', marginHorizontal: 14 },
    index: { fontSize: 13, fontFamily: 'Menlo', marginBottom: 6 },
    braces: { flexDirection: 'row' },
    brace: { fontSize: 70, fontWeight: '900', lineHeight: 76 },
    entries: { minWidth: 130, marginTop: 10, alignItems: 'center' },
    entry: {
        backgroundColor: 'rgba(0,122,255,0.15)',
        padding: 10,
        borderRadius: 10,
        marginTop: 6,
        minWidth: 130,
    },
    kvText: { fontFamily: 'Menlo', fontSize: 15, textAlign: 'center' },
    hint: { marginTop: 20, fontSize: 15, opacity: 0.7, textAlign: 'center', paddingHorizontal: 20 },
});