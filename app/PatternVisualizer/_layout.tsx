import { Stack } from 'expo-router/stack';
import React from 'react';
import { useTheme } from '../Themes/ThemeContext';


const PatternLayout = () => {
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
            <Stack.Screen name='TwoPointersVisual' options={{ title: 'Two Pointers Visual' }} />
            <Stack.Screen name='SlidingWindowVisual' options={{ title: 'Sliding Window Visual' }} />
            <Stack.Screen name='FastAndSlowPointersVisual' options={{ title: 'Fast and Slow Pointers Visual' }} />
            <Stack.Screen name='BinarySearchVisual' options={{ title: 'Binary Search Visual' }} />
            <Stack.Screen name='PrefixSumVisual' options={{ title: 'Prefix Sum Visual' }} />
            <Stack.Screen name='BackTrackingVisual' options={{ title: 'BackTracking Visual' }} />
            <Stack.Screen name='BitManipulationVisual' options={{ title: 'Bit Manipulation Visual' }} />
        </Stack>
    );
}
export default PatternLayout;
