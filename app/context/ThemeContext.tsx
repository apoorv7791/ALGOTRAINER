import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

// Storage key for persisting theme preference
const THEME_STORAGE_KEY = '@AlgoTrainer_theme_preference';

// Theme Context Type
type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => Promise<void>;
    theme: typeof DefaultTheme;
};

// Theme Provider Props
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const systemColorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

    // Load the saved theme preference from AsyncStorage
    useEffect(() => {
        const loadThemePreference = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (savedTheme !== null) {
                    setIsDark(savedTheme === 'dark');
                }
            } catch (error) {
                console.error('Error loading theme preference:', error);
            }
        };
        loadThemePreference();
    }, []);

    const toggleTheme = async () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme ? 'dark' : 'light');
        } catch (error) {
            console.error('Error saving theme preference:', error);
        }
    };

    // current theme
    const theme = isDark ? DarkTheme : DefaultTheme;

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};


export default ThemeProvider;