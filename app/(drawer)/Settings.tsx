import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const Settings = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Settings
            </Text>
            <Text style={{ color: theme.colors.text }}>
                App settings will appear here.
            </Text>
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
