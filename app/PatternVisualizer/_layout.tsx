import { Stack } from 'expo-router/stack';
import React from 'react';
import { useTheme } from '../Themes/Themecontext';


const PatternLayout = () => {
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

        </Stack>
    );
}
export default PatternLayout;
