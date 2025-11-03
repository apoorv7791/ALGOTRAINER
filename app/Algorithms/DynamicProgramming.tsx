import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const DynamicProgramming = () => {
    const { theme } = useTheme();

    const memoizationCode = `
import java.util.HashMap;

public class FibonacciMemoization {

    static HashMap<Integer, Integer> memo = new HashMap<>();

    public static int fibonacci(int n) {
        if (n <= 1)
            return n;
        if (memo.containsKey(n))
            return memo.get(n);
        
        int result = fibonacci(n - 1) + fibonacci(n - 2);
        memo.put(n, result);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(6)); // Output: 8
    }
}
`;

    const tabulationCode = `
public class FibonacciTabulation {

    public static int fibonacci(int n) {
        if (n <= 1)
            return n;

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
}
`;

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ padding: 20 }}
        >
            <Text style={[styles.header, { color: theme.colors.text }]}>
                Dynamic Programming
            </Text>

            <Text style={[styles.paragraph, { color: theme.colors.text }]}>
                Dynamic Programming (DP) is a problem-solving technique used to optimize recursive
                solutions by storing the results of subproblems. It’s widely used in problems like
                Fibonacci, Knapsack, and Longest Common Subsequence.
            </Text>

            {/* --- MEMOIZATION SECTION --- */}
            <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                🧠 Step 1: Memoization (Top-Down)
            </Text>

            <Text style={[styles.paragraph, { color: theme.colors.text }]}>
                In Memoization, we solve the problem recursively and store already computed results
                to avoid recomputation. This approach works from the top (main problem) to the bottom
                (subproblems).
            </Text>

            <CodeBlock code={memoizationCode} language="java" />

            <Text style={[styles.explanation, { color: theme.colors.text }]}>
                ✅ Here, we use a HashMap called <Text style={styles.bold}>memo</Text> to store results
                of already computed Fibonacci numbers. This drastically reduces redundant calls.
            </Text>

            {/* --- TABULATION SECTION --- */}
            <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                ⚙️ Step 2: Tabulation (Bottom-Up)
            </Text>

            <Text style={[styles.paragraph, { color: theme.colors.text }]}>
                In Tabulation, we use an iterative approach. We start from the base cases and build
                the solution step by step using an array (table). It avoids recursion and is usually
                more space-efficient.
            </Text>

            <CodeBlock code={tabulationCode} language="java" />

            <Text style={[styles.explanation, { color: theme.colors.text }]}>
                ✅ This method fills an array <Text style={styles.bold}>dp[]</Text> from the smallest
                subproblems (0 and 1) up to <Text style={styles.bold}>n</Text>. It’s efficient and
                easy to debug.
            </Text>

            <Text style={[styles.footer, { color: theme.colors.text }]}>
                🚀 Now you understand both ways to apply Dynamic Programming:
                <Text style={styles.bold}> Memoization (Top-Down)</Text> and
                <Text style={styles.bold}> Tabulation (Bottom-Up)</Text>.
                <Text style={styles.bold}> Recursive Backtracking</Text>.
                Try applying them to problems like Climbing Stairs, Knapsack, or Longest Increasing Subsequence!
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 25,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
    explanation: {
        fontSize: 15,
        lineHeight: 22,
        marginTop: 8,
        marginBottom: 12,
        fontStyle: 'italic',
    },
    bold: {
        fontWeight: 'bold',
    },
    footer: {
        fontSize: 16,
        marginTop: 25,
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

export default DynamicProgramming;
