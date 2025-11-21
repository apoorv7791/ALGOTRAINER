import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Arrays = () => {
    const { theme } = useTheme();
    const router = useRouter();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Arrays</Text>


            {/* 1. What is an Array? */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>What is an Array?</Text>
                <Text style={[styles.bullet, { color: theme.colors.text }]}>
                    • A collection of items{"\n"}
                    • Each item has an **index** [0, 1, 2... ]{"\n"}
                    • All items are **same type** (int, String, etc.)
                </Text>
            </View>

            {/* 2. Basic Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Basic Operations</Text>
                <CodeBlock
                    code={`int[] arr = {10, 20, 30, 40, 50};

// Access
System.out.println(arr[0]);           // 10
System.out.println(arr[arr.length-1]); // 50

// Update
arr[2] = 99;  // Now: {10, 20, 99, 40, 50}

// Traverse
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i] + " ");
}`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    • Use **[index]** to read or change values{"\n"}
                    • **arr.length** = total items
                </Text>
            </View>

            {/* 3. Insert Element */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Insert at Index</Text>
                <CodeBlock
                    code={`int[] arr = {10, 20, 30, 40, 50};
int pos = 2, val = 25;
int[] newArr = new int[arr.length + 1];

for (int i = 0, j = 0; i < newArr.length; i++) {
    if (i == pos) newArr[i] = val;
    else newArr[i] = arr[j++];
}

// Result: {10, 20, 25, 30, 40, 50}`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    • Create **new array** (+1 size){"\n"}
                    • Copy old values, **insert new one** at `pos`
                </Text>
            </View>

            {/* 4. Delete Element */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Delete at Index</Text>
                <CodeBlock
                    code={`int[] arr = {10, 20, 30, 40, 50};
int pos = 3;
int[] newArr = new int[arr.length - 1];

for (int i = 0, j = 0; i < arr.length; i++) {
    if (i != pos) newArr[j++] = arr[i];
}

// Result: {10, 20, 30, 50}`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    • Create **smaller array** (-1 size){"\n"}
                    • **Skip** the element at `pos`
                </Text>
            </View>

            {/* 5. Search */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Search for Value</Text>
                <CodeBlock
                    code={`int key = 30;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
        System.out.println("Found at index: " + i);
        break;
    }
}`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    • Loop through → return **index** if found
                </Text>
            </View>

            {/* 6. Max & Min */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Find Max & Min</Text>
                <CodeBlock
                    code={`int max = arr[0], min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
System.out.println("Max: " + max + ", Min: " + min);`}
                    language="java"
                />
                <Text style={[styles.explain, { color: theme.colors.secondary }]}>
                    • Start with **first element**{"\n"}
                    • Compare each → **update** max/min
                </Text>
            </View>

            {/* VISUALIZER BUTTON */}
            <TouchableOpacity
                onPress={() => router.push('/DataVisualizer/ArrayVisual')}
                style={styles.visualizeBtn}
            >
                <Text style={styles.btnText}>Open Visualizer</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    section: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 8,
    },
    explain: {
        marginTop: 12,
        fontSize: 14,
        fontStyle: 'italic',
        lineHeight: 20,
    },
    visualizeBtn: {
        backgroundColor: '#34D399',
        marginHorizontal: 16,
        marginVertical: 24,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default Arrays;