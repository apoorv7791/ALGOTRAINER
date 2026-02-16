import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../Themes/ThemeContext';
import * as ScreenOrientation from 'expo-screen-orientation';

const features = [
    { title: 'AlgoTrainer', description: 'Learn Data Structures & Algorithms the smart way', icon: 'school', color: '#4CAF50' },
    { title: 'Interactive Learning', description: 'Visualize algorithms with step-by-step animations', icon: 'play-circle-outline', color: '#2196F3' },
    { title: 'Practice Problems', description: 'Solve problems with real-time feedback', icon: 'code', color: '#FF9800' },
    { title: 'Track Progress', description: 'Monitor your learning journey', icon: 'trending-up', color: '#9C27B0' },
];

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const { theme, isDark, toggleTheme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const { width, height } = Dimensions.get('window');
        setIsLandscape(width > height);

        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    const renderFeature = ({ item }: any) => (
        <TouchableOpacity style={[styles.featureCard, { backgroundColor: theme.colors.surface }]} activeOpacity={0.8}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                <MaterialIcons name={item.icon as any} size={24} color={item.color} />
            </View>
            <Text style={[styles.featureTitle, { color: theme.colors.text }]}>{item.title}</Text>
            <Text style={[styles.featureDescription, { color: theme.colors.description }]}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={{ paddingTop: insets.top, paddingHorizontal: 16 }}>
                <View style={[styles.welcomeCard, { backgroundColor: theme.colors.surface }]}>
                    <Text style={[styles.welcomeTitle, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                        Welcome to AlgoTrainer
                    </Text>
                    <Text style={[styles.welcomeSubtitle, { color: theme.colors.description }]}>
                        Start your journey to master algorithms today!{"\n"}Don't just understand DSA—Feel it
                    </Text>
                </View>

                <FlatList
                    data={features}
                    keyExtractor={(item) => item.title}
                    renderItem={renderFeature}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
                    scrollEnabled={false}
                />

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    welcomeCard: { borderRadius: 16, padding: 20, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    welcomeTitle: { fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
    welcomeSubtitle: { fontSize: 14, opacity: 0.8, textAlign: 'center' },
    featureCard: {
        width: '48%',  // Each card takes ~48% of row width
        borderRadius: 12,
        padding: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 0, // Margin is handled by columnWrapperStyle
    },

    iconContainer: { width: 48, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
    featureTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
    featureDescription: { fontSize: 12, opacity: 0.7 },
});

export default HomeScreen;
