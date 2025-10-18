// app/_layout.tsx
import { ThemeProvider } from './Themes/Themecontext';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router/stack';

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
                <Stack screenOptions={{ title: "AlgoTrainer" }}>
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="about"
                        options={{
                            title: 'About',
                        }}
                    />
                    <Stack.Screen
                        name="learning-modules"
                        options={{
                            title: 'Learning Modules',
                        }}
                    />
                    <Stack.Screen
                        name="settings"
                        options={{
                            title: 'Settings',
                        }}
                    />
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}