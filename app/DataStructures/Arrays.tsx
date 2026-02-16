import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const Arrays = () => {
    const { theme } = useTheme();
    const router = useRouter();

    // Define all array topics as a list of sections
    const sections = [
        {
            key: 'what-is-array',
            title: 'What is an Array?',
            content: [
                '• A collection of items',
                '• Each item has an **index** [0, 1, 2... ]',
                '• All items are **same type** (int, String, etc.)',
            ],
        },
        {
            key: 'basic-operations',
            title: 'Basic Operations',
            code: `int[] arr = {10, 20, 30, 40, 50};

// Access
System.out.println(arr[0]);           // 10
System.out.println(arr[arr.length-1]); // 50

// Update
arr[2] = 99;  // Now: {10, 20, 99, 40, 50}

// Traverse
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i] + " ");
}`,
            explain: '• Use **[index]** to read or change values\n• **arr.length** = total items',
        },
        {
            key: 'insert-element',
            title: 'Insert at Index',
            code: `int[] arr = {10, 20, 30, 40, 50};
int pos = 2, val = 25;
int[] newArr = new int[arr.length + 1];

for (int i = 0, j = 0; i < newArr.length; i++) {
    if (i == pos) newArr[i] = val;
    else newArr[i] = arr[j++];
}

// Result: {10, 20, 25, 30, 40, 50}`,
            explain: '• Create **new array** (+1 size)\n• Copy old values, **insert new one** at `pos`',
        },
        {
            key: 'delete-element',
            title: 'Delete at Index',
            code: `int[] arr = {10, 20, 30, 40, 50};
int pos = 3;
int[] newArr = new int[arr.length - 1];

for (int i = 0, j = 0; i < arr.length; i++) {
    if (i != pos) newArr[j++] = arr[i];
}

// Result: {10, 20, 30, 50}`,
            explain: '• Create **smaller array** (-1 size)\n• **Skip** the element at `pos`',
        },
        {
            key: 'search',
            title: 'Search for Value',
            code: `int key = 30;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
        System.out.println("Found at index: " + i);
        break;
    }
}`,
            explain: '• Loop through → return **index** if found',
        },
        {
            key: 'max-min',
            title: 'Find Max & Min',
            code: `int max = arr[0], min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
System.out.println("Max: " + max + ", Min: " + min);`,
            explain: '• Start with **first element**\n• Compare each → **update** max/min',
        },
        {
            key: 'visualizer-button',
            isButton: true,
        },
    ];

    const renderItem = ({ item }: any) => {
        if (item.isButton) {
            return (
                <TouchableOpacity
                    onPress={() => router.push('/DataVisualizer/ArrayVisual')}
                    style={[styles.visualizeBtn, { backgroundColor: theme.colors.primary }]}
                >
                    <Text style={styles.btnText}>Open Visualizer</Text>
                </TouchableOpacity>
            );
        }

        return (
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>{item.title}</Text>
                {item.content &&
                    item.content.map((line: string, idx: number) => (
                        <Text key={idx} style={[styles.bullet, { color: theme.colors.text }]}>
                            {line}
                        </Text>
                    ))}
                {item.code && <CodeBlock code={item.code} language="java" />}
                {item.explain && (
                    <Text style={[styles.explain, { color: theme.colors.secondary }]}>{item.explain}</Text>
                )}
            </View>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 50,
        backgroundColor: '#fff',
    },
    section: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 6,
    },
    explain: {
        marginTop: 12,
        fontSize: 14,
        fontStyle: 'italic',
        lineHeight: 20,
    },
    visualizeBtn: {
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
