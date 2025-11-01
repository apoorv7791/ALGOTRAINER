import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';

const Greedy = () => {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>
                Greedy Algorithms
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})

export default Greedy;
