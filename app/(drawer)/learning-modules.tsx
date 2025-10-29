import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import ExpandableItems from '../components/ExpandableItems';
import { useNavigation } from '@react-navigation/native';

export default function LearningModules() {
    const navigation = useNavigation();
    const { theme } = useTheme();

    // ✅ handle navigation when a topic is selected
    const handleSelect = (topic: string) => {
        // Clean up topic names to match Stack.Screen names
        const formattedTopic = topic.replace(/\s+/g, '');

        // Navigate to the corresponding screen
        navigation.navigate(formattedTopic as never);
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
            onSelectItem={handleSelect}
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
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
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
