import React from 'react';
import { StyleSheet, View, Text, Platform, ScrollView, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../Themes/Themecontext';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const { theme, isDark, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { paddingTop: insets.top, backgroundColor: theme.colors.background }]}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
                    <View style={styles.headerLeft}>
                        <MaterialCommunityIcons
                            name="brain"
                            size={26}
                            color={theme.colors.primary}
                            style={styles.icon}
                        />
                        <Text style={[styles.text, { color: theme.colors.text }]}>AlgoTrainer</Text>
                    </View>
                    <Switch
                        value={isDark}
                        onValueChange={toggleTheme}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        style={styles.themeSwitch}
                    />
                </View>

                {/* Cards */}
                <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
                    <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                        Welcome to AlgoTrainer
                    </Text>
                    <Text style={[styles.cardDescription, { color: theme.colors.secondary }]}>
                        Learn Data Structures & Algorithms the smart way — with interactive
                        visualizations, real-world analogies, and hands-on practice.
                    </Text>
                </View>

                <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
                    <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                        What's the Mission?
                    </Text>
                    <Text style={[styles.cardDescription, { color: theme.colors.secondary }]}>
                        Our mission is to make learning DSA simple, engaging, and relatable —
                        by connecting complex concepts with real-world analogies and examples.
                    </Text>
                </View>

                <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
                    <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                        Future of AlgoTrainer
                    </Text>
                    <Text style={[styles.cardDescription, { color: theme.colors.secondary }]}>
                        In the future, AlgoTrainer will expand beyond DSA — covering key
                        Computer Science subjects, from Operating Systems to Databases, with
                        the same interactive style.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    themeSwitch: {
        transform: Platform.OS === 'ios' ? [{ scaleX: 0.8 }, { scaleY: 0.8 }] : [],
    },
    card: {
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
    },
    cardDescription: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 16,
    },
});

export default HomeScreen;
