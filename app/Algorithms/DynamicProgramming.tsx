import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import * as ScreenOrientation from 'expo-screen-orientation';

interface Section {
    id: string;
    title: string;
    content?: string;
    code?: string;
    codeLanguage?: string;
    explanation?: string;
}

const dpSections: Section[] = [
    {
        id: 'intro',
        title: 'Dynamic Programming',
        content: `Dynamic Programming (DP) is a problem-solving technique used to optimize recursive
solutions by storing the results of subproblems. It’s widely used in problems like
Fibonacci, Knapsack, and Longest Common Subsequence.`,
    },
    {
        id: 'memoization',
        title: '🧠 Step 1: Memoization (Top-Down)',
        content: `In Memoization, we solve the problem recursively and store already computed results
to avoid recomputation. This approach works from the top (main problem) to the bottom
(subproblems).`,
        code: `
import java.util.HashMap;

public class FibonacciMemoization {
    static HashMap<Integer, Integer> memo = new HashMap<>();

    public static int fibonacci(int n) {
        if (n <= 1) return n;
        if (memo.containsKey(n)) return memo.get(n);

        int result = fibonacci(n - 1) + fibonacci(n - 2);
        memo.put(n, result);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(6)); // Output: 8
    }
}`,
        explanation: `✅ Here, we use a HashMap called memo to store results of already computed Fibonacci numbers. This drastically reduces redundant calls.`,
        codeLanguage: 'java',
    },
    {
        id: 'tabulation',
        title: '⚙️ Step 2: Tabulation (Bottom-Up)',
        content: `In Tabulation, we use an iterative approach. We start from the base cases and build
the solution step by step using an array (table). It avoids recursion and is usually
more space-efficient.`,
        code: `
public class FibonacciTabulation {
    public static int fibonacci(int n) {
        if (n <= 1) return n;

        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(6)); // Output: 8
    }
}`,
        explanation: `✅ This method fills an array dp[] from the smallest subproblems (0 and 1) up to n. It’s efficient and easy to debug.`,
        codeLanguage: 'java',
    },
    {
        id: 'footer',
        title: '🚀 Summary',
        content: `Now you understand both ways to apply Dynamic Programming: Memoization (Top-Down) and Tabulation (Bottom-Up). Recursive Backtracking is another related technique. Try applying them to problems like Climbing Stairs, Knapsack, or Longest Increasing Subsequence!`,
    },
];

const DynamicProgramming = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        ScreenOrientation.unlockAsync();

        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    const renderSection = ({ item }: { item: Section }) => (
        <View style={styles.section}>
            <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 18 : 20 }]}>
                {item.title}
            </Text>
            {item.content && (
                <Text style={[styles.paragraph, { color: theme.colors.text, fontSize: isLandscape ? 14 : 16 }]}>
                    {item.content}
                </Text>
            )}
            {item.code && (
                <CodeBlock
                    code={item.code}
                    language={item.codeLanguage}
                    fontSize={isLandscape ? 10 : 12}
                />
            )}
            {item.explanation && (
                <Text style={[styles.explanation, { color: theme.colors.text, fontSize: isLandscape ? 13 : 15 }]}>
                    {item.explanation}
                </Text>
            )}
        </View>
    );

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ padding: 20 }}
        >
            <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                Dynamic Programming
            </Text>

            <FlatList
                data={dpSections}
                keyExtractor={(item) => item.id}
                renderItem={renderSection}
                scrollEnabled={false}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    section: { marginBottom: 25 },
    subHeader: { fontWeight: '600', marginBottom: 10 },
    paragraph: { lineHeight: 24, marginBottom: 10 },
    explanation: { lineHeight: 22, marginTop: 8, marginBottom: 12, fontStyle: 'italic' },
});

export default DynamicProgramming;
