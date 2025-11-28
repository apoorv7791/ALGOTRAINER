import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRouter } from 'expo-router';

const Backtracking = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // 🔓 Allow both orientations
        ScreenOrientation.unlockAsync();

        // 📱 Listen for orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    const subsetCode = `
import java.util.*;

public class Subsets {
    static List<List<Integer>> result = new ArrayList<>();

    static void backtrack(int index, int[] nums, List<Integer> current) {
        result.add(new ArrayList<>(current));

        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);       // Choose
            backtrack(i + 1, nums, current); // Explore
            current.remove(current.size() - 1); // Undo (Backtrack)
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        backtrack(0, nums, new ArrayList<>());
        System.out.println(result);
    }
}
`;

    return (
        <ScrollView
            style={[
                styles.container,
                { backgroundColor: theme.colors.background },
            ]}
            contentContainerStyle={[
                styles.content,
                { padding: isLandscape ? 12 : 20 },
            ]}
        >
            <Text
                style={[
                    styles.header,
                    {
                        color: theme.colors.text,
                        fontSize: isLandscape ? 22 : 26,
                    },
                ]}
            >
                Backtracking
            </Text>

            <Text
                style={[
                    styles.paragraph,
                    {
                        color: theme.colors.text,
                        fontSize: isLandscape ? 14 : 16,
                    },
                ]}
            >
                Backtracking is a problem-solving approach where we build solutions step by step
                and undo (backtrack) when a path doesn’t lead to a valid solution.
            </Text>

            <Text
                style={[
                    styles.subHeader,
                    { color: theme.colors.text, fontSize: isLandscape ? 18 : 20 },
                ]}
            >
                🧠 Simple Analogy
            </Text>

            <Text
                style={[
                    styles.paragraph,
                    {
                        color: theme.colors.text,
                        fontSize: isLandscape ? 14 : 16,
                    },
                ]}
            >
                Think of it like exploring all outfit combinations — you try one, see if it works,
                and if not, change one piece and try again.
                That’s how backtracking explores all possible options.
            </Text>

            <Text
                style={[
                    styles.subHeader,
                    { color: theme.colors.text, fontSize: isLandscape ? 18 : 20 },
                ]}
            >
                🧩 Example: Generating Subsets
            </Text>

            <Text
                style={[
                    styles.paragraph,
                    {
                        color: theme.colors.text,
                        fontSize: isLandscape ? 14 : 16,
                    },
                ]}
            >
                Given an array [1, 2, 3], we want all subsets — [], [1], [2], [3], [1,2], [1,3],
                [2,3], [1,2,3].
                The algorithm picks elements one by one, explores deeper, and removes them (backtracks)
                afterward.
            </Text>

            <CodeBlock code={subsetCode} language="java" />

            <Text
                style={[
                    styles.explanation,
                    {
                        color: theme.colors.text,
                        fontSize: isLandscape ? 13 : 15,
                    },
                ]}
            >
                ✅ Each recursive call adds one element to the current list, explores further,
                and then removes it to explore a new path — that’s the essence of backtracking.
            </Text>

            <Text
                style={[
                    styles.footer,
                    {
                        color: theme.colors.text,
                        fontSize: isLandscape ? 14 : 16,
                    },
                ]}
            >
                🚀 Backtracking is used for problems like subsets, permutations, Sudoku solving,
                and pathfinding. Once you get this pattern, you can apply it to many other challenges!
            </Text>
            <TouchableOpacity onPress={() => router.push('/AlgoVisualizer/BackTrackingVisual')}
                style={styles.visualizeBtn}
            >
                <Text style={styles.btnText}>Open Visualizer</Text>
            </TouchableOpacity >
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { padding: 20 },
    header: {
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subHeader: {
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        lineHeight: 24,
        marginBottom: 10,
    },
    explanation: {
        lineHeight: 22,
        marginTop: 8,
        marginBottom: 12,
        fontStyle: 'italic',
    },
    footer: {
        marginTop: 25,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    visualizeBtn: {
        backgroundColor: '#34D399',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#FF6B6B',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Backtracking;
