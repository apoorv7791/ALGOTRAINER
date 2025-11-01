import React from 'react';
import { Stack } from 'expo-router/stack';

const DataStructuresLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="Arrays" />
            <Stack.Screen name="LinkedList" />
            <Stack.Screen name="HashMaps" />
            <Stack.Screen name="Stacks" />
            <Stack.Screen name="Queues" />
            <Stack.Screen name="Trees" />
            <Stack.Screen name="Graphs" />
        </Stack>
    );
};

export default DataStructuresLayout;
