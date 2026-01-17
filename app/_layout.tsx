// app/_layout.tsx
import React from 'react';
import { ThemeProvider } from './Themes/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router/stack';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ThemeProvider>
                    <Stack screenOptions={{ headerShown: false }} />
                </ThemeProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
