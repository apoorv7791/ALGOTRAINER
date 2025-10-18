import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';

// Define your custom light theme colors
const lightColors = {
    primary: '#6200ee',       // Primary brand color
    secondary: '#03dac4',     // Secondary color for interactive elements
    background: '#f6f6f6',    // Background color
    surface: '#ffffff',       // Surface color for cards, sheets, etc.
    text: '#000000',          // Primary text color
    error: '#B00020',         // Error color
    border: 'rgba(0, 0, 0, 0.1)', // Border color
    notification: '#ff3d71',  // Notification/badge color
    onSurface: '#000000',     // Text color on surface
    // Add any additional colors as needed
};

// Define your custom dark theme colors
const darkColors = {
    primary: '#bb86fc',       // Lighter purple for dark theme
    secondary: '#03dac4',     // Same secondary color for consistency
    background: '#121212',    // Dark background
    surface: '#1e1e1e',       // Slightly lighter than background
    text: '#ffffff',          // White text for dark theme
    error: '#cf6679',         // Softer red for dark theme
    border: 'rgba(255, 255, 255, 0.1)', // Lighter border for dark theme
    notification: '#ff3d71',  // Same notification color
    onSurface: '#ffffff',     // Text color on surface (dark theme)
    // Match additional colors from light theme
};

// Extend the theme types
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primary: string;
            secondary: string;
            background: string;
            surface: string;
            text: string;
            error: string;
            border: string;
            notification: string;
            onSurface: string;
        }
    }
}

// Merge with React Navigation themes
const { LightTheme: NavLightTheme, DarkTheme: NavDarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

// Create the light theme
export const lightTheme = {
    ...MD3LightTheme,
    ...NavLightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...NavLightTheme.colors,
        ...lightColors,
    },
};

// Create the dark theme
export const darkTheme = {
    ...MD3DarkTheme,
    ...NavDarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...NavDarkTheme.colors,
        ...darkColors,
    },
};

export type AppTheme = typeof lightTheme;
export default lightTheme;