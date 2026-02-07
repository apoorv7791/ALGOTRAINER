import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';

const BackTrackingVisual = () => {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>Watch how Backtracking works</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 550,
    }
})

export default BackTrackingVisual;
