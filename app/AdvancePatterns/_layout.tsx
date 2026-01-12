import React from 'react';
import { useTheme } from '@/app/Themes/ThemeContext';
import { Stack } from 'expo-router/stack';

const AdvancePatternsLayout = () => {
    const { theme } = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: theme.colors.primary || '#6200ee' },
                headerTintColor: theme.colors.text,
                headerTitleStyle: { fontWeight: '600' },
                animation: 'slide_from_right',
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen
                name="TwoPointers"
                options={{ title: 'Two Pointers Pattern' }}
            />
            <Stack.Screen
                name="SlidingWindow"
                options={{ title: 'Sliding Window Pattern', }}
            />
            <Stack.Screen
                name="FastAndSlowPointers" // filename without extension
                options={{ title: 'Fast and Slow Pointers Pattern' }}
            />

            <Stack.Screen
                name="BinarySearch"
                options={{ title: 'Binary Search Pattern' }}
            />
            <Stack.Screen
                name="PrefixSum"
                options={{ title: 'Prefix Sum Pattern' }}
            />
            <Stack.Screen
                name="BacktrackingPattern"
                options={{ title: 'Backtracking Pattern' }}
            />
            <Stack.Screen
                name="BitManipulation"
                options={{ title: 'Bit Manipulation Pattern' }}
            />
        </Stack>
    );
};

export default AdvancePatternsLayout;
