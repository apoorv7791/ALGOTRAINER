// app/_layout.tsx
import React from 'react';
import { ThemeProvider } from './Themes/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router/stack';

export default function RootLayout() {
    // Temporarily silence the deprecated SafeAreaView warning coming from
    // dependencies. Prefer fixing/upgrading those packages long-term.
    LogBox.ignoreLogs(['SafeAreaView has been deprecated']);
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
