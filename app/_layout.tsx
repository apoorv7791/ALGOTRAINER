// app/_layout.tsx
import React from 'react';
import { ThemeProvider } from './Themes/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router/stack';
import { LogBox } from 'react-native';

// Suppress specific deprecation warnings from third-party libraries
LogBox.ignoreLogs([
    'SafeAreaView has been deprecated',
    'InteractionManager has been deprecated',
    'Property "opacity" of AnimatedComponent'
]);

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
