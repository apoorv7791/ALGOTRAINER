import React from 'react';
import { Stack } from 'expo-router/stack';

const AlgorithmsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="Sorting" />
            <Stack.Screen name="Searching" />
            <Stack.Screen name="Greedy" />
            <Stack.Screen name="DynamicProgramming" />
            <Stack.Screen name="GraphAlgorithms" />
            <Stack.Screen name="Backtracking" />
        </Stack>
    );

};

export default AlgorithmsLayout;
