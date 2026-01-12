import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import { ScrollView } from 'react-native-gesture-handler';
import CodeBlock from '../CodeBlock/CodeBlock';

const BacktrackingPattern = () => {
    const { theme } = useTheme();

    const pseudocode = `function backtrack(solution):
    if solution is complete:
        process(solution)
        return
    
    for each choice in possible choices:
        if choice is valid:
            make(choice)
            backtrack(solution with choice)
            undo(choice)  // backtrack step
    `;

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
                <Text style={[styles.heading, { color: theme.colors.text }]}>
                    BackTracking Technique
                </Text>
                <Text style={[styles.description, { color: theme.colors.text }]}>
                    Backtracking is a **systematic way of exploring all possible solutions**
                    for a problem. It builds the solution step by step, and if it realizes
                    that the current path cannot lead to a valid result, it **goes back**
                    (or backtracks) to try another possibility.
                </Text>
                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    How It Works
                </Text>

                <Text style={[styles.description, { color: theme.colors.text }]}>
                    1. Choose one option at a time.
                    {"\n"}2. Check if it leads to a valid state.
                    {"\n"}3. If yes, continue exploring deeper.
                    {"\n"}4. If not, **undo** the last step and try the next possibility.
                    {"\n"}5. Repeat until all possibilities are explored.
                </Text>

                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    General Pseudocode
                </Text>

                <CodeBlock code={pseudocode.trim()} />

                <Text style={[styles.subheading, { color: theme.colors.text }]}>
                    Key Takeaways
                </Text>

                <Text style={[styles.description, { color: theme.colors.text }]}>
                    • Backtracking combines **recursion** with **decision undoing**.{"\n"}
                    • It is a more efficient version of brute force.{"\n"}
                    • Ideal for problems involving **combinations, permutations, and constraints**.{"\n"}
                    • Examples include Sudoku Solver, Maze Path, and Subset Generation.
                </Text>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
})

export default BacktrackingPattern;
