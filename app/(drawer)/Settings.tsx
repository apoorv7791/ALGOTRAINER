import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import ExpandableItems from '../components/ExpandableItems';


const Settings = () => {
    const handleSelect = (option: string) => {
        alert(`Selected option: ${option}`);
    }
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                <Text style={[styles.title, { color: theme.colors.text }]}>
                    Settings
                </Text>
            </Text>
            <ExpandableItems
                title="Account"
                items={["Profile", "Privacy", "Notifications"]}
                onSelectItem={handleSelect}
            />
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});