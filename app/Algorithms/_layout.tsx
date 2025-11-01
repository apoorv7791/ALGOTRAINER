import React from 'react';
import { Stack } from 'expo-router/stack';
import { useTheme } from '@/app/Themes/Themecontext';

const AlgorithmsLayout = () => {
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
                name="Sorting"
                options={{ title: 'Sorting Algorithms' }}
            />
            <Stack.Screen
                name="Searching"
                options={{ title: 'Searching Algorithms' }}
            />
            <Stack.Screen
                name="Greedy"
                options={{ title: 'Greedy Algorithms' }}
            />
            <Stack.Screen
                name="DynamicProgramming"
                options={{ title: 'Dynamic Programming' }}
            />
            <Stack.Screen
                name="GraphAlgorithms"
                options={{ title: 'Graph Algorithms' }}
            />
            <Stack.Screen
                name="Backtracking"
                options={{ title: 'Backtracking' }}
            />
        </Stack>
    );
};

export default AlgorithmsLayout;
