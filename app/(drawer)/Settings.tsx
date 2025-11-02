import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import ExpandableItems from '../components/ExpandableItems';
import { ScrollView } from 'react-native-gesture-handler';


const Settings = () => {
    const handleSelect = (option: string) => {
        alert(`Selected option: ${option}`);
    }
    const { theme } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* Screen Title */}
            <Text style={[styles.title, { color: theme.colors.text }]}>Settings</Text>
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
        alignItems: 'stretch', // ✅ replaced alignItems & justifyContent here
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
        elevation: 3, // shadow for Android
        shadowColor: '#000', // shadow for iOS
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});