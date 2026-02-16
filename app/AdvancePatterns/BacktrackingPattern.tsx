import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import CodeBlock from '../CodeBlock/CodeBlock';

const BacktrackingPattern = () => {
    const { theme } = useTheme();

    const content = [
        {
            type: 'heading',
            text: 'Backtracking Technique',
        },
        {
            type: 'paragraph',
            text: `Backtracking is a systematic way of exploring all possible solutions
for a problem. It builds the solution step by step, and if it realizes
that the current path cannot lead to a valid result, it goes back
(or backtracks) to try another possibility.`,
        },
        {
            type: 'subheading',
            text: 'How It Works',
        },
        {
            type: 'paragraph',
            text: `1. Choose one option at a time.
2. Check if it leads to a valid state.
3. If yes, continue exploring deeper.
4. If not, undo the last step and try the next possibility.
5. Repeat until all possibilities are explored.`,
        },
        {
            type: 'subheading',
            text: 'General Pseudocode',
        },
        {
            type: 'code',
            code: `function backtrack(solution):
    if solution is complete:
        process(solution)
        return
    
    for each choice in possible choices:
        if choice is valid:
            make(choice)
            backtrack(solution with choice)
            undo(choice)  // backtrack step`,
        },
        {
            type: 'subheading',
            text: 'Key Takeaways',
        },
        {
            type: 'paragraph',
            text: `• Backtracking combines recursion with decision undoing.
• It is a more efficient version of brute force.
• Ideal for problems involving combinations, permutations, and constraints.
• Examples include Sudoku Solver, Maze Path, and Subset Generation.`,
        },
    ];

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case 'heading':
                return <Text style={[styles.heading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'subheading':
                return <Text style={[styles.subheading, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'paragraph':
                return <Text style={[styles.paragraph, { color: theme.colors.text }]}>{item.text}</Text>;
            case 'code':
                return (
                    <ScrollView horizontal style={{ marginVertical: 8 }}>
                        <Text
                            style={{
                                fontFamily: 'monospace',
                                fontSize: 14,
                                lineHeight: 20,
                                color: theme.colors.text,
                                backgroundColor: theme.colors.surface || '#f5f5f5',
                                padding: 12,
                                borderRadius: 8,
                            }}
                        >
                            {item.code}
                        </Text>
                    </ScrollView>
                );
            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <FlatList
                data={content}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subheading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 20,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
});

export default BacktrackingPattern;
