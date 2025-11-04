import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../Themes/Themecontext';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const { theme, isDark, toggleTheme } = useTheme();

    const features = [
        {
            title: 'AlgoTrainer',
            description: 'Learn Data Structures & Algorithms the smart way',
            icon: 'school',
            color: '#4CAF50'
        },
        {
            title: 'Interactive Learning',
            description: 'Visualize algorithms with step-by-step animations',
            icon: 'animation',
            color: '#2196F3'
        },
        {
            title: 'Practice Problems',
            description: 'Solve problems with real-time feedback',
            icon: 'code',
            color: '#FF9800'
        },
        {
            title: 'Track Progress',
            description: 'Monitor your learning journey',
            icon: 'trending-up',
            color: '#9C27B0'
        },
    ];

    const handleToggleTheme = () => {
        // call the theme toggle from context and log the change
        toggleTheme();
        console.log(`Theme changed to: ${isDark ? 'Light' : 'Dark'}`);
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            {/* Main Content */}
            <ScrollView
                style={[styles.content, { paddingTop: 0 }]}
                contentContainerStyle={{ paddingTop: insets.top }}
            >
                {/* Welcome Card */}
                <View style={[styles.welcomeCard, { backgroundColor: theme.colors.surface }]}>
                    <View style={styles.welcomeTextContainer}>
                        <Text style={[styles.welcomeTitle, { color: theme.colors.text }]}>
                            Welcome to AlgoTrainer
                        </Text>
                        <Text style={[styles.welcomeSubtitle, { color: theme.colors.description }]}>
                            Start your journey to master algorithms today!
                        </Text>
                    </View>
                </View>

                {/* Features Grid */}
                <View style={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.featureCard, { backgroundColor: theme.colors.surface }]}
                            activeOpacity={0.8}
                        >
                            <View style={[styles.iconContainer, { backgroundColor: `${feature.color}20` }]}>
                                <MaterialIcons name={feature.icon as any} size={24} color={feature.color} />
                            </View>
                            <Text style={[styles.featureTitle, { color: theme.colors.text }]}>
                                {feature.title}
                            </Text>
                            <Text style={[styles.featureDescription, { color: theme.colors.description }]}>
                                {feature.description}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Header styles removed as they're not needed anymore
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    themeToggle: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 8,
    },
    welcomeCard: {
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    welcomeTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    welcomeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    welcomeSubtitle: {
        fontSize: 14,
        opacity: 0.8,
    },
    welcomeImage: {
        width: 120,
        height: 120,
    },
    featuresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    featureCard: {
        width: '48%',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    featureDescription: {
        fontSize: 12,
        opacity: 0.7,
    },
});

export default HomeScreen;
