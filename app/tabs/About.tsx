import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>AlgoTrainner</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>About the App</Text>
                    <Text style={styles.text}>
                        AlgoTrainner is an app designed to teach Data Structures and Algorithms in an interactive and engaging way.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Features</Text>
                    <Text style={styles.bulletPoint}>
                        - Understanding topics like arrays, Linked List, stacks, queues, trees, and graphs.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        - Interactive quizzes and challenges to test your knowledge.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        - Real-world examples and applications of algorithms.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        - the app is still in development phase so do not get your hopes up.
                        - However the app's main idea is to teach about data Structures and Algorithms
                        - future updates will include more features and content.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
    },
    scrollView: {
        backgroundColor: "#f8f9fa",
    },
    scrollContainer: {
        padding: 20,
        borderWidth: 2,
        borderColor: 'red',
    },
    header: {
        width: "100%",
        backgroundColor: "#007bff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#fff",
        padding: 36,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20, // Add spacing between cards
    },
    text: {
        fontSize: 20,
        color: "#333",
        marginBottom: 10,
    },
    bulletPoint: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
        marginLeft: 10,
    },
});