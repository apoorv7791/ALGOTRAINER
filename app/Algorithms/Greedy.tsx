import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Dimensions } from 'react-native';

const Greedy = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = React.useState(false);

    React.useEffect(() => {
        // 🔓 Allow both orientations
        ScreenOrientation.unlockAsync();

        // 📱 Listen for orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, {
                color: theme.colors.text, fontSize: isLandscape ? 22 : 26

            }]}>
                Greedy Algorithms
            </Text>

            {/* Definition Section */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                    Definition
                </Text>
                <View style={styles.bulletContainer}>
                    <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
                    <Text style={[styles.text, { color: theme.colors.text }]}>
                        Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit.
                    </Text>
                </View>
                <View style={styles.bulletContainer}>
                    <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
                    <Text style={[styles.text, { color: theme.colors.text }]}>
                        They make a series of choices, each of which looks best at the moment, without worrying about the overall problem.
                    </Text>
                </View>
                <View style={styles.bulletContainer}>
                    <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
                    <Text style={[styles.text, { color: theme.colors.text }]}>
                        Often used for optimization problems where we aim to maximize or minimize some value.
                    </Text>
                </View>
            </View>

            {/* Characteristics Section */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                    Characteristics
                </Text>
                <View style={styles.bulletContainer}>
                    <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
                    <Text style={[styles.text, { color: theme.colors.text }]}>
                        Makes locally optimal choices at each step.
                    </Text>
                </View>
                <View style={styles.bulletContainer}>
                    <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
                    <Text style={[styles.text, { color: theme.colors.text }]}>
                        May not always lead to the global optimum, but is efficient and simple.
                    </Text>
                </View>
                <View style={styles.bulletContainer}>
                    <MaterialCommunityIcons name="circle-small" size={18} color={theme.colors.text} />
                    <Text style={[styles.text, { color: theme.colors.text }]}>
                        Works well when a problem has the “greedy-choice property” and “optimal substructure”.
                    </Text>
                </View>
            </View>

            {/* Example Section */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                    Example: Coin Change Problem
                </Text>
                <Text style={[styles.text, { color: theme.colors.text }]}>
                    Given a set of coin denominations and a total amount, the goal is to make that amount using the fewest number of coins.{"\n\n"}
                    Steps:{"\n"}
                    1. Sort all coin denominations in descending order.{"\n"}
                    2. Pick the largest coin that does not exceed the remaining amount.{"\n"}
                    3. Subtract that coin’s value from the amount.{"\n"}
                    4. Repeat steps 2–3 until the remaining amount becomes 0.{"\n\n"}
                    Example:{"\n"}
                    Coins = [10, 5, 1], Amount = 28{"\n"}
                    → Pick 10 → 18 left{"\n"}
                    → Pick 10 → 8 left{"\n"}
                    → Pick 5 → 3 left{"\n"}
                    → Pick 1 → 2 left{"\n"}
                    → Pick 1 → 1 left{"\n"}
                    → Pick 1 → 0 left{"\n\n"}
                    Total coins used = 6
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>
                    Code Exapmple of Greedy Concetp
                </Text>
                <CodeBlock
                    code={`function coinChange(coins, amount) {
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
console.log(coinChange([10, 5, 1], 28)); // Output: 6`}
                    language="javascript"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    section: {
        marginBottom: 25,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    bulletContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        flex: 1,
    },
});

export default Greedy;
