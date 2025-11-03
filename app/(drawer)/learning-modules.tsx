import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import ExpandableItems from '../components/ExpandableItems';
import { useRouter } from "expo-router";

export default function LearningModules() {
    const router = useRouter();
    const { theme } = useTheme();

    // ✅ handle navigation when a topic is selected
    const handleSelect = (module: string, topic: string) => {
        const formattedTopic = topic.replace(/[^a-zA-Z0-9]/g, '');
        if (module === "Data Structures") {
            router.push(`/DataStructures/${formattedTopic}`);
        } else if (module == "Algorithms") {
            router.push(`/Algorithms/${formattedTopic}`);
        }
    };

    const modules = [
        {
            title: "Data Structures",
            items: ["Arrays", "Linked List", "HashMaps", "Stacks", "Queues", "Trees", "Graphs"]
        },
        {
            title: "Algorithms",
            items: ["Sorting", "Searching", "Dynamic Programming", "Greedy", "Graph Algorithms", "Backtracking"]
        }
    ];

    interface Module {
        title: string;
        items: string[];
    }

    const renderItem = ({ item }: { item: Module }) => (
        <ExpandableItems
            title={item.title}
            items={item.items}
            // 🧩 Pass both module name and topic to handleSelect
            onSelectItem={(topic) => handleSelect(item.title, topic)}
        />
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.heading, { color: theme.colors.text }]}>Learning Modules</Text>
            <FlatList
                data={modules}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contentContainer: {
        paddingBottom: 40,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
