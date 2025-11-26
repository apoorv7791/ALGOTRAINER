import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const GraphsVisual = () => {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Graph Visualliaztion</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})

export default GraphsVisual;
