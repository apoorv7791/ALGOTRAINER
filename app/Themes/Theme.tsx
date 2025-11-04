import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';

// ✅ Light theme colors
const lightColors = {
    primary: '#6200ee',
    secondary: '#03dac4',
    background: '#f6f6f6',
    surface: '#ffffff',
    text: '#000000',
    description: '#00796B',      // 💚 Bright green for light theme     // Primary text
    textSecondary: '#333333',    // ✅ For subtitles / descriptions
    error: '#B00020',
    border: 'rgba(0, 0, 0, 0.1)',
    notification: '#ff3d71',
    onSurface: '#000000',
};

// ✅ Dark theme colors
const darkColors = {
    primary: '#bb86fc',
    secondary: '#03dac4',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    description: '#00E5A0', // 💚 Bright green for dark theme         // Primary text
    textSecondary: '#dddddd',    // ✅ For subtitles / descriptions
    error: '#cf6679',
    border: 'rgba(255, 255, 255, 0.1)',
    notification: '#ff3d71',
    onSurface: '#ffffff',
};

// ✅ Extend the theme type
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primary: string;
            secondary: string;
            background: string;
            surface: string;
            text: string;
            textSecondary: string; // ✅ Added new color
            error: string;
            border: string;
            notification: string;
            onSurface: string;
        }
    }
}

// ✅ Merge React Navigation + Paper themes
const { LightTheme: NavLightTheme, DarkTheme: NavDarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

// ✅ Light Theme
export const lightTheme = {
    ...MD3LightTheme,
    ...NavLightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...NavLightTheme.colors,
        ...lightColors,
    },
};

// ✅ Dark Theme
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
