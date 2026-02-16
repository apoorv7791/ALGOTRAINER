import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import * as ScreenOrientation from 'expo-screen-orientation';

interface BulletPoint {
    id: string;
    text: string;
}

interface Section {
    id: string;
    title: string;
    bullets?: BulletPoint[];
    content?: string;
    code?: string;
    codeLanguage?: string;
}

const greedySections: Section[] = [
    {
        id: 'definition',
        title: 'Definition',
        bullets: [
            {
                id: 'd1',
                text: 'Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit.',
            },
            {
                id: 'd2',
                text: 'They make a series of choices, each of which looks best at the moment, without worrying about the overall problem.',
            },
            {
                id: 'd3',
                text: 'Often used for optimization problems where we aim to maximize or minimize some value.',
            },
        ],
    },
    {
        id: 'characteristics',
        title: 'Characteristics',
        bullets: [
            { id: 'c1', text: 'Makes locally optimal choices at each step.' },
            { id: 'c2', text: 'May not always lead to the global optimum, but is efficient and simple.' },
            { id: 'c3', text: 'Works well when a problem has the “greedy-choice property” and “optimal substructure”.' },
        ],
    },
    {
        id: 'example',
        title: 'Example: Coin Change Problem',
        content: `Given a set of coin denominations and a total amount, the goal is to make that amount using the fewest number of coins.

Steps:
1. Sort all coin denominations in descending order.
2. Pick the largest coin that does not exceed the remaining amount.
3. Subtract that coin’s value from the amount.
4. Repeat steps 2–3 until the remaining amount becomes 0.

Example:
Coins = [10, 5, 1], Amount = 28
→ Pick 10 → 18 left
→ Pick 10 → 8 left
→ Pick 5 → 3 left
→ Pick 1 → 2 left
→ Pick 1 → 1 left
→ Pick 1 → 0 left

Total coins used = 6`,
    },
    {
        id: 'code',
        title: 'Code Example of Greedy Concept',
        code: `function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return count;
}

// Example
console.log(coinChange([10, 5, 1], 28)); // Output: 6`,
        codeLanguage: 'javascript',
    },
];

const Greedy = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });
        return () => subscription?.remove();
    }, []);

    const renderBullet = ({ item }: { item: BulletPoint }) => (
        <View style={styles.bulletContainer}>
            <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
            <Text style={[styles.text, { color: theme.colors.text }]}>{item.text}</Text>
        </View>
    );

    const renderSection = ({ item }: { item: Section }) => (
        <View style={styles.section}>
            <Text style={[styles.subHeader, { color: theme.colors.text }]}>{item.title}</Text>
            {item.bullets && (
                <FlatList
                    data={item.bullets}
                    keyExtractor={b => b.id}
                    renderItem={renderBullet}
                />
            )}
            {item.content && <Text style={[styles.text, { color: theme.colors.text }]}>{item.content}</Text>}
            {item.code && (
                <CodeBlock code={item.code} language={item.codeLanguage} fontSize={isLandscape ? 10 : 12} />
            )}
        </View>
    );

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                Greedy Algorithms
            </Text>
            <FlatList
                data={greedySections}
                keyExtractor={s => s.id}
                renderItem={renderSection}
                scrollEnabled={false}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, paddingTop: 30 },
    header: { fontSize: 26, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
    section: { marginBottom: 25 },
    subHeader: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
    bulletContainer: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
    text: { fontSize: 15, lineHeight: 22, flex: 1 },
});

export default Greedy;
