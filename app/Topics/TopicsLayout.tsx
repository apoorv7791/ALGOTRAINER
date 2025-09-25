import React from 'react';
import { Stack } from 'expo-router/stack';

export default function TopicsLayout() {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerBackTitle: 'Back',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTintColor: '#007AFF',
        }}>
            <Stack.Screen 
                name="index" 
                options={{
                    title: "Data Structures",
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Arrays" 
                options={{ title: "Arrays" }} 
            />
            <Stack.Screen 
                name="LinkedList" 
                options={{ title: "Linked List" }} 
            />
            <Stack.Screen 
                name="Stacks" 
                options={{ title: "Stacks" }} 
            />
            <Stack.Screen 
                name="Queue" 
                options={{ title: "Queues" }} 
            />
            <Stack.Screen 
                name="Trees" 
                options={{ title: "Trees" }} 
            />
            <Stack.Screen 
                name="Graphs" 
                options={{ title: "Graphs" }} 
            />
            <Stack.Screen 
                name="Hashing" 
                options={{ title: "Hashing" }} 
            />
        </Stack>
    );
}