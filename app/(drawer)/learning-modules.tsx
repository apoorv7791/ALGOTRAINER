import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

export default function LearningModules() {
    const { theme } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Learning Modules
            </Text>
            <View style={styles.moduleList}>
                <View style={[styles.moduleCard, { backgroundColor: theme.colors.card }]}>
                    <Text style={[styles.moduleTitle, { color: theme.colors.text }]}>
                        Introduction to Algorithms
                    </Text>
                    <Text style={[styles.moduleDescription, { color: theme.colors.text }]}>
                        Learn the basics of algorithms and problem-solving techniques.
                    </Text>
                </View>
                <View style={[styles.moduleCard, { backgroundColor: theme.colors.card }]}>
                    <Text style={[styles.moduleTitle, { color: theme.colors.text }]}>
                        Data Structures
                    </Text>
                    <Text style={[styles.moduleDescription, { color: theme.colors.text }]}>
                        Master arrays, linked lists, trees, and more.
                    </Text>
                </View>

                <View style={[styles.moduleCard, { backgroundColor: theme.colors.card }]}>
                    <Text style={[styles.moduleTitle, { color: theme.colors.text }]}>
                        Master Algorithms and Advanced Techniques.
                    </Text>
                    <Text style={[styles.moduleDescription, { color: theme.colors.text }]}>
                        Learn advanced algorithms and techniques to solve complex problems.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
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