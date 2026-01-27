import React from 'react';
import { Stack } from 'expo-router/stack';
import { useTheme } from '@/app/Themes/ThemeContext';

const DataLayout = () => {
    const { theme } = useTheme();




    return (
        <Stack
            screenOptions={() => ({
                headerStyle: { backgroundColor: theme.colors.primary || '#6200ee' },
                headerTintColor: theme.colors.text,
                headerTitleStyle: { fontWeight: '600' },
                animation: 'slide_from_right',   // smooth navigation animation
                gestureEnabled: true,            // swipe back gesture
                gestureDirection: 'horizontal',
            })}
        >
            <Stack.Screen name='ArrayVisual' options={{ title: 'Array Visualization' }} />
            <Stack.Screen name='LinkedListVisual' options={{ title: 'Linked List Visualization' }} />
            <Stack.Screen name='StacksVisual' options={{ title: 'Stacks Visualization' }} />
            <Stack.Screen name='QueuesVisual' options={{ title: 'Queues Visualization' }} />
            <Stack.Screen name='HashMapVisual' options={{ title: 'Hash Map Visualization' }} />
            <Stack.Screen name='TreesVisual' options={{ title: 'Trees Visualization' }} />
            <Stack.Screen name='GraphsVisual' options={{ title: 'Graphs Visualization' }} />
        </Stack>
    );
}



export default DataLayout;
