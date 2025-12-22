import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const BackTrackingVisual = () => {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>
                Backtracking Visualizer
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 499.5,
        color: 'orange',
        textAlign: 'center',
        lineHeight: 34,
        letterSpacing: 0.5,
        fontFamily: 'monospace',
    },
})

export default BackTrackingVisual;
