import React from 'react';
import { Stack } from 'expo-router/stack';
import { useTheme } from '@/app/Themes/Themecontext';

const DataStructuresLayout = () => {
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
            <Stack.Screen name="Arrays" options={{ title: 'Arrays' }} />
            <Stack.Screen name="LinkedList" options={{ title: 'Linked List' }} />
            <Stack.Screen name="HashMaps" options={{ title: 'Hash Maps' }} />
            <Stack.Screen name="Stacks" options={{ title: 'Stacks' }} />
            <Stack.Screen name="Queues" options={{ title: 'Queues' }} />
            <Stack.Screen name="Trees" options={{ title: 'Trees' }} />
            <Stack.Screen name="Graphs" options={{ title: 'Graphs' }} />
        </Stack>
    );
};

export default DataStructuresLayout;
