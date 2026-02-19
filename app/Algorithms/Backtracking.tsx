import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRouter } from 'expo-router';


interface Section {
    id: string;
    title: string;
    content?: string;
    code?: string;
    codeLanguage?: string;
}
const SubsetsCode = `import java.util.*;

public class Subsets {
    static List<List<Integer>> result = new ArrayList<>();

    static void backtrack(int index, int[] nums, List<Integer> current) {
        result.add(new ArrayList<>(current));
        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);       
            backtrack(i + 1, nums, current); 
            current.remove(current.size() - 1); 
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        backtrack(0, nums, new ArrayList<>());
        System.out.println(result);
    }
}`;

const backtrackingSections: Section[] = [
    {
        id: 'intro',
        title: 'Backtracking',
        content: 'Backtracking is a problem-solving approach where we build solutions step by step and undo (backtrack) when a path doesn’t lead to a valid solution.',
    },
    {
        id: 'analogy',
        title: '🧠 Simple Analogy',
        content: 'Think of it like exploring all outfit combinations — you try one, see if it works, and if not, change one piece and try again. That’s how backtracking explores all possible options.',
    },
    {
        id: 'example',
        title: '🧩 Example: Generating Subsets',
        content: 'Given an array [1, 2, 3], we want all subsets — [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]. The algorithm picks elements one by one, explores deeper, and removes them (backtracks) afterward.',
        code: SubsetsCode,
        codeLanguage: 'java',
    },
    {
        id: 'explanation',
        title: '✅ Explanation',
        content: 'Each recursive call adds one element to the current list, explores further, and then removes it to explore a new path — that’s the essence of backtracking.',
    },
    {
        id: 'footer',
        title: '🚀 Usage',
        content: 'Backtracking is used for problems like subsets, permutations, Sudoku solving, and pathfinding. Once you get this pattern, you can apply it to many other challenges!',
    },
]


const Backtracking = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);
    const router = useRouter();

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
            {item.code && <CodeBlock code={item.code} language={item.codeLanguage} fontSize={isLandscape ? 10 : 12} />}
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView
                style={[styles.container, { backgroundColor: theme.colors.background }]}
                contentContainerStyle={[styles.content, { padding: isLandscape ? 12 : 20 }]}
            >
                <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                    Backtracking
                </Text>

                <FlatList
                    data={backtrackingSections}
                    keyExtractor={(item) => item.id}
                    renderItem={renderSection}
                    scrollEnabled={false}
                />

                <TouchableOpacity
                    onPress={() => router.push('/AlgoVisualizer/BackTrackingVisual')}
                    style={styles.visualizeBtn}
                >
                    <Text style={styles.btnText}>Open Visualizer</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingTop: 20, paddingBottom: 40 },
    header: { fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
    section: { marginBottom: 25 },
    subHeader: { fontWeight: '600', marginBottom: 10 },
    paragraph: { lineHeight: 24, marginBottom: 10 },
    visualizeBtn: {
        backgroundColor: '#34D399',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});

export default Backtracking;