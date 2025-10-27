import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import ExpandableItems from '../components/ExpandableItems';

export default function LearningModules() {
    const handleSelect = (topic: string) => { // a function to handle item selection
        alert(`Selected topic: ${topic}`); // alert message to show selected topic
        // navigating to the topic's detailed screen can be implemented here

    }
    const { theme } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.heading, { color: theme.colors.text }]}>Learning Modules</Text>
            <ExpandableItems
                title="Data Structures"
                items={["Arrays", "Linked List", "Stacks", "Queues", "Trees", "Graphs"]}
                onSelectItem={handleSelect}
            />

            <ExpandableItems
                title="Algorithms"
                items={["Sorting", "Searching", "Dynamic Programming", "Greedy Algorithms", "Graph Algorithms", "Backtracking"]}
                onSelectItem={handleSelect}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    moduleList: {
        gap: 15,
    },
    moduleCard: {
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    moduleTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    moduleDescription: {
        fontSize: 14,
        opacity: 0.8,
    },
});