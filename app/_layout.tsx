import React from 'react';
import { Stack } from 'expo-router/stack';
import { ThemeProvider } from './Themes/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "SafeAreaView has been deprecated",
]);

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ThemeProvider>
                    <Stack
                        screenOptions={{
                            headerShown: false,
                            // Optional but very commonly added in 2025+ projects:
                            animation: 'fade_from_bottom', // or 'slide_from_right', 'simple_push', etc
                            contentStyle: { backgroundColor: 'transparent' }, // helps with custom themes
                        }}
                    />
                </ThemeProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}