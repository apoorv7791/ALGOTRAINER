import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../Themes/Themecontext';


const NodeCircle = ({ label, highlighted }: { label: string, highlighted: boolean }) => {
    const { theme } = useTheme(); // Get current theme colors

    return (
        <View style={[
            styles.node, // Base styling for node
            { backgroundColor: highlighted ? '#FF6B6B' : theme.colors.primary } // Highlight node if active, else primary color
        ]}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{label}</Text> {/* Display node value */}
        </View>
    );
};

const BackTrackingVisual = () => {
    const { theme } = useTheme();

    return (
        <View
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            className="flex-1 justify-center p-5"
        >
            <Text
                style={[styles.header, { color: theme.colors.text }]}
                className="text-center font-bold text-3xl"
            >
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
    node: { width: 55, height: 55, borderRadius: 30, justifyContent: 'center', alignItems: 'center', margin: 10 }, // Node circle styling 
})

export default BackTrackingVisual;
