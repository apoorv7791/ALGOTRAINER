import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const QueuesVisual = () => {
    const { theme } = useTheme();
    return (
        <View>
            <Text>Queues</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default QueuesVisual;
