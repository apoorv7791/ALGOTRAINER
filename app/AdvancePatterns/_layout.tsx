import React from 'react';
import { useTheme } from '@/app/Themes/Themecontext';
import { Stack } from 'expo-router/stack';

const AdvancePatternsLayout = () => {
    const { theme } = useTheme();
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: theme.colors.primary || '#6200ee' },
                headerTintColor: theme.colors.text,
                headerTitleStyle: { fontWeight: '600' },
                animation: 'slide_from_right',  // smooth native transition
                gestureEnabled: true,           // swipe-back gesture
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen
                name="TwoPointers"
                options={{ title: 'Two Pointers Pattern' }}
            />
            <Stack.Screen
                name="SlidingWindow"
                options={{ title: 'Sliding Window Pattern' }}
            />
            <Stack.Screen
                name="FastAndSlowPointers"
                options={{ title: 'Fast and Slow Pointers Pattern' }}
            />
            <Stack.Screen
                name="PrefixSum"
                options={{ title: 'Prefix Sum Pattern' }}
            />
            <Stack.Screen
                name="BacktrackingPatterns"
                options={{ title: 'Backtracking Pattern' }}
            />
            <Stack.Screen
                name="Bit Manipulation"
                options={{ title: 'Bit Manipulation Pattern' }}
            />
        </Stack>
    );
}


export default AdvancePatternsLayout;
