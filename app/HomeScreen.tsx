import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
    const quickActions = [
        { id: '1', name: 'Start Learning', icon: 'school-outline', color: '#4CAF50' },
        { id: '2', name: 'Track Progress', icon: 'stats-chart-outline', color: '#2196F3' },
        { id: '3', name: 'Daily Challenge', icon: 'rocket-outline', color: '#FF9800' }
    ];

    return (
        <ScrollView style={style.container} contentContainerStyle={style.scrollContent}>
            <View style={style.heroSection}>
                <Text style={style.heroTitle}>🧠 AlgoTrainer</Text>
                <Text style={style.heroSubtitle}>Master Data Structures & Algorithms</Text>
            </View>

            <View style={style.welcomeCard}>
                <Text style={style.welcomeTitle}>Welcome, Learner!</Text>
                <Text style={style.welcomeText}>
                    Embark on a journey to become a proficient programmer by mastering the fundamentals of Data Structures and Algorithms.
                </Text>
            </View>

            <View style={style.quickActionsContainer}>
                <Text style={style.sectionTitle}>Quick Actions</Text>
                <View style={style.quickActionsGrid}>
                    {quickActions.map((action) => (
                        <TouchableOpacity
                            key={action.id}
                            style={[style.quickActionButton, { backgroundColor: action.color }]}
                        >
                            <Ionicons name={action.icon} size={30} color="white" />
                            <Text style={style.quickActionText}>{action.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={style.dailyTipCard}>
                <Text style={style.dailyTipTitle}>💡 Daily Learning Tip</Text>
                <Text style={style.dailyTipText}>
                    Consistent practice is key to mastering algorithms. Try solving at least one coding problem every day!
                </Text>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    scrollContent: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    heroSection: {
        alignItems: "center",
        marginBottom: 20,
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#007bff",
    },
    heroSubtitle: {
        fontSize: 16,
        color: "#666",
    },
    welcomeCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    welcomeTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    quickActionsContainer: {
        marginBottom: 20,
    },
    quickActionsGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    quickActionButton: {
        width: "30%",
        aspectRatio: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    quickActionText: {
        color: "white",
        fontSize: 10,
        marginTop: 5,
        textAlign: "center",
    },
    dailyTipCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    dailyTipTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    dailyTipText: {
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
    },
})