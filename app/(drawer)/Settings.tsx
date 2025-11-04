import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import ExpandableItems from '../components/ExpandableItems';
import * as ScreenOrientation from 'expo-screen-orientation';

const Settings = () => {
    const handleSelect = (option: string) => {
        alert(`Selected option: ${option}`);
    };

    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        // Allow both orientations
        ScreenOrientation.unlockAsync();

        // Listen for orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        // Cleanup listener (important for memory safety)
        return () => {
            subscription?.remove?.();
        };
    }, []);

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <Text
                style={[
                    styles.title,
                    { color: theme.colors.text, textAlign: isLandscape ? 'center' : 'left' },
                ]}
            >
                Settings
            </Text>

            {/* Account Section */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
                    Account
                </Text>
                <ExpandableItems
                    title="Account Preferences"
                    items={['Profile', 'Security', 'Privacy']}
                    onSelectItem={handleSelect}
                />
            </View>

            {/* App Section */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
                    App Settings
                </Text>
                <ExpandableItems
                    title="Display Options"
                    items={['Theme', 'Language', 'Font Size']}
                    onSelectItem={handleSelect}
                />
            </View>
        </ScrollView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});
