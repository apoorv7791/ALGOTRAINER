import React from 'react';
import { Stack } from 'expo-router/stack';
import { useTheme } from '@/app/Themes/ThemeContext';

const AlgoLayout = () => {
    const { theme } = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: theme.colors.primary || '#6200ee' },
                headerTintColor: theme.colors.text,
                headerTitleStyle: { fontWeight: '600' },
                animation: 'slide_from_right',   // smooth navigation animation
                gestureEnabled: true,            // swipe back gesture
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen name='SortingVisual' options={{ title: 'Sorting Visualizer' }} />
            <Stack.Screen name='SearchingVisual' options={{ title: 'Searching Visualizer' }} />
            <Stack.Screen name='GreedyVisual' options={{ title: 'Greedy Visualizer' }} />
            <Stack.Screen name='DPVisual' options={{ title: 'Dynamic Programming Visualizer' }} />
            <Stack.Screen name='BackTrackingVisual' options={{ title: 'BackTracking Visualizer' }} />
            <Stack.Screen name='TraversalVisual' options={{ title: 'Traversal Visualizer' }} />
        </Stack>
    );
}


export default AlgoLayout;
